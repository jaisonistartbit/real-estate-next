// resolvers/propertyResolvers.js

import { supabase } from "@/lib/supabase";

 
const propertyResolvers = {
  Query: {
    async getProperties() {
      const { data, error } = await supabase.from('properties').select('*');
      if (error) throw new Error(error.message);
      return data;
    }
  },

  Mutation: {
    async addProperty(_, args) {
      const { data, error } = await supabase
        .from('properties')
        .insert([args])
        .select()
        .single(); // return the newly inserted row

      if (error) throw new Error(error.message);
      return data;
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
