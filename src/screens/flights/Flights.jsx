import React from 'react';
import FlightDeals from './sections/FlightDeals';
import Hero from './sections/Hero';
import PlacesToStay from './sections/PlacesToStay';
import ReviewSection from './sections/ReviewSection';

function Flights() {
  return <div>
      <Hero/>
      <div className='w-[1400px] mx-auto'>
        <FlightDeals/>
        <PlacesToStay/>
        <ReviewSection/>
      </div>
  </div>;
}


export default Flights;
