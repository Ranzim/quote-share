import React from 'react'
import { NavLink } from 'react-router-dom';
import './css/style.css';
import "../node_modules/bootstrap5/src/css/bootstrap.min.css";


const Navbar = () => {
  return (
    <>
    <div className="container-fluid nav-background">
      <div className="row">
        <div className="col-10 mx-auto">

          {/* navbar main */}
   <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand" >Qu0te-Fu8ion</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  className={({ isActive }) => isActive? "active": 'nav-link'}  to="/"  exact="true"   >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about"  className={({ isActive }) => isActive? "active": 'nav-link'}    >About-us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/service"  className={({ isActive }) => isActive? "active": 'nav-link'}    >Services</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink to="/contact" className={({ isActive }) => isActive? "active": 'nav-link'}    >contact-us</NavLink>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>

        </div>
      </div>
    </div>
    
    </>
  )
}

export default Navbar