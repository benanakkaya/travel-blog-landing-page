import Banner from './components/Banner/Banner'
import EditorsPick from './components/EditorsPick/EditorsPick'
import Hero from './components/Hero/Hero'
import PopularTopics from './components/PopularTopics/PopularTopics'

export default function Home() {
  return (
    <main className='flex flex-col gap-[75px]'>
    <Hero />
    <PopularTopics />
    <Banner />
    <EditorsPick />
    </main>
  )
}
