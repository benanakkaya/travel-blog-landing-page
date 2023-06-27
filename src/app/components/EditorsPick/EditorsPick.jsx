import React from 'react'
import Title from '../PopularTopics/components/Title'
import EditorsList from './components/EditorsList'

const EditorsPick = () => {
  return (
    <div className='container px-[15px] sm:px-[25px] md:px-[40px] lg:px-[55px] xl:px-[70px] py-[15px] lg:py-[30px] flex flex-col gap-[70px]'>
        <Title title="Editor's Pick" />
        <EditorsList />
    </div>
  )
}

export default EditorsPick