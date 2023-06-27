import React from 'react'
import PostCard from '../../PopularTopics/components/PostCard'

const EditorsList = () => {

    const editorPicks = [
        {
            id:1,
            title:"Richird Norton photorealistic rendering as real photos",
            subtitle: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
            date:"08.08.2021",
            category: "TRAVEL",
            image: "editor1",
        },
        {
            id:2,
            title:"Richird Norton photorealistic rendering as real photos",
            subtitle: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
            date:"08.08.2021",
            category: "ADVENTURE",
            image: "editor2",
        },
        {
            id:3,
            title:"Richird Norton photorealistic rendering as real photos",
            subtitle: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
            date:"08.08.2021",
            category: "FASHION",
            image: "editor3",
        },
    ]

  return (
    <div className='grid grid-cols-3 gap-[20px]'>
        {
            editorPicks.map(post => (
                <PostCard key={post.id} type={2} post={post} />
            ))
        }
        </div>
  )
}

export default EditorsList