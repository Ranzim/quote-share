import React from 'react';
import '../App.css'



const Card = (props) => {
 
  return (
    <>
   <div className="card mb-3" >
   
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <q className="card-text">{props.quote}.</q>
        <br/>
        <em>--{props.auther}</em>
       
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  </div>
</>
)
}





export default Card