'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';


const supabase = createClient(
    'https://appupdgxzspiysbpybcz.supabase.co',
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwcHVwZGd4enNwaXlzYnB5YmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTUyMDAsImV4cCI6MjA1OTY3MTIwMH0.5KS6T4cmosmy7-kscITPvsUKFYKU1af7-Qmn5KmIGdE'
);
 
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user ?? null);
            setLoading(false);
        };

        getSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
