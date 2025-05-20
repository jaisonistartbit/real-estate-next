import Footer from "@/components/users/landing_page/footer/Footer";
import NavigationBar from "@/components/users/landing_page/navbar_component/NavigationBar";
import MyPropertyListing from "@/components/users/my-property-page/MyPropertyListings";
// import { cookies } from "next/headers";

export default async function MyProperties() {
    // const userId = cookies().get("user_id")?.value || "";

    const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}/graphql`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `
        query GetPropertiesByUserId($user_id: ID!) {
          getPropertiesByUserId(user_id: $user_id) {
            id
            name
            total_rooms
            total_bathroom
            price
            dimension
            location
            property_type
            property_banner_image
          }
        }
      `,
            variables: { user_id: 'cf728789-92d2-4d26-82e0-6c2018fb9c86' }
        }),
        cache: "no-store"
    });

    const json = await res.json();
    const userProperties = json?.data?.getPropertiesByUserId || [];

    return (
        <>
            <NavigationBar />

            {/* 👇 Styled Page Heading */}
            <section className="bg-white pt-8 mb-3   ">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">My Properties</h1>
                    <p className="mt-1 text-base text-gray-500">Manage and view your listed properties below</p>
                </div>
            </section>



            <MyPropertyListing properties={userProperties} />
            <Footer />
        </>
    );
}
