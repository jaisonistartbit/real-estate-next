import EditPropertyPage from "@/components/users/edit-property-page/EditPropertyPage";
import Footer from "@/components/users/landing_page/footer/Footer";
import NavigationBar from "@/components/users/landing_page/navbar_component/NavigationBar";
import PropertyDetailPage from "@/components/users/property-detail-page/PropertyDetailPage";

export default async function PropertyDetails({ params }) {
  const propertyId = params?.id;


  const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}/graphql`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query GetPropertyById($id: ID!) {
          getPropertyById(id: $id) {
            id
            name
            location
            total_rooms
            total_bathroom
            dimension
            price
            property_type
            property_banner_image
            images {
              url
              image
            }
            owner_name
            owner_contact
            property_video
            property_description
            location_latitude
            location_longitude
            property_video_name
            banner_image_name
            city
            state
            isbooked
            furnishing_status
            available_for
            available_from
            posted_by 
            property_age
            amenities
            created_at
          }
        }
      `,//furnishing_status available_for available_from posted_by property_age amenities
      variables: { id: propertyId }
    }),
    cache: 'no-store'
  });

  const json = await res.json();
  const property = json?.data?.getPropertyById;
  console.log(property);

  return (
    <>
      <NavigationBar />
      <EditPropertyPage property={property} />
      <Footer />
    </>
  );
}
