import React, { useState } from 'react';
import '../css/style.css'
// import ImgData from './Imgcoll'


import img1 from '../img/homepage/s.jpg';
import img2 from '../img/homepage/t.jpg';
import img3 from '../img/homepage/x.jpg';
import img4 from '../img/homepage/t.jpg';
import img5 from '../img/homepage/w.svg';
import img6 from '../img/homepage/rt.png';


import Card from './Card'
import  Form from '../Moddal-form/Form';
import '../App.css';
import { Modal, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = () => {
 
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [ImgData ,setImgData]   = useState([   
    {  image:img1,
        tile:"life",
        quote :"life  is what we take it as way ,that we feel it, i can be hard  if we think it own",
        auther :"ravi"

    },
    {
      image:img2,
       tile:"Success",
       quote :"life  is what we take it as way ,that we feel it, i can be hard  if we think it own",
       auther :"ravi"

   }, {
      image:img3,
       tile:"Future",
       quote :"life  is what we take it as way ,that we feel it, i can be hard  if we think it own",
       auther :"ravi"

   }, {
      image:img4,
       tile:"love",
       quote :"life  is what we take it as way ,that we feel it, i can be hard  if we think it own",
       auther :"ravi"

   }, {
      image:img5,
       tile:"Worth",
       quote :"life  is what we take it as way ,that we feel it, i can be hard  if we think it own",
       auther :"ravi"

   }, {
      image:img6,
       tile:"Moon",
       quote :"life  is what we take it as way ,that we feel it, i can be hard  if we think it own",
       auther :"ravi"

   },
  ]

  )

// const addQuote = (title)=> {
//   []


 
  return (
    <>
    <section id="header" className="d-flex align-middle pt-5 ">
      <div className="container-fluid nav-bg  cards_landscape_wrap-2">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className=" containter my-5">
              <div className='button mx-auto'>
          <Button className='mt-3 me-3' onClick={handleShow}>
                <NavLink to='' href="" className='btn'>Create-Your-Quotes</NavLink>
        </Button>
        </div>
        </div>
        
      

         {
           ImgData.map((val,index)=> {
             return(  <Card key={index}  title={val.tile} quote={val.quote} auther={val.auther} image={val.image} /> )
           
             
           })
         }

{/* 
        <h1>{ImgData.tile.vlaue}</h1> */}
     
           
          </div>
        </div>
        
      </div>

    </section>

    {/* =============modall form================ */}
<Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Put Your beatiful lines</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form setImgData={setImgData} handleClose={handleClose} /></Modal.Body>
        <br/>
        <Modal.Footer>
          <Button type ='submit' variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
   
    </>

  )
}

export default Service;