import { supabase } from "@/lib/supabase";
import { parseQuery } from "@/lib/parseQuery";

const propertyResolvers = {
  Query: {
    async getProperties(_, {
      limit,
      offset = 0,
      filters = {}
    }) {
      console.log('limit, offset, filters:', limit, offset, filters);

      let query = supabase.from("properties").select("*", { count: 'exact' });

      // Pagination
      if (limit) {
        query = query.range(offset, offset + limit - 1);
      }

      const {
        minPrice,
        maxPrice,
        propertyType,
        bedrooms,
        furnishingStatus,
        listedBy,
        amenities,
        city,
        state,
        availableFrom,
        availableFor,
        minRooms,
        maxRooms,
        minBathrooms,
        maxBathrooms,
        isBooked,
        searchQuery
      } = filters;

      // Price range filter
      if (minPrice !== undefined || maxPrice !== undefined) {
        if (minPrice !== undefined && maxPrice !== undefined) {
          query = query.gte('price', minPrice).lte('price', maxPrice);
        } else if (minPrice !== undefined) {
          query = query.gte('price', minPrice);
        } else if (maxPrice !== undefined) {
          query = query.lte('price', maxPrice);
        }
      }

      // Property type filter
      if (propertyType && propertyType.length > 0) {
        query = query.in('property_type', propertyType);
      }

      // Bedrooms filter
      if (bedrooms && bedrooms.length > 0) {
        const numericBedrooms = bedrooms.map(bed => {
          if (bed === '4+') return 'gte.4';
          return `eq.${bed}`;
        });

        const orConditions = numericBedrooms.map(bed => `total_rooms.${bed}`);
        if (orConditions.length > 0) {
          query = query.or(orConditions.join(','));
        }
      }

      // Furnishing status filter
      if (furnishingStatus && furnishingStatus.length > 0) {
        query = query.in('furnishing_status', furnishingStatus);
      }

      // Listed by filter
      if (listedBy && listedBy.length > 0) {
        query = query.in('posted_by', listedBy);
      }

      // Amenities filter (array contains)
      if (amenities && amenities.length > 0) {
        query = query.contains('amenities', amenities);
      }

      // Location filters
      if (city) {
        query = query.ilike('city', `%${city}%`);
      }
      if (state) {
        query = query.ilike('state', `%${state}%`);
      }

      // Availability filters
      if (availableFrom) {
        query = query.gte('available_from', availableFrom);
      }
      if (availableFor) {
        query = query.eq('available_for', availableFor);
      }

      // Room count range
      if (minRooms !== undefined || maxRooms !== undefined) {
        if (minRooms !== undefined) query = query.gte('total_rooms', minRooms);
        if (maxRooms !== undefined) query = query.lte('total_rooms', maxRooms);
      }

      // Bathroom count range
      if (minBathrooms !== undefined || maxBathrooms !== undefined) {
        if (minBathrooms !== undefined) query = query.gte('total_bathroom', minBathrooms);
        if (maxBathrooms !== undefined) query = query.lte('total_bathroom', maxBathrooms);
      }

      // Booking status
      if (isBooked !== undefined) {
        query = query.eq('isbooked', isBooked);
      }

      // Text search
      if (searchQuery) {
        query = query.or(
          `name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,location.ilike.%${searchQuery}%`
        );
      }

      const { data, error, count } = await query;

      if (error) throw new Error(error.message);

      return {
        properties: data,
        totalCount: count,
        hasMore: limit ? count > offset + limit : false
      };
    }
    ,
    async getPropertyById(_, { id }) {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw new Error(error.message);
      return data;
    },

    async getPropertiesByUserId(_, { user_id }) {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .eq("user_id", user_id);

      if (error) throw new Error(error.message);
      return data;
    },

    async getPropertiesByCityName(_, { city }) {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .ilike("city", `%${city}%`);

      if (error) throw new Error(error.message);
      return data;
    },

    async searchProperties(_, { query }) {
      const filters = parseQuery(query);
      console.log("//////////////////////", filters);

      let supa = supabase.from("properties").select("*");

      if (filters.total_rooms) {
        supa = supa.eq("total_rooms", filters.total_rooms);
      }

      if (filters.max_price) {
        supa = supa.lte("price", filters.max_price);
      }

      if (filters.location) {
        supa = supa.ilike("city", `%${filters.location}%`);
      }

      const { data, error } = await supa;
      if (error) throw new Error(error.message);
      return data;
    }
  },

  Mutation: {
    async addProperty(_, args) {
      const {
        amenities = [],
        furnishing_status = null,
        available_for = null,
        available_from = null,
        posted_by = null,
        property_age = null,
        ...rest
      } = args;

      const propertyPayload = {
        ...rest,
        amenities, // now an array of strings
        furnishing_status,
        available_for,
        available_from,
        posted_by,
        property_age
      };

      const { data: property, error } = await supabase
        .from("properties")
        .insert([propertyPayload])
        .select()
        .single();

      if (error) throw new Error(error.message);

      const { data: existingCity, error: cityError } = await supabase
        .from("cities")
        .select("*")
        .eq("city", args.city)
        .eq("state", args.state)
        .single();

      if (cityError && cityError.code !== "PGRST116") {
        throw new Error(cityError.message);
      }

      if (existingCity) {
        const { error: updateError } = await supabase
          .from("cities")
          .update({ no_of_property: existingCity.no_of_property + 1 })
          .eq("city", args.city)
          .eq("state", args.state);

        if (updateError) throw new Error(updateError.message);
      } else {
        const { error: insertError } = await supabase
          .from("cities")
          .insert([{ city: args.city, state: args.state, no_of_property: 1 }]);

        if (insertError) throw new Error(insertError.message);
      }

      return property;
    },

    async editProperty(_, args) {
      const {
        id,
        amenities = [],
        furnishing_status = null,
        available_for = null,
        available_from = null,
        posted_by = null,
        property_age = null,
        ...rest
      } = args;

      const updateFields = {
        ...rest,
        amenities, // array of strings
        furnishing_status,
        available_for,
        available_from,
        posted_by,
        property_age
      };

      const { data, error } = await supabase
        .from("properties")
        .update(updateFields)
        .eq("id", id)
        .select()
        .single();

      if (error) throw new Error(error.message);

      return data;
    },

    async deleteProperty(_, { id }) {
      const { data, error } = await supabase
        .from("properties")
        .delete()
        .eq("id", id)
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    }
  }
};

export default propertyResolvers;
