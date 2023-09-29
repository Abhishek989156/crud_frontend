import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateUsers = () => {
  const {id}=useParams();
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[age,setAge]=useState();
  const navigate=useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:8081/getUser/'+id)
    .then(result=>{
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err=>console.log(err))
  },[])

  const Update=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:8081/updateUser/"+id,{name,email,age})
    .then(result=>{
      console.log(result)
      navigate('/')
    })
    .catch(err=>console.log(err))


  }



  return (
    <div>
      Update User
      <form onSubmit={Update}>


  <div className="table table-dark">

    <div className="col">
      <input type="text" className="form-control" placeholder="First name"
     
      value={name} onChange={(e)=>setName(e.target.value)} />
    </div>


    <div className="form-group col-md-6">
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
      value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>


    <div className="col">
      <input type="text" className="form-control" placeholder="Age"
      value={age} onChange={(e)=>setAge(e.target.value)}/>
    </div>

  </div>
  <button className="btn btn-primary" type="submit">Update</button>
</form>
    </div>
  )
}

export default UpdateUsers

