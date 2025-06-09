'use client';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { LogOut } from 'lucide-react';

// Initialize Supabase client
const supabaseUrl = 'https://appupdgxzspiysbpybcz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwcHVwZGd4enNwaXlzYnB5YmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTUyMDAsImV4cCI6MjA1OTY3MTIwMH0.5KS6T4cmosmy7-kscITPvsUKFYKU1af7-Qmn5KmIGdE'; // replace with your actual anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const Signout = () => {
    const router = useRouter();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Logout error:', error.message);
        } else {
            router.push('/auth/login'); // Redirect to homepage or login
        }
    };

    return (


        <div onClick={() => handleLogout()} className="flex items-center gap-3 px-3 py-2 hover:bg-orange-100 cursor-pointer transition-all">
            <span className="text-gray-500 text-[16px]">{<LogOut />}</span>
            <span className="text-[16px] text-gray-700">{'Logout'}</span>
        </div>
    );
};
