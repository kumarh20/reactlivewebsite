import React, { useState } from 'react';
import Images from './Images';

function Gallery() {
  const [img,setImg]=useState(Images);
  return (
   <>
    <div className='container'>
    <div className='p-4'></div>
    <h1>React Gallery</h1>
        <div className='row   rounded  flex '>
           {img.map((value)=>{
            return(
              <>
               <div className='col text-center gall p-0'>
             
                <img src={value.img} width="350"  height="300" className="rounded"/>
                <div className='card-footer'>
                  <h6>{value.title}</h6>
                </div>
            </div>
              </>
            )
           })}
            
        </div>
    </div>
   </>
  )
}

export default Gallery;