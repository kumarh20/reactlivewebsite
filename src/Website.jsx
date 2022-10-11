import React from 'react';
import "./website.css";
import Navbar from "./Navbar";
import {Routes,Route} from "react-router-dom";
import Gallery from './Gallery';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Error from "./Error"

function Website() {
  return (
    <>
    <Navbar/>
 <Routes>
    
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<Error/>}/>
 </Routes>
  
   </>
  )
}

export default Website;