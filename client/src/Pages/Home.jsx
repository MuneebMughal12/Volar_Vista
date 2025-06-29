import React, { lazy, Suspense } from 'react';
// import TownHouseSection from '../Components/TownHouseSection';

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
    <Suspense fallback={<div className="text-black p-4 text-center">Loading...</div>}>
      <div>
        <HeroSection />
        <CallBackForm />
        <TownHouseSection />
        <TowerSection />
        <AboutSection />
        <Enquiry />
        <AmenitiesSection />
        <UnitsSection />
      </div>
    </Suspense>
  );
};

export default Home;
