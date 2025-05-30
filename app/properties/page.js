import CardView from "@/components/users/landing_page/flats-listing/CardView";
import Footer from "@/components/users/landing_page/footer/Footer";
import NavigationBar from "@/components/users/landing_page/navbar_component/NavigationBar";

const fetchProperties = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // if you're using auth: add Authorization header
        },
        body: JSON.stringify({
            query: `
        query GetProperties {
          getProperties {
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
      `
        }),
        cache: 'no-store', // or 'force-cache' for static content
    });
    // console.log(res.json());

    const json = await res.json();
    return json.data.getProperties || [];
};

export default async function Page() {
    const properties = await fetchProperties();


    return (
          <div className=" min-h-screen flex flex-col  ">
            <NavigationBar />

            <div className="">
                <div className="text-center mt-[50px]">
                    <h1 className="text-[1.8rem] font-[700] tracking-wide mb-2">
                        Top Luxury Listings
                    </h1>
                    <p className="text-gray-500 text-[0.8rem] font-[400] tracking-[1px]">
                        Thousands of top flats and rooms enthusiasts just like you visit our website
                    </p>

                    <div className="container lg:w-[90%] md:w-[95%] sm:w-[95%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-5">
                        {properties?.map((property) => (
                            <CardView item={property} key={property?.id} />
                        ))}
                    </div>
                </div>

            </div>
            <Footer />
       </div>

    );
}
