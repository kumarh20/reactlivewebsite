import React, { useState } from 'react';
import NewContact from './NewContact';

function Contact() {
    const [val, setVal]=useState("");
    const [val1, setVal1]=useState("");
    const [data,setData]=useState();
    const Change=(event)=>{
        const value = event.target.value;
        console.log(value);
       setVal(value);
     
    }
    const Change2=(event)=>{
        const value1 = event.target.value;
        console.log(value1);
       setVal1(value1);
     
    }
    const Click=()=>{
        setData(val+val1);
       alert(val+val1);
       setVal("");
       setVal1("");
    }
  return (
   <>
    <div className='container'>
    <div className='p-4'></div>
        <div className='row  border border-dark rounded p-3'>
            <div className='col '>
                <h1>Contact</h1>
                <p>This is Contact Page</p>
               
                <br/>
                
                    <label>Your Name</label>
                    <input type="text" onChange={Change} name="name" value={val} className='form-control'/><br/>
                    <label>Your Query</label><br/>
                   <textarea  onChange={Change2}  value={val1} name="query" className='form-control' rows="3" columns=""></textarea> <br/>
                    <button  onClick={Click} className='btn btn-primary'>Submit</button>
                
            </div>
            <div className='col  '>
                <img src="img/contact.gif" className='img-fluid mx-auto ' width="370"/>
            </div>
        </div>
    </div>
    <NewContact/>
   </>
  )
}

export default Contact;    