import React from 'react'

const Category = ({category}) => {
  return (
    <>
    <span className="px-[10px] py-[6px] text-[10px] font-bold text-center bg-white bg-opacity-[20%] rounded-[8px] text-white">{category}</span>
    </>
  )
}

export default Category