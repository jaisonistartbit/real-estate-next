 import { Bath, BedDouble, Calendar, Car, Home, Layers, Move, ParkingCircle, Ruler } from "lucide-react";
import CardView from "../landing_page/flats-listing/CardView";

export default function PropertyDetailPage() {
    return (
        <div className="bg-white">
            {/* Header Images Section */}
            <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <img
                    src="/images/flats/FlatPhoto1.jpg"
                    alt="Main Property"
                    className="col-span-1 lg:col-span-2 w-full h-[400px] object-cover rounded-lg"
                />
                <div className="grid grid-cols-2 gap-2">
                    <img
                        src="/images/flats/FlatPhoto2.jpg"
                        alt="Sub 1"
                        className="w-full h-[195px] object-cover rounded-lg"
                    />
                    <img
                        src="/images/flats/FlatPhoto3.jpg"
                        alt="Sub 2"
                        className="w-full h-[195px] object-cover rounded-lg"
                    />
                    <img
                        src="/images/flats/FlatPhoto4.jpg"
                        alt="Sub 3"
                        className="w-full h-[195px] object-cover rounded-lg"
                    />
                    <img
                        src="/images/flats/FlatPhoto5.jpg"
                        alt="Sub 4"
                        className="w-full h-[195px] object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Title + Price + Details */}
            <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                    <div className="flex justify-between item-center">
                        <div>
                            <h1 className="text-2xl text-gray-700 font-bold mb-1">Elegant Studio Flat</h1>
                            <p className="text-gray-500 mb-4">2 Bed • 1 Bath • 800 sqft</p>
                        </div>
                        <p className="text-xl font-bold text-gray-800 mb-2">25,000 RS <span className="text-[16px] font-semibold">/month</span></p>

                    </div>

                    <div className="flex flex-wrap gap-4 mb-4">
                        <span className="text-sm">Property Type: <strong className="text-gray-700">Apartment</strong></span>
                        <span className="text-sm">Year Built: <strong className="text-gray-700">2020</strong></span>
                        <span className="text-sm">Location: <strong className="text-gray-700">Jaipur</strong></span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            { icon: <Home className="text-orange-500" />, label: "Property ID", value: "HZ27" },
                            { icon: <Layers className="text-orange-500" />, label: "Type", value: "Apartment" },
                            { icon: <Car className="text-orange-500" />, label: "Garage", value: "1" },
                            { icon: <Move className="text-orange-500" />, label: "Area", value: "750 sqft" },
                            { icon: <Ruler className="text-orange-500" />, label: "Lot Size", value: "1050 sqft" },
                            { icon: <Calendar className="text-orange-500" />, label: "Year Built", value: "2020" },
                            { icon: <BedDouble className="text-orange-500" />, label: "Bedrooms", value: "2" },
                            { icon: <Bath className="text-orange-500" />, label: "Bathrooms", value: "1" },
                            { icon: <ParkingCircle className="text-orange-500" />, label: "Parking", value: "Yes" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center p-3 border rounded-lg" style={{
                                borderStyle: "solid",
                                borderColor: " #e5e7eb"
                              }}>
                                <div className="w-10 h-10 border border-orange-200 flex items-center justify-center rounded-full mb-2">
                                    {item.icon}
                                </div>
                                <div className="text-xs text-gray-400">{item.label}</div>
                                <div className="text-sm font-medium">{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 space-y-4 flex flex-col justify-between">
                    <div>
                        <p className="text-xl text-gray-700 font-bold mb-5">Contact Seller</p>
                        <div className="flex items-center gap-2 mt-2">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full" alt="Seller" />
                            <div>
                                <p className="font-semibold text-sm">Ajay Mittal</p>
                                <p className="text-xs text-gray-500">Agent</p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 mb-4 mt-5">Our professional agents are here to help you find the right home. Contact us today and let’s make your dream come true.</p>
                    </div>
                    <div className="space-y-2">
                        <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded-lg" />

                        <textarea placeholder="Your Message" rows="3" className="w-full p-2 border border-gray-300 rounded-lg"></textarea>
                        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">Send Message</button>
                    </div>
                </div>
            </div>

            {/* Video + Property Details */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-semibold mb-2">Video</h2>
                    <div className="mb-6">
                        <video controls className="rounded-lg w-full">
                            <source src="https://cdn.coverr.co/videos/coverr-luxurious-house-exterior-8546/1080p.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Property Details</h2>
                    <p className="text-sm text-gray-700 mb-4">
                        3 Unts in North Hollywood with upside potenticl through constructión of an ADU (buyer to verify), Unit mix consists of (3) 3+1 bath units. The building is a total of 2, 660 square feet and situated on a 6, 001 square foot lot. Easy access to the 101, 170, and 134 freeways. The bullding is separately matered for gas and electriciry.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <p><strong>Area:</strong> 800 sqft</p>
                        <p><strong>Bedrooms:</strong> 2</p>
                        <p><strong>Bathrooms:</strong> 1</p>
                        <p><strong>Garage:</strong> 1</p>
                        <p><strong>Year:</strong> 2020</p>
                    </div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">We can help you find home</h3>
                    <p className="text-sm text-gray-600 mb-4">Contact one of our top agents to help you find your dream home.</p>
                    <button className="bg-orange-500 text-white w-full py-2 rounded">Find Agent</button>
                </div>
            </div>

            <div className=" max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-4 my-[50px]">

                {/* Map Section */}
                <div className="lg:col-span-2   ">
                    <h2 className="text-xl   font-semibold mb-2">Get Direction</h2>
                    <img src="/images/flats/map.png" className="w-[100%] h-[400px] object-cover rounded-lg" alt="Map" />
                </div>

                {/* 360 Virtual Tour */}
                <div className="  mx-auto  ">
                    <h2 className="text-xl   font-semibold mb-2">360 Virtual Tour</h2>
                    <img src="/images/flats/FlatPhoto4.jpg" className="w-[100%] h-[400px] object-cover rounded-lg" alt="360 View" />
                </div>
            </div>

            {/* Guest Reviews */}
            <div className="max-w-7xl mx-auto p-4">
                <h2 className="text-xl font-semibold mb-4">Guest Reviews</h2>
                <div className="space-y-4">
                    <div className="border p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <img src="https://randomuser.me/api/portraits/women/45.jpg" className="w-10 h-10 rounded-full" alt="Reviewer" />
                            <div>
                                <p className="font-semibold text-sm">Alice Moore</p>
                                <p className="text-xs text-gray-500">2 days ago</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700">Amazing place! Loved the location and the interior design.</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <img src="https://randomuser.me/api/portraits/men/47.jpg" className="w-10 h-10 rounded-full" alt="Reviewer" />
                            <div>
                                <p className="font-semibold text-sm">John Doe</p>
                                <p className="text-xs text-gray-500">1 week ago</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700">Very comfortable and well-maintained property. Highly recommended.</p>
                    </div>
                </div>
            </div>

            {/* Similar Properties */}
            <div className="max-w-7xl mx-auto p-4">
                <h2 className="text-xl font-semibold mb-4">Similar Properties</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    {images.map((item, key) => (
                        <CardView item={item} key={key} />
                    ))}

                </div>

                <div className="text-center">
                    <button className="my-[50px] text-orange-400 py-2 px-4 border border-orange-400  rounded-[10px] hover:bg-orange-400 hover:text-white">View All</button>                </div>
            </div>
        </div>
    );
}
const images = [
    '/images/flats/FlatPhoto5.jpg',
    '/images/flats/FlatPhoto4.jpg',
    '/images/flats/FlatPhoto2.jpg',
    '/images/flats/FlatPhoto3.jpg',

];