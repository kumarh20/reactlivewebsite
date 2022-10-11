import React from 'react'
import {NavLink} from "react-router-dom";

function Navbar() {
  return (
   <>
    <div className=''>
        <div className=' shadow container  bg-white '>
            <div className='row'>
            <div className='col-11 p-0'>
            <nav className="navbar navbar-expand-md">
  <a className="navbar-brand px-3" href="">Kumar_Technical</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto text-center">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>    
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>    
      <li className="nav-item">
        <NavLink className="nav-link" to="/services">Services</NavLink>
      </li>    
    </ul>
  </div>  
</nav>
            </div>
                </div>
        </div>
    </div>
   </>
  )
}

export default Navbar