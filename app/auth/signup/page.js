'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { Github } from 'lucide-react';
import { Eye, EyeOff } from 'lucide-react';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // replace with your actual anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default function SignupPage() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true); // start loading
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }

        const trimmedEmail = email.trim();

        const { error } = await supabase.auth.signUp({
            email: trimmedEmail,
            password,
            options: {
                data: { full_name: fullName }
            }
        });
        setLoading(false);

        if (error) setError(error.message);
        else router.push('/');
    };

    const handleOAuth = async (provider) => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${process.env.BRANCH == 'DEV' ? process.env.NEXT_PUBLIC_CALLBACK_URL_LIVE : location.origin}/auth/callback`
            }
        });
        if (error) setError(error.message);
    };

    return (
        <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

                {/* Left Side - Form */}
                <div className="p-8 md:px-12 pt-15 pb-20   flex flex-col justify-center relative">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-6">Create your Homies account</h1>

                    <form className="space-y-4" onSubmit={handleSignup}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="Confirm Password"
                                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <div
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </div>
                        </div>


                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
                            type="submit"
                            className={`w-full ${(loading) ? 'border border-2 border-orange-300  py-1' : 'bg-orange-500 hover:bg-orange-700 text-white  py-3'}   rounded text-lg font-semibold transition`}
                        >
                            {(loading) ?

                                <div className="text-center">
                                    <svg className="animate-spin h-8 w-8 text-brand-500 mx-auto" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="orange" strokeWidth="4" fill="none" />
                                        <path
                                            className="opacity-75"
                                            fill="orange"
                                            d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 000 16v4l3.5-3.5L12 20v-4a8 8 0 01-8-8z"
                                        />
                                    </svg>



                                </div>
                                :
                                'Sign Up'}

                        </button>
                        <p className="text-sm text-center text-gray-600">
                            Already have an account?{' '}
                            <a
                                href="/auth/login"
                                className="text-orange-400 hover:underline font-medium"
                            >
                                Login
                            </a>
                        </p>
                    </form>

                    <div className="my-6 text-center text-gray-500">OR</div>

                    <div className="space-y-4">
                        <button
                            onClick={() => handleOAuth('google')}
                            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded hover:bg-gray-50"
                        >
                            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" style={{ width: "24px", height: "24px" }} />
                            Continue with Google
                        </button>
                        <button
                            onClick={() => handleOAuth('github')}
                            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded hover:bg-gray-50"
                        >
                            <Github className="w-5 h-5 text-black" />
                            Continue with GitHub
                        </button>
                    </div>
                    <div className='absolute bottom-3 right-8 text-md font-bold text-orange-500 cursor-pointer' onClick={() => { router.push('/') }}>Skip &#10148;</div>
                </div>

                {/* Right Side - Image + Text */}
                <div className="relative hidden md:block">
                    <img
                        src="/images/cities/city1.jpg"
                        alt="Home Image"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/30 text-white px-6 py-4">
                        <h2 className="text-2xl font-bold">Join us at Homies</h2>
                    </div>
                </div>

            </div>
        </div>
    );
}
