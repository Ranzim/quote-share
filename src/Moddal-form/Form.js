import React from 'react'
 import { useState } from 'react';
const Form = (props) => {
  const [image,setImage] = useState('');
  const [title, setTitle] = useState('');
  const [quote,setQuote] = useState('');
  const [auther,setAuther] = useState('');
  const handleSubmit =(e) =>{
    e.preventDefault()
  console.log(image,title,quote,auther)
   props.setImgData([{ image,title,quote,auther}])
     
 
  }
 

  return (
    <>
    <form onSubmit={handleSubmit} >
      
    
  <div className="mb-3">
    <label for="exampleInputEmail1"  className="form-label">Title</label>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Quotes</label>
    <input type="text" value={quote} onChange={(e) => setQuote(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label" >Auther</label>
    <input type="text" value={auther} onChange={(e) => setAuther(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>

  <div className="mb-3">
  <div className='container'>
    <label for="exampleInputEmail1" className="form-label">upload-image</label>
 
    <input type="file" value={image} accept="image/*" onChange={(e) => setImage(e.target.value)} />
  
   </div>
  </div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  
  <div>
    <input type="submit" value="post-Your-quote" />
  </div>
 
</form>
    </>
  )
}

export default Form