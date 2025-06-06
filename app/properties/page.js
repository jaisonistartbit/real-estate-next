import { Suspense } from 'react';
import PropertiesClientPage from '@/components/users/properties/PropertiesClientPage';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading properties...</div>}>
      <PropertiesClientPage />
    </Suspense>
  );
}
