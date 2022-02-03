import { useEffect, useState } from 'react';
import star from './../../../assets/icons/star_filled.svg'
import unstar from './../../../assets/icons/star_unfilled.svg'

export default function Review({review}){

    const [reviewStars, setReviewStars] = useState(null)
  
    useEffect(()=>{
      const stars = []
  
      for(var i = 1; i<=review.rating; i++){
        stars.push(1)
      }
  
      for (var i = stars.length; i<5; i++){
        stars.push(0)
      }
  
      setReviewStars(stars)
    }, [])
  
    return <div className='w-[410px] h-fit flex py-4'> 
      <div className='overflow-hidden mx-4 w-[64px] h-[48px]'>
        <img className='w-[48px] h-[48px] rounded-full object-cover' src={review.image} alt="" />
      </div>
  
      <div className='w-full'>
  
        <div className='text-grey-600 text-[18px] font-semibold'>{review.name}</div>
        <div className='text-grey-600'>{review.subtext}</div>
  
        <div className='flex my-1'>
            {
                reviewStars?.map((starA, index) => {
                    return starA === 1 ? <img key={index} src={star}/> : <img key={index} src={unstar}/>
                })
            }
        </div>

        <div>
            {review.review} <br /> <span className='text-purple-blue cursor-pointer'>read more...</span>
        </div>
        
      </div>
    </div>;
}
