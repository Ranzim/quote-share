import {  Routes, Route, Navigate} from "react-router-dom";
import "../node_modules/bootstrap5/src/css/bootstrap.min.css";
import "../node_modules/bootstrap5/src/js/bootstrap.bundle.min.js";


import './App.css';
import About from "./component/About";
import Contact from "./component/Contact";

import Home from "./component/Home";
import Service from "./component/Service";
import Navbar from "./Navbar";
import Footer from "./css/Footer";

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/service" element={<Service />}/>
        
        <Route exact path="/contact" element={<Contact />}/>
       
         <Route path="*" element={<Navigate replace to="/" />} />
     
      </Routes>
      <Footer/>
   
    
    </>
  );
}

export default App;
