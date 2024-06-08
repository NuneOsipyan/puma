import React from 'react'
import "./About.css"
import about_puma from './about'
const About = ({about_ref}) => {
  return (
    <div ref={about_ref} className='for_scroll_ab'>
   <div className='puma_info'>
   <p>{about_puma}</p>
   </div>
    </div>
  )
}

export default About