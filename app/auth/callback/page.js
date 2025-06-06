'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

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
