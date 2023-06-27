import React from 'react'
import PostCard from './PostCard'

const PostList = () => {

    const posts = [
        {
            id:1,
            title: "Dream destinations to visit this year in Paris",
            subtitle: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
            date: "08.08.2022",
            category: "ADVENTURE",
            image: "post1"
        },
        {
            id:2,
            title: "Breathtaking first-person photos around Europe",
            subtitle: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
            date: "07.08.2022",
            category: "TRAVEL",
            image: "post2"
        },
        {
            id:3,
            title: "Dream destinations to visit this year in Paris",
            subtitle: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
            date: "06.08.2022",
            category: "TECHNOLOGY",
            image: "post3"
        },
        {
            id:4,
            title: "Dream destinations to visit this year in Paris",
            subtitle: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
            date: "05.08.2022",
            category: "ADVENTURE",
            image: "post4"
        },
        {
            id:5,
            title: "Dream destinations to visit this year in Paris",
            subtitle: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
            date: "04.08.2022",
            category: "FASHION",
            image: "post5"
        },
        {
            id:6,
            title: "Dream destinations to visit this year in Paris",
            subtitle: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
            date: "01.08.2022",
            category: "ADVENTURE",
            image: "post6"
        },
        {
            id:7,
            title: "Dream destinations to visit this year in Paris",
            subtitle: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
            date: "28.07.2022",
            category: "TECHNOLOGY",
            image: "post7"
        },
        {
            id:8,
            title: "Dream destinations to visit this year in Paris",
            subtitle: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
            date: "27.07.2022",
            category: "FASHION",
            image: "post8"
        },
    ]

  return (
    <div className='grid grid-cols-4 gap-[20px]'>
      {posts.map(post => (
        <PostCard type={1} post={post} />
      ))}
    </div>
  )
}

export default PostList
