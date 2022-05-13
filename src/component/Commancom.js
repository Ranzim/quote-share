import React from 'react'
import '../css/style.css'
import { NavLink } from 'react-router-dom';


const Commancom = (props) => {
  return (
    <section id="header" className="d-flex align-middle pt-5 ">
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10  mx-auto">
            <div className="row p-5 main-row ">
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 pt-5'>
              <h2>{props.headingTwo}<strong className='brand-name'>Qu0te-fu8ion</strong></h2>
              <h3 className='my-3'>Life is lie under the beneath of Quotes</h3>
              <q>
             {props.quate}
              </q>
              <figcaption>
              &mdash; {props.auther} </figcaption>
              <div className='mt-3'>
                <NavLink to="/service" className='btn'>{props.bname}</NavLink>
              </div>
            
            </div>
            <div className="img-secand  col-lg-6 order-1 order-lg-2 ">
              <img src={props.imgsrc} className="img-fluid animated" alt=""/>
    
            </div>

            </div>
            <div className="  col-lg-12 p-3" >
              <img src={props.main} className="img-fluid animated" alt=""/>
    
            </div>

          </div>
        </div>
        
      </div>

    </section>
  )
}

export default Commancom;