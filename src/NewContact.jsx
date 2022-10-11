import React, { useState } from 'react'

function NewContact() {
    const [val, setVal]=useState({
            fullname:"",
            number:"",
    });
   
    
    const [data,setData]=useState();
    const Change=(event)=>{
        const {name,value} = event.target;
        console.log(value);
       setVal((preVal)=>{
        return{
            ...preVal,
            [name]:value,
        }
       });
     
    }
    const Submit=(e)=>{
     e.preventDefault();
     alert(`my Name is 👉 ${val.fullname}. My Number Is 👉  ${val.number}`);
    };
 
  return (
   <>
    <div className='container'>
    <div className='p-4'></div>
        <div className='row  border border-dark rounded p-3'>
        <div className='col'></div>
            <div className='col-4 '>
            <form   onSubmit={Submit}>
  <div className="form-group">
    <label >FullName</label>
    <input type="text" className="form-control" name="fullname" value={val.fullname} onChange={Change} placeholder="Enter email" id="email"/>
  </div>
  <div className="form-group">
    <label>Query</label>
    <input type="number" className="form-control" name="number" value={val.number} onChange={Change} placeholder="Enter password" id="pwd"/>
  </div>
 
  <button type="submit"  className="btn btn-primary">Submit</button>
</form>
            </div>
            <div className='col'></div>
            
        </div>
    </div>
    <div className='p-5'></div>
   </>
  )
}

export default NewContact;    