import React from 'react'
import Nav from './components/Nav'
import PostList from './components/PostList'
import Title from './components/Title'

const PopularTopics = () => {
  return (
    <div className='container px-[70px] py-[29px] flex flex-col gap-[30px]'>
        <Title title="Popular Topics" />
        <Nav />
        <PostList />
      PopularTopics
    </div>
  )
}

export default PopularTopics
