import React from 'react';
import DealCard from '../components/DealCard';

function FlightDeals() {

    const deals = [
        {
            image: "https://images.unsplash.com/photo-1597531922242-823dbfca45bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=722&q=80",
            name: 'The Bund',
            place: 'Shanghai',
            price: '$598',
            desc: 'China\'s most international city',
        },
        {
            image: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1132&q=80",
            name: 'Sydney Opera House',
            place: 'Sydney',
            price: '$981',
            desc: 'Take a stroll along the famous harbor',
        },
        {
            image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: 'Kōdaiji Temple',
            place: 'Kyoto',
            price: '$633',
            desc: 'Step back in time in the Gion district',
        }
    ];
    
  return <div className=''>
      <div className='text-[24px] font-bold text-grey-600 mb-6'>
        Find your next adventure with these <span className='text-purple-blue'>flight deals</span>
      </div>

      <div className='flex justify-between'>
          {
              deals.map((deal) => <DealCard key={deal.name} deal={deal}/>)
          }
      </div>

      <DealCard deal={{
            image: "https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80",
            name: 'Tsavo East National Park',
            place: 'Kenya',
            price: '$1,248',
            desc: 'Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.',
        }} full={true}/>
  </div>;
}

export default FlightDeals;
