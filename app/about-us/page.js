import Footer from "@/components/users/landing_page/footer/Footer";
import NavigationBar from "@/components/users/landing_page/navbar_component/NavigationBar";

export default function AboutUs() {
    return (
        <>
            <NavigationBar />


            <div className="min-h-screen bg-white text-gray-800">
                {/* Hero Banner */}
                <div className="relative h-[400px] w-full overflow-hidden">
                    <img
                        src="/images/flats/FlatPhoto4.jpg"
                        alt="Our Team at Homies.com"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl text-white font-bold">About Us</h1>
                    </div>
                </div>

                {/* Description Section */}
                <div className="flex flex-col lg:flex-row gap-4 px-3 my-3 pb-4 pt-9">
                    <div className="w-full lg:w-[70%]">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                            Welcome to <span className="text-orange-600">Homies.com</span>
                        </h1>

                        <p className="text-gray-700 leading-relaxed text-[20px]">
                            Founded in January 2025, <span className="font-semibold">Homies.com</span> was born with the mission of revolutionizing the rental real estate experience in India. Our platform connects home seekers, landlords, and real estate professionals through an intuitive, modern, and transparent interface.
                        </p>

                        <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                            Whether you&apos;re looking for your first apartment, a family-friendly home, or a trendy co-living space, we make discovering, renting, and managing properties seamless. Our listings include verified homes, flexible rentals, neighborhood insights, and end-to-end support to help you find the perfect fit.
                        </p>

                        <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                            At Homies.com, we are driven by innovation, trust, and a shared vision: making renting simple, fair, and fulfilling for everyone involved. With dedicated support, smart tools, and the power of community, we&apos;re redefining the rental journey across India.
                        </p>

                        <div className="mt-10">
                            <h2 className="text-xl font-bold mb-2 text-orange-600">Our vision</h2>
                            <p className="text-gray-700 leading-relaxed">
                                To change the way India experiences renting by building trust and transparency into every home journey.
                            </p>

                            <h2 className="text-xl font-bold mt-6 mb-2 text-orange-600">Our mission</h2>
                            <p className="text-gray-700 leading-relaxed">
                                To be India&apos;s most trusted home rental platform — making it easy for people to discover, rent, and manage homes, while empowering landlords and agents with reliable digital tools.
                            </p>
                        </div>
                    </div>

                    {/* Team Images */}
                    <div className="mt-10 w-full lg:w-[30%] pe-0 lg:pe-10 flex flex-col gap-12">
                        {/* Image 1 */}
                        <div className="relative w-full h-[220px] lg:w-[220px] self-start lg:self-end">
                            <div className="absolute top-0 left-0 border-[3px] border-yellow-300 w-full h-full rounded-lg z-10"></div>
                            <img
                                src="/images/about-us/about-us-1.jpg"
                                alt="Homies.com Team 1"
                                className="absolute lg:bottom-2 lg:left-2 w-full h-full object-cover rounded-lg z-20"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="relative w-full h-[220px] lg:w-[220px] self-start">
                            <div className="absolute top-0 left-0 border-[3px] border-purple-400 w-full h-full rounded-lg z-10"></div>
                            <img
                                src="/images/about-us/about-us-2.jpg"
                                alt="Homies.com Team 2"
                                className="absolute lg:top-2 lg:right-2 w-full h-full object-cover rounded-lg z-20"
                            />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
