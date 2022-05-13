import React from 'react'
import '../css/style.css'

import main from '../img/homepage/rt4.png'

const Contact = () => {
   
  return (
    <>
    <section className="container mt-5 me-3">

  

   <div className="row">
    
    
      <div className="col-sm-10 mb-4 col-md-5 mx-auto">
  
         <div className="card border-info rounded-0">
            <div className="card-header p-0">
               <div className="bg-light text-white text-center py-2">
                  <h3><i className="fa fa-envelope"></i> Write to us:</h3>
                  <p className="m-0">We’ll write rarely, but only the best content.</p>
               </div>
            </div>
            <div className="card-body p-3">
               
                  <div className="form-group">
                  <label> Your name </label>
                  <div className="input-group">
                     <input value="" type="text" name="data[name]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Your name"/>
                  </div>
				</div>
                  <div className="form-group">
                     <label>Your email</label>
                     <div className="input-group mb-2 mb-sm-0">
                        <input type="email" value="" name="data[email]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Email"/>
                     </div>
                  </div>
                  <div className="form-group">
                     <label>Subject</label>
                     <div className="input-group mb-2 mb-sm-0">
                        <input type="text" name="data[subject]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Subject"/>
                     </div>
                  </div>
                  <div className="form-group">
                     <label>Message</label>
                     <div className="input-group mb-2 mb-sm-0">
                        <input type="text" className="form-control" name="mesg"/>
                     </div>
                  </div>
                  <div className="text-center">
                     <input type="submit" name="submit" value="submit" className="btn btn-light btn-block rounded-0 py-2"/>
                  </div>
             
			     </div>
				  
            </div>
         </div>
    
      <div className="col-sm-10 col-md-7 mx-auto">
     
         <div className="mb-4">
         <iframe src="https://embed.waze.com/iframe?zoom=16&lat=27.676503&lon=85.374334&ct=livemap"
     width="500"
   height="400"
      allowfullscreen>
          
       </iframe>
         </div>
       
         <div className="row text-center">
            
            <div className="col-md-4">
               <a className="bg-light px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-phone"></i></a>
               <p>+977-98057848493</p>
            </div>
            <div className="col-md-4">
               <a className="bg-light px-3 py-2 rounded text-white mb-2 d-inline-block"><i className="fa fa-envelope"></i></a>
               <p>ravithekare24@gamail.com</p>
            </div>
         </div>
      </div>
     
	    </div>

     
</section>
    
    </>
  )
}

export default Contact