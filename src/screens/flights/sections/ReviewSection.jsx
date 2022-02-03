import React from 'react';
import Review from '../components/Review';

function ReviewSection() {

  const reviews = [
    {
      name: 'Yifei Chen',
      subtext: 'Seoul, South Korea | April 2019',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      review: 'What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me',
    },
    {
      name: 'Kaori Yamaguchi',
      subtext: 'Honolulu, Hawaii | February 2017',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      review: 'My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy and',
    },
    {
      name: 'Anthony Lewis',
      subtext: 'Berlin, Germany | April 2019',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      review: 'When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I\'d give it a try. It was my first time using Tripma, but I\'d definitely recommend it to a friend and use it for',
    }
  ]

  return <div>
      <div className='text-center text-grey-600 text-[24px] font-bold'>
          What <span className='text-purple-blue' >Tripma</span> users are saying
      </div>

    <div className='flex justify-between mt-4 mb-12'>
        {
          reviews.map((review) => <Review key={review.name} review={review}/>)
        }
      </div>
  </div>;
}


export default ReviewSection;
