import React from 'react'
import Title from '../PopularTopics/components/Title'
import EditorsList from './components/EditorsList'

const EditorsPick = () => {
  return (
    <div className='container px-[70px] py-[29px] flex flex-col gap-[70px]'>
        <Title title="Editor's Pick" />
        <EditorsList />
    </div>
  )
}

export default EditorsPick