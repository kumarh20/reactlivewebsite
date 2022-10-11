import React from 'react'
import { NavLink } from 'react-router-dom';

function Common(props) {
  return (
   <>
   <div className='p-5'></div>
  <section id='header' className='d-flex align-items-center'>
    <div className='container-fluid nav-bg'>
        <div className='row'>
            <div className='col-10 mx-auto '>
            <div className='row'>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                    <h3>
                       {props.name} <br/> <stong className="text-white  text-lg">KumarTechnical</stong>
                    </h3>
                    <p className='my-3'>
                        We are The Team Talented Developers making Websites
                    </p>
                    <div className='mt-3'>
                       <button className='btn btn-primary rounded'> <NavLink className='text-white' to={props.visit}>Get started</NavLink></button>
                    </div>
            </div> 
                    <div className='col-lg-6 order-1 order-lg-2'>
                        <img src={props.imgsrc} width="370" height="400" className="img-fluid animated rounded-circle" alt="Image" />
                    </div>
                    </div>
            </div>
        </div>
    </div>
  </section>
   </>
  )
}

export default Common;