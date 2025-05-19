'use client';
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const MainBanner = () => {
    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        const trimmed = searchValue.trim();
        if (trimmed) {
            router.push(`/city/${encodeURIComponent(trimmed)}`);
        }
    };

    return (
        <div>
            <div className="bg-[url('/images/landing-page/banner-main-image.jpg')] w-full h-[450px] bg-center bg-no-repeat bg-cover">
                <div className="bg-black/50 h-full w-full flex pt-[80px]">
                    <div className="lg:w-[50%] container mx-auto text-center">
                        <h1 className="text-white font-bold text-[2.5rem] tracking-wide">
                            Search Luxury Flats & Rooms
                        </h1>
                        <p className="text-white font-normal text-[0.9rem] mt-3 mb-[35px]">
                            Thousands of luxury flats and rooms enthusiasts just like you visit our website
                        </p>

                        <div>
                            <div className="bg-white h-[50px] w-[80%] mx-auto rounded-lg p-2 ps-4 flex justify-between">
                                <input
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                                    className="w-[85%] md:w-[70%] lg:w-[70%] border-b-2 border-transparent focus:border-gray-300 focus:outline-none hover:border-gray-300 transition-all duration-300"
                                    type="text"
                                    placeholder="Place, neighbourhood, school or agent..."
                                />
                                <div className="flex gap-2">
                                    <div>
                                        <img src="/icons/filterIcon.png" alt="Filter" className="h-[24px] w-[22px] mt-1 cursor-pointer" />
                                    </div>
                                    <button
                                        onClick={handleSearch}
                                        className="hidden lg:flex md:flex sm:flex bg-orange-400 text-[16px] text-white font-semibold w-[100px] ps-4 pe-3 pt-[5px] pb-1 rounded-lg cursor-pointer hover:bg-orange-200 hover:text-orange-400 "
                                    >
                                        Search
                                        <SearchOutlined className="ms-1 pt-0  hover:bg-orange-200 hover:text-orange-400 " style={{   fontSize: '15px' }} />
                                    </button>
                                </div>
                            </div>

                            <div className="pt-3">
                                <button
                                    onClick={handleSearch}
                                    className="flex lg:hidden md:hidden sm:hidden bg-orange-400 text-[16px] text-white font-semibold mx-auto px-3 py-1 rounded-lg  "
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;
