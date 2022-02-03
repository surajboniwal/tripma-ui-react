import React from 'react';

function DealCard({deal, full}) {
  return <div className={`${full ? 'w-full' : 'w-[440px]' } h-[520px] overflow-hidden relative shadow-lg mb-12 rounded-15xl cursor-pointer transition duration-100`}>
      <img className='absolute h-full w-full object-cover mb-[40px]' src={deal.image} alt="" />
      
      <div className='bg-white absolute bottom-0 w-full h-[80px] flex flex-col justify-center items-between px-5'>
          <div className='flex justify-between'>
            <div className='flex text-[18px] font-semibold'>
                <div className='text-grey-600'>{deal.name}, &nbsp;</div>
                <div className='text-purple-blue'>{deal.place}</div>
            </div>

            <div className='text-grey-600 font-semibold text-[18px]'>
                {deal.price}
            </div>
          </div>

          <div className='text-grey-400'>
              {deal.desc}
          </div>
      </div>
  </div>;
}

export default DealCard;
