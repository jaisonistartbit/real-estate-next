'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { Github } from 'lucide-react';

const supabaseUrl = 'https://appupdgxzspiysbpybcz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwcHVwZGd4enNwaXlzYnB5YmN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTUyMDAsImV4cCI6MjA1OTY3MTIwMH0.5KS6T4cmosmy7-kscITPvsUKFYKU1af7-Qmn5KmIGdE'; // Make sure to use full key in actual implementation
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    else router.push('/');
  };

  const handleOAuth = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    });
    if (error) setError(error.message);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* Left Side - Form */}
        <div className="p-8 md:px-12 py-20 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Welcome back to Homies</h1>

          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded text-lg font-semibold transition"
            >
              Login
            </button>
          </form>

          <div className="my-6 text-center text-gray-500">OR</div>

          <div className="space-y-4">
            <button
              onClick={() => handleOAuth('google')}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded hover:bg-gray-50"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" style={{ cursor: "pointer", width: "24px", height: "24px" }} />
              Continue with Google
            </button>
            <button
              onClick={() => handleOAuth('github')}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded hover:bg-gray-50"
            >
              {/* <img src="/github-icon.svg" alt="GitHub" className="w-5 h-5" /> */}
              <Github className="w-5 h-5 text-black" />
              Continue with GitHub
            </button>
          </div>
        </div>

        {/* Right Side - Image + Text */}
        <div className="relative hidden md:block">
          <img
            src="/images/cities/city1.jpg"
            alt="Home Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/30 text-white px-6 py-4">
            <h2 className="text-2xl font-bold">Home, safe home</h2>

          </div>
        </div>

      </div>
    </div>
  );
}
