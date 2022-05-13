import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
  <div className="container">
    <div className="row">
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Product</span>
          </li>
        
         
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
         <li className="nav-item">
            <span className="footer-title">Company</span>
          </li> 
          <li className="nav-item">
            <a className="footer-title">Service</a>
          </li>
      
       
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Contact & Support</span>
          </li>
          <li className="nav-item">
            <a className="footer-title">Contacts-us</a>
          </li>
       
       
        </ul>
      </div>
    </div>

    <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>
    
    <div className="row text-center">
      <div className="col-md-4 box">
        <span className="copyright quick-links">Copyright &copy; Quote-Fu8ion <script>document.write(new Date().getFullYear())</script>
        </span>
      </div>
    
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer