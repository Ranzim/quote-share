import React from 'react'
import '../css/style.css'
import img1 from '../img/homepage/s.jpg';
import main from '../img/homepage/rt4.png'

import Commancom from './Commancom';
const Home = () => {
  
  
  return (
    <Commancom headingTwo="Find the meaning of life that someone lived as the same way as  you living--" quate="'The greatest glory in living lies not in never falling, but in rising every time we fall'" auther="Jeremy Keith " imgsrc={img1} imgsrc2={main}  bname="share quates"/>
  )
}

export default Home