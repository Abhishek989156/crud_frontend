import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
      axios.get('http://localhost:8081')
      .then(result=>setUsers(result.data))
      .catch(err=>console.log(err))
    },[])
    console.log(users)

    const handleDelete=(id)=>{
      axios.delete('http://localhost:8081/deleteUser/'+id)
      .then(res=>{console.log(res)
      window.location.reload()})
      .catch(err=>console.log(err))
    }


  return (
    
    <div>
        
     <table className="table table-dark">
  <thead>
    <tr>
      <th >Name</th>
      <th >Email</th>
      <th >Age</th>
      <th >Action</th>
    </tr>
  </thead>
  <tbody>
  

  {
    users.map((user)=>{
        return(
             <tr>
     
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
        
        <td>
        <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
        <button className='btn btn-danger'
         onClick={(e)=>handleDelete(user._id)}>Delete</button>
        </td>
      </tr>
        )
       
    })
  }
   </tbody>
</table>
<Link to="/create" className='btn btn-success'>Add New User</Link>
    </div>
  )
}

export default Users

