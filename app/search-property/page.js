'use client';

import { useEffect, useState } from "react";
import CardView from "@/components/users/landing_page/flats-listing/CardView";
import Footer from "@/components/users/landing_page/footer/Footer";
import NavigationBar from "@/components/users/landing_page/navbar_component/NavigationBar";

const fetchPropertiesBySearchQuery = async (searchQuery) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}/graphql`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
        query SearchProperties($query: String!) {
          searchProperties(query: $query) {
            id
            name
            location
            total_rooms
            total_bathroom
            dimension
            price
            property_banner_image
          }
        }
      `,
            variables: { query: searchQuery },
        }),
        cache: "no-store",
    });

    const json = await res.json();
    return json?.data?.searchProperties || [];
};

export default function CityPropertyPage() {
    const [properties, setProperties] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedQuery = sessionStorage.getItem("searchQuery");

        if (storedQuery) {
            setSearchQuery(storedQuery);
            setLoading(true);

            fetchPropertiesBySearchQuery(storedQuery).then((data) => {
                setProperties(data);
                setLoading(false);
            });
        }
    }, []);

    return (
        <div className=" min-h-screen flex flex-col  ">
            <NavigationBar />
            <main className="flex-grow">


                <div className="text-center mt-[50px]">
                    <h1 className="text-[1.8rem] font-[700] tracking-wide mb-2">
                        Search Results
                    </h1>
                    <p className="text-gray-500 text-[0.8rem] font-[400] tracking-[1px]">
                        Showing properties for: <strong>{searchQuery || "..."}</strong>
                    </p>

                    {loading ? (
                        <div className="flex justify-center items-center mt-12 mb-10 bg-white dark:bg-gray-900">
                            <div className="text-center">
                                <svg
                                    className="animate-spin h-10 w-10 text-brand-500 mx-auto"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="orange"
                                        strokeWidth="4"
                                        fill="none"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="orange"
                                        d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 000 16v4l3.5-3.5L12 20v-4a8 8 0 01-8-8z"
                                    />
                                </svg>
                                <p className="mt-4 text-gray-700 dark:text-white">Fetching Properties...</p>
                            </div>
                        </div>
                    ) : properties.length > 0 ? (
                        <div className="container lg:w-[90%] md:w-[95%] sm:w-[95%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-5">
                            {properties.map((property) => (
                                <CardView item={property} key={property?.id} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center my-10">
                            <span className="bg-orange-200 text-orange-400 text-lg rounded-lg px-4 py-2">
                                No property matched your search!
                            </span>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
