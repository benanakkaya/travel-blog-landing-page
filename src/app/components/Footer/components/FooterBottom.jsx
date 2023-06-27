import Link from 'next/link'
import React from 'react'

const FooterBottom = () => {
  return (
    <div className='bg-[#343A40]'>
        <div className="container px-[15px] sm:px-[25px] md:px-[40px] lg:px-[55px] xl:px-[70px] py-[15px] lg:py-[30px] flex items-center justify-between text-[14px] text-[#E5E5E5]">
            <small className='font-bold'>2023 | Ahmet Benan Akkaya</small>
            <Link className='text-right' href="https://github.com/benanakkaya">Github</Link>
        </div>
    </div>
  )
}

export default FooterBottom