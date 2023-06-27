import Link from 'next/link'
import React from 'react'

const FooterBottom = () => {
  return (
    <div className='bg-[#343A40]'>
        <div className="container px-[70px] py-[31px] flex items-center justify-between text-[14px] text-[#E5E5E5]">
            <small className='font-bold'>2023 | Ahmet Benan Akkaya</small>
            <Link className='text-right' href="https://github.com/benanakkaya">Github</Link>
        </div>
    </div>
  )
}

export default FooterBottom