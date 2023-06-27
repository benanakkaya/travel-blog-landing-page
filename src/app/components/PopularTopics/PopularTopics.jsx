import React from 'react'
import Nav from './components/Nav'
import PostList from './components/PostList'
import Title from './components/Title'

const PopularTopics = () => {
  return (
    <div className='container px-[15px] sm:px-[25px] md:px-[40px] lg:px-[55px] xl:px-[70px] py-[15px] lg:py-[30px] flex flex-col gap-[30px]'>
        <Title title="Popular Topics" />
        <Nav />
        <PostList />
    </div>
  )
}

export default PopularTopics
