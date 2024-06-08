import React from 'react';

import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.webp"

import './Home.css';


const Home = ({ about_ref }) => {
  return (
    <div ref={about_ref} className='for_scroll home'>
     <div className='home_imgs'>
      <img src={img1} alt="puma" className='homeimg'/>
      <img src={img2} alt="puma" className='homeimg' />
      <img src={img3} alt="puma"  className='homeimg'/>
      <img src={img4} alt="puma"  className='homeimg'/>
     </div>
    </div>
  );
}

export default Home;
