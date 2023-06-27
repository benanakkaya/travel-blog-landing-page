import Image from 'next/image'
import React from 'react'
import Category from '../PopularTopics/components/Category'

const Banner = () => {
  return (
    <div className="relative w-full max-h-[600px] text-white">
        <div className='flex items-center justify-center'>
      <Image  className="absolute w-full h-full top-0 left-0 object-cover" src={require('../../../assets/banner.png')} />
      <div className='container px-[70px] py-[29px] z-30 h-[600px] w-full flex flex-col items-center justify-center gap-[20px]'>
        <Category category={"FASHION"} />
        <h2 className="max-w-[530px] flex flex-col text-[36px] font-bold text-center">Richird Norton photorealistic rendering as real photos</h2>
        <p className='max-w-[420px] flex flex-column text-[12px] leading-[20px] text-[#E5E5E5] text-center'>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
        <span className='w-[30px] h-[1px] bg-white' />
        <small className='text-[12px] text-[#E5E5E5]'>08.08.2021</small>
      </div>
      </div>
    </div>
  )
}

export default Banner
