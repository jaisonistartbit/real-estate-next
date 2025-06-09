'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://appupdgxzspiysbpybcz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwcHVwZGd4enNwaXlzYnB5YmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTUyMDAsImV4cCI6MjA1OTY3MTIwMH0.5KS6T4cmosmy7-kscITPvsUKFYKU1af7-Qmn5KmIGdE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function AuthCallback() {
    const router = useRouter();

    useEffect(() => {
        const completeSignIn = async () => {
            const { data, error } = await supabase.auth.getSession();

            if (error) {
                console.error('OAuth Callback Error:', error.message);
                return;
            }

            router.push('/'); // or redirect to dashboard
        };

        completeSignIn();
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-screen text-lg">
            Completing login...
        </div>
    );
}
