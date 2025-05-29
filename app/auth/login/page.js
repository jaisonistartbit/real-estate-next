// pages/auth/login.js
'use client'
// pages/auth/login.js
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

const supabaseUrl = 'https://appupdgxzspiysbpybcz.supabase.co';
const supabaseAnonKey = 'eyJhbGc';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const backgroundImages = [
    '/images/cities/city1.jpg',
    '/images/cities/city2.jpg',
    '/images/cities/city3.jpg',
    '/images/cities/city4.jpg',
    '/images/cities/city5.jpg',
    '/images/cities/city6.jpg',
    '/images/cities/city7.jpg',
    '/images/cities/city1.jpg',
];

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) setError(error.message);
        else router.push('/dashboard');
    };

    const handleOAuth = async (provider) => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${location.origin}/auth/callback`
            }
        });
        if (error) setError(error.message);
    };

    return (
        <div className="relative h-screen overflow-hidden p-4">
            <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 z-0">
                {backgroundImages.map((src, i) => (
                    <div
                        key={i}
                        className={`overflow-hidden rounded-md ${i % 5 === 0
                            ? 'row-span-1 col-span-2'
                            : i % 2 === 0 ? 'row-span-2'
                                : i % 3 === 0
                                    ? 'row-span-2 '
                                    : ''
                            }  `}
                    >
                        <img
                            src={src}
                            alt={`property-${i}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* <div className="absolute inset-0   bg-opacity-70 flex justify-center items-center z-10">
        <div className="bg-white p-10 rounded-xl w-full max-w-md shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full p-3 mb-4 border border-orange-500 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-3 mb-4 border border-orange-500 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            className="w-full bg-green-600 text-white p-3 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <p className="mb-2">Or Login With</p>
            <button
              className="bg-orange-500 text-white w-full p-3 rounded"
              onClick={() => handleOAuth('google')}
            >
              Google
            </button>
          </div>
        </div>
      </div> */}
        </div >
    );
}


{/* <div className="bg-white p-10 rounded-xl w-full max-w-md shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 mb-4 border border-orange-500 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 mb-4 border border-orange-500 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          className="w-full bg-green-600 text-white p-3 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <p className="mb-2">Or Login With</p>
          <button
            className="bg-orange-500 text-white w-full p-3 rounded"
            onClick={() => handleOAuth('google')}
          >
            Google
          </button>
        </div>
      </div> */}



// <div className="min-h-screen bg-[#f6f0f0] p-6">
//      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//         {images.map((src, i) => (
//             <div
//                 key={i}
//                 className={`overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ${i % 5 === 0
//                     ? 'row-span-2 col-span-2'
//                     : i % 3 === 0
//                         ? 'row-span-2'
//                         : ''
//                     }`}
//             >
//                 <img
//                     src={src}
//                     alt={`property-${i}`}
//                     className="w-full h-full object-cover"
//                 />
//             </div>
//         ))}
//     </div>
// </div>