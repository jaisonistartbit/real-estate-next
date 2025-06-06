'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Filter from '@/components/users/filters/Filter';
import CardView from '@/components/users/landing_page/flats-listing/CardView';
import Footer from '@/components/users/landing_page/footer/Footer';
import NavigationBar from '@/components/users/landing_page/navbar_component/NavigationBar';

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [properties, setProperties] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const currentPage = Number(searchParams.get('page') || 1);
  const limit = 6;
  const offset = (currentPage - 1) * limit;

  const filters = {
    propertyType: searchParams.getAll('propertyType'),
    bedrooms: searchParams.getAll('bedrooms'),
    furnishingStatus: searchParams.getAll('furnishing'),
    listedBy: searchParams.getAll('listedBy'),
    amenities: searchParams.getAll('amenities'),
  };

  const budget = searchParams.getAll('budget');
  if (budget.length > 0) {
    const minPrice = Math.min(...budget.map(b => parseInt(b.split('-')[0] || '0')));
    const maxPrice = Math.max(...budget.map(b => parseInt(b.split('-')[1] || '1000000')));
    filters.minPrice = minPrice;
    filters.maxPrice = maxPrice;
  }

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_API}/graphql`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: `
              query GetProperties($limit: Int, $offset: Int, $filters: PropertyFilterInput) {
                getProperties(limit: $limit, offset: $offset, filters: $filters) {
                  properties {
                    id
                    name
                    location
                    price
                    property_banner_image
                    total_rooms
                    total_bathroom
                    dimension
                  }
                  totalCount
                  hasMore
                }
              }
            `,
            variables: { limit, offset, filters }
          })
        });

        const json = await res.json();
        const result = json.data.getProperties;

        setProperties(result.properties || []);
        setTotalCount(result.totalCount || 0);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setProperties([]);
        setTotalCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [searchParams.toString()]);

  const hasMore = totalCount > offset + limit;

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />

      <div className="flex flex-col lg:flex-row flex-1 container mx-auto px-4 py-6 gap-6">
        <div className="lg:w-1/4">
          <Filter />
        </div>

        <div className="lg:w-3/4 text-center">
          <h1 className="text-[1.8rem] font-[700] tracking-wide mb-2">Top Luxury Listings</h1>
          <p className="text-gray-500 text-[0.8rem] font-[400] tracking-[1px] mb-[20px]">
            Thousands of top flats and rooms enthusiasts just like you visit our website
          </p>

          {loading ? (
            <div className="text-center py-12">Loading...</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map(property => (
                  <CardView item={property} key={property.id} />
                ))}
              </div>

              {properties.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No properties found matching your filters</p>
                </div>
              )}

              {totalCount > 0 && (
                <div className="flex justify-center mt-8 gap-2">
                  {currentPage > 1 && (
                    <a
                      href={`?${new URLSearchParams({ ...Object.fromEntries(searchParams.entries()), page: currentPage - 1 }).toString()}`}
                      className="px-4 py-2 border rounded-lg hover:bg-orange-50 border-orange-400 text-orange-600"
                    >
                      Previous
                    </a>
                  )}
                  <span className="px-4 py-2 text-gray-500">Page {currentPage}</span>
                  {hasMore && (
                    <a
                      href={`?${new URLSearchParams({ ...Object.fromEntries(searchParams.entries()), page: currentPage + 1 }).toString()}`}
                      className="px-4 py-2 border rounded-lg hover:bg-orange-50 border-orange-400 text-orange-600"
                    >
                      Next
                    </a>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
