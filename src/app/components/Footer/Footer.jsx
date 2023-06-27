import React from 'react'
import FooterBottom from './components/FooterBottom'
import FooterTop from './components/FooterTop'

const Footer = () => {
  return (
    <footer className='mt-[40px] md:mt-[75px]'> 
        <FooterTop />
        <FooterBottom />
    </footer>
  )
}

export default Footer