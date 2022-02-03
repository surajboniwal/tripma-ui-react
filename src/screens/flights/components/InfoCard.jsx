import React from 'react';

function InfoCard({info, full}) {
  return <div className={`${full ? 'w-full' : 'w-[440px]' } h-[560px] overflow-hidden relative shadow-lg rounded-15xl cursor-pointer transition duration-100`}>
      <img className='absolute h-full w-full object-cover mb-[40px]' src={info.image} alt="" />
      
      <div className='bg-white absolute bottom-0 w-full h-[127px] flex flex-col justify-center items-between px-5'>
        <div className='flex text-[18px] font-semibold'>
            <div className='text-grey-600'>{info.name} &nbsp;</div>
            <div className='text-turquoise'>{info.place}</div>
        </div>


        <div className='text-grey-400'>
            {info.desc}
        </div>
      </div>
  </div>;
}

export default InfoCard;
