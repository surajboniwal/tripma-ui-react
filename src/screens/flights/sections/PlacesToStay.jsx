import React from 'react';
import Button from '../../../components/Button';
import InfoCard from '../components/InfoCard';

function PlacesToStay() {

    const places = [
        {
            image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            name: 'Stay among the atolls in',
            place: 'Maldives',
            desc: 'From the 2nd century AD, the islands were known as the \'Money Isles\' due to the abundance of cowry shells, a currency of the early ages.',
        },
        {
            image: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            name: 'Experience the Ourika Valley in',
            place: 'Morocco',
            desc: 'Morocco\'s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.',
        },
        {
            image: "https://images.unsplash.com/photo-1575415868394-e3b78f3e9b3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
            name: 'Live traditionally in',
            place: 'Mongolia',
            desc: 'Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.',
        }
    ];
    
  return <div className=''>
      <div className='text-[24px] font-bold text-grey-600 mb-6'>
        Explore unique <span className='text-turquoise'>places to stay</span>
      </div>

      <div className='flex justify-between'>
          {
              places.map((place) => <InfoCard key={place.name} info={place}/>)
          }
      </div>

    <Button text="Explore more stays" className='w-fit m-auto my-16 shadow-md'/>
  </div>;
}

export default PlacesToStay;
