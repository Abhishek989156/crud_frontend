import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUsers = () => {

  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[age,setAge]=useState();
  const navigate=useNavigate();

  const Submit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:8081/createUser",{name,email,age})
    .then(result=>{
      console.log(result)
      navigate('/')
    })
    .catch(err=>console.log(err))


  }

  return (
    <div className=''>
      CreateUser
<form  onSubmit={Submit}> 


  <div className="table table-dark">

    <div className="col">
      <input type="text" className="form-control" placeholder="First name" 
      onChange={(e=>setName(e.target.value))}/>
    </div>


    <div className="form-group col-md-6">
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
      onChange={(e=>setEmail(e.target.value))}/>
    </div>


    <div className="col">
      <input type="text" className="form-control" placeholder="Age"
      onChange={(e=>setAge(e.target.value))}/>
    </div>

  </div>
  <button className="btn btn-primary" type="submit">Create</button>
</form>
    </div>
  )
}

export default CreateUsers

