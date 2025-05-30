'use client'
import { useEffect, useState } from 'react';
import CityCardView from "./CityCardView";
import { useRouter } from 'next/navigation';

const NearCities = () => {
    const [cities, setCities] = useState([]);

    const router = useRouter()
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}/graphql`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        query: `
                            query {
                                getCities {
                                    id
                                    city
                                    state
                                    no_of_property
                                }
                            }
                        `
                    })
                });

                const json = await res.json();
                const allCities = json?.data?.getCities || [];
                setCities(allCities?.slice(0, 7)); // only take 7 cities max
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };

        fetchCities();
    }, []);

    return (
        <div>
            <div className="text-center mt-[80px]">
                <h1 className="text-[1.8rem] font-[700] tracking-wide mb-2">
                    Explore The Neighborhoods
                </h1>
                <p className="text-gray-500 text-[0.8rem] font-[400] tracking-[1px]">
                    Find your dream apartment with our listing
                </p>

                <div className="w-[93%] mx-auto mt-[50px] mb-[50px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-3">
                        {cities?.[0] && <div onClick={() => { router.push(`/city/${cities?.[0]?.city}`) }} className="text-center cursor-pointer"><CityCardView imageUrl={'/images/cities/city1.jpg'} cityName={cities?.[0]?.city} propertyCount={cities?.[0]?.no_of_property} /></div>}
                        {cities?.[1] && <div onClick={() => { router.push(`/city/${cities?.[1]?.city}`) }} className="text-center cursor-pointer"><CityCardView imageUrl={'/images/cities/city5.jpg'} cityName={cities?.[1]?.city} propertyCount={cities?.[1]?.no_of_property} /></div>}
                        {cities?.[2] && <div onClick={() => { router.push(`/city/${cities?.[2]?.city}`) }} className="text-center cursor-pointer"><CityCardView imageUrl={'/images/cities/city3.jpg'} cityName={cities?.[2]?.city} propertyCount={cities?.[2]?.no_of_property} /></div>}
                        {cities?.[3] && <div onClick={() => { router.push(`/city/${cities?.[3]?.city}`) }} className="text-center cursor-pointer"><CityCardView imageUrl={'/images/cities/city4.jpg'} cityName={cities?.[3]?.city} propertyCount={cities?.[3]?.no_of_property} /></div>}
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {cities?.[4] && <div onClick={() => { router.push(`/city/${cities?.[4]?.city}`) }} className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 text-center cursor-pointer"><CityCardView imageUrl={'/images/cities/city2.jpg'} cityName={cities?.[4]?.city} propertyCount={cities?.[4]?.no_of_property} /></div>}
                        {cities?.[5] && <div onClick={() => { router.push(`/city/${cities?.[5]?.city}`) }} className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-2 text-center cursor-pointer"><CityCardView imageUrl={'/images/cities/city6.jpg'} cityName={cities?.[5]?.city} propertyCount={cities?.[5]?.no_of_property} /></div>}
                        {cities?.[6] && <div onClick={() => { router.push(`/city/${cities?.[6]?.city}`) }} className="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 text-center cursor-pointer"><CityCardView imageUrl={'/images/cities/city7.jpg'} cityName={cities?.[6]?.city} propertyCount={cities?.[6]?.no_of_property} /></div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NearCities;
