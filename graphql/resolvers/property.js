// resolvers/propertyResolvers.js

import { supabase } from "@/lib/supabase";


const propertyResolvers = {
  Query: {
    async getProperties(_, { limit }) {
      const query = supabase.from('properties').select('*');

      if (limit) query.limit(limit);

      const { data, error } = await query;
      if (error) throw new Error(error.message);
      return data;
    },

    async getPropertyById(_, { id }) {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw new Error(error.message);
      return data;
    },

    async getPropertiesByUserId(_, { user_id }) {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('user_id', user_id);

      if (error) throw new Error(error.message);
      return data;
    },
    async getPropertiesByCityName(_, { city }) {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('city', city); // direct match with city field in properties

      if (error) throw new Error(error.message);
      return data;
    }


  },

  Mutation: {
    async addProperty(_, args) {
      // 1. Insert the new property
      const { data: property, error } = await supabase
        .from('properties')
        .insert([args])
        .select()
        .single();

      if (error) throw new Error(error.message);

      // 2. Check if the city already exists in cities table
      const { data: existingCity, error: cityError } = await supabase
        .from('cities')
        .select('*')
        .eq('city', args.city)
        .eq('state', args.state)
        .single();

      if (cityError && cityError.code !== 'PGRST116') {
        // Only throw if the error is not "row not found"
        throw new Error(cityError.message);
      }

      if (existingCity) {
        // 3a. If city exists, increment no_of_property
        const { error: updateError } = await supabase
          .from('cities')
          .update({ no_of_property: existingCity.no_of_property + 1 })
          .eq('city', args.city)
          .eq('state', args.state);

        if (updateError) throw new Error(updateError.message);
      } else {
        // 3b. If not exists, insert it with no_of_property = 1
        const { error: insertError } = await supabase
          .from('cities')
          .insert([{ city: args.city, state: args.state, no_of_property: 1 }]);

        if (insertError) throw new Error(insertError.message);
      }

      return property;
    },

    async deleteProperty(_, { id }) {
      const { data, error } = await supabase
        .from('properties')
        .delete()
        .eq('id', id)
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    }
  }
};

export default propertyResolvers;
