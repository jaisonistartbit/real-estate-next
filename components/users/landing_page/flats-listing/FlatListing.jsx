
import CardView from './CardView';

const fetchProperties = async () => {
    const res = await fetch('http://localhost:3000/api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
        query GetProperties($limit: Int) {
          getProperties(limit: $limit) {
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
            variables: {
                limit: 6
            }
        }),
        cache: 'no-store',
    });

    const json = await res.json();
    console.log();
    
    return json?.data?.getProperties || [];
};

export default async function FlatListing() {
    const properties = await fetchProperties();

console.log('properties',properties);

    return (
        <div className="">
            <div className="text-center mt-[50px]">
                <h1 className="text-[1.8rem] font-[700] tracking-wide mb-2">
                    Today&apos;s Luxury Listings
                </h1>
                <p className="text-gray-500 text-[0.8rem] font-[400] tracking-[1px]">
                    Thousands of luxury flats and rooms enthusiasts just like you visit our website
                </p>

                <div className="container lg:w-[75%] md:w-[85%] sm:w-[90%] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-5">
                    {properties.map((property) => (
                        <CardView item={property} key={property.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
