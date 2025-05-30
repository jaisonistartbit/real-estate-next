import CardView from "@/components/users/landing_page/flats-listing/CardView";
import Footer from "@/components/users/landing_page/footer/Footer";
import NavigationBar from "@/components/users/landing_page/navbar_component/NavigationBar";

const fetchPropertiesByCity = async (cityName) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}/graphql`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
        query GetPropertiesByCityName($city: String!) {
          getPropertiesByCityName(city: $city) {
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
            variables: { city: cityName }
        }),
        cache: "no-store"
    });

    const json = await res.json();
    return json?.data?.getPropertiesByCityName || [];
};

export default async function CityPropertyPage({ params }) {
    const city = decodeURIComponent(params.city); // handles URL encoding
    const properties = await fetchPropertiesByCity(city);

    return (
        <div className=" min-h-screen flex flex-col  ">
            <NavigationBar />

            <div className="text-center mt-[50px]">
                <h1 className="text-[1.8rem] font-[700] tracking-wide mb-2">
                    Properties in {city}
                </h1>
                <p className="text-gray-500 text-[0.8rem] font-[400] tracking-[1px]">
                    Browse all listings available in {city}
                </p>

                {
                    (properties ?? [])?.length > 0 ?
                        <div className="container lg:w-[90%] md:w-[95%] sm:w-[95%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-5">
                            {(properties ?? [])?.map((property) => (
                                <CardView item={property} key={property?.id} />
                            ))}
                        </div>

                        :
                        <div className="text-center my-10">
                            <span className=" bg-orange-200 text-orange-400 text-lg rounded-lg px-4 py-2">
                                No property listed in selected city !
                            </span>
                        </div>

                }
            </div>

            <Footer />
        </div>
    );
}
