// graphql/resolvers.js
import { supabase } from '@/lib/supabase';

export default {
    Query: {
        books: async () => {
            const { data, error } = await supabase.from('books').select('*');
            if (error) {
                console.error('Error fetching books:', error.message);
                throw new Error('Failed to fetch books');
            }
            return data;
        },
    },

    Mutation: {
        addBook: async (_, { title, author }) => {
            const { data, error } = await supabase
                .from('books')
                .insert([{ title, author }])
                .select()
                .single();

            if (error) {
                console.error('Error adding book:', error.message);
                throw new Error('Failed to add book');
            }
            return data;
        },
        deleteBook: async (_, { id }) => {
            const { data, error } = await supabase.from('books').delete().eq('id', id).select()
                .single()
            if (error) throw new Error(error.message);
            return data; // return the deleted book info (optional)
        }
    },
};
