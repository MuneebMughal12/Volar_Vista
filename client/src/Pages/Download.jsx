import { lazy, Suspense } from 'react';
import loadingImage from '../assets/robot.gif';

// Lazy load the Downloads component
const Downloads = lazy(() => import('../Components/Download/Downloads'));

const Download = () => {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-screen bg-[#142B2B]">
          <img
            src={loadingImage}
            alt="Loading..."
            className="w-96 h-96 mb-4"
          />
        </div>
      }
    >
      <div>
        <Downloads />
      </div>
    </Suspense>
  );
};

export default Download;