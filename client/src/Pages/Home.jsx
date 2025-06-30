import React, { lazy, Suspense } from 'react';
import loadingImage from '../assets/robot.gif'; 

// Lazy load components
const HeroSection = lazy(() => import('../Components/HeroSection'));
const CallBackForm = lazy(() => import('../Components/CallBackForm'));
const TowerSection = lazy(() => import('../Components/TowerSection'));
const AboutSection = lazy(() => import('../Components/AboutSection'));
const Enquiry = lazy(() => import('../Components/Enquiry'));
const UnitsSection = lazy(() => import('../Components/UnitsSection'));
const AmenitiesSection = lazy(() => import('../Components/AmenitiesSection'));
const TownHouseSection = lazy(() => import('../Components/TownHouseSection'));

const Home = () => {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-screen bg-[#142B2B] ">
          <img
            src={loadingImage}
            alt="Loading..."
            className="w-96 h-96 mb-4 "
          />
         
        </div>
      }
    >
      <div>
        <HeroSection />
        <CallBackForm />
        <TowerSection />
        <TownHouseSection/>
        <AboutSection />
        <Enquiry />
        <AmenitiesSection />
        <UnitsSection />
      </div>
    </Suspense>
  );
};

export default Home;
