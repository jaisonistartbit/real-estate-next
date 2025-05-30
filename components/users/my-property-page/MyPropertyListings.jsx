'use client'
import { useRouter } from "next/navigation";

const MyPropertyListing = ({ properties }) => {

    const router = useRouter();

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
            {properties.map((property) => (
                <div
                    key={property?.id}
                    className="relative flex flex-col md:flex-row rounded-2xl p-5 bg-white shadow-[0_8px_20px_rgba(71,85,105,0.1)] border border-gray-100"
                >
                    {/* Action Badges */}
                    <div className="absolute top-6 right-6 flex gap-2 z-10">
                        <span className="px-4 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold hover:bg-sky-200 cursor-pointer transition" onClick={() => {
                            router.push(`/edit-property/${property?.id}`);

                        }}>
                            Edit
                        </span>

                        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold hover:bg-orange-200 cursor-pointer shadow-sm transition" onClick={() => {
                            router.push(`/property/${property?.id}`);

                        }}>
                            View
                        </span>
                    </div>

                    {/* Left Image */}
                    <div className="md:w-1/3 w-full overflow-hidden rounded-xl">
                        <img
                            src={property?.property_banner_image}
                            alt={property?.name}
                            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                        />
                    </div>

                    {/* Right Details */}
                    <div className="md:ml-6 mt-4 md:mt-0 md:w-2/3 w-full space-y-1 text-slate-700">
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">{property?.name}</h2>
                        <p><span className="font-semibold text-indigo-500">Flat Type:</span> {property?.property_type}</p>
                        <p><span className="font-semibold text-indigo-500">Location:</span> {property?.location}</p>
                        <p><span className="font-semibold text-indigo-500">Price:</span> <span className="text-lg font-bold text-teal-600">₹{property?.price.toLocaleString()}</span></p>
                        <p><span className="font-semibold text-indigo-500">Total Rooms:</span> {property?.total_rooms}</p>
                        <p><span className="font-semibold text-indigo-500">Total Bathrooms:</span> {property?.total_bathroom}</p>
                        <p><span className="font-semibold text-indigo-500">Dimension:</span> {property?.dimension}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyPropertyListing;
