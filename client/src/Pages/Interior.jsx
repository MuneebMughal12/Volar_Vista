import React, { lazy, Suspense } from 'react';
import loadingImage from '../assets/robot.gif';

// Lazy load the Interiors component
const Interiors = lazy(() => import('../Components/Interior/Interiors'));

const Interior = () => {
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
        <Interiors />
      </div>
    </Suspense>
  );
};

export default Interior;
