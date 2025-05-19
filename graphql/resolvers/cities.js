import { supabase } from '@/lib/supabase';

const cityResolvers = {
  Query: {
    async getCities() {
      const { data, error } = await supabase.from('cities').select('*');
      if (error) throw new Error(error.message);
      return data;
    }
  }
};

export default cityResolvers;
