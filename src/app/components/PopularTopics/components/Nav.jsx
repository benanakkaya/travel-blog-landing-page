import Link from 'next/link'
import React from 'react'

const Nav = () => {

    const navItems = [
        {
            id:1,
            name: "All"
        },
        {
            id:2,
            name: "Adventure"
        },
        {
            id:3,
            name: "Travel"
        },
        {
            id:4,
            name: "Fashion"
        },
        {
            id:5,
            name: "Technology"
        },
        {
            id:6,
            name: "Branding"
        },
    ]

  return (
    <div className='flex items-center w-full justify-between'>
      <ul className='flex items-center gap-[20px]'>
        {navItems.map(item => (
        <li key={item.id} className={`text-[12px] font-bold leading-[25px] ${item.name === "All" ? "text-[#D4A373]" : "text-black"}`}>
            {item.name}
        </li>
        ))}
      </ul>
      <Link href="/" className="text-[12px] font-bold leading-[25px]" >See All</Link>
    </div>
  )
}

export default Nav
