"use client"

import { useState, useEffect } from "react"


const Crud = () => {

  const [user, setUser] = useState({
    name: "",
    age: ""
  })
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // Create New User
  const submitForm = async (e) => {
    e.preventDefault()
    var res = await fetch('/api/user', {
      body: JSON.stringify(user),
      method: "POST",
      headers: { "content-Type": "application/json" }
    })
    res = await res.json()
    if (res.success) {


      alert("User Saved in DB Successfully!")
      setUser({
        name: "",
        age: ""
      })


    } else {
      alert("Something went wrong!")
    }

  }



  // Get Students
  const [users, setUsers] = useState([])
  const getStudents = async () => {
    var data = await fetch("/api/user")
    data = await data.json()
    setUsers(data)
  }

  useEffect(() => {
    getStudents()
  }, [users])



  // Delete User
  const deleteUser = async (userID) =>{
    var res = await fetch("/api/user",{
      method:"DELETE",
      body:JSON.stringify({id:userID}),
      headers:{"content-Type":"application/json"}
    })
    res = await res.json()
    console.log(res)
  }



    // Edit Student ----------------------------------------------------
    const [updateMode,setUpdateMode] = useState(false)
    const [updatingStudentID,setUpdatingStudentID] = useState("")

    const setEnvToUpdate = (v) =>{
      setUpdateMode(true)
      setUser({
        name:v.name,
        age:v.age
      })
      setUpdatingStudentID(v._id)
    }


    const updateStudent =async (e) =>{
      e.preventDefault()
      var res = await fetch(`/api/user`, {
        method: "PUT",
        body: JSON.stringify({...user,id:updatingStudentID}),
        headers: {
          "Content-type": "application/json"
        }
      })
  
      const jsonRes = await res.json()
  
      if (jsonRes.success) {
        alert("User Updated Successfully!")
        setUser({
          name:"",
          age:""
        })
      } else {
        alert("Something Went Wrong!")
      }
    }



  return (
    <div>
      <form onSubmit={updateMode ? updateStudent : submitForm} >
        <input value={user.name} name="name" onChange={(e) => changeHandler(e)} type="text" placeholder='Name' /><br />
        <input value={user.age} name="age" onChange={(e) => changeHandler(e)} type="number" placeholder='Age' /><br />
        <button>{updateMode ? "Update" : "Submit"}</button>
      </form>


      <br /><br />

      <table border="true" >


        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Actions</td>
          </tr>
        </thead>


        <tbody>

          {
            users.map((v, i) => {
              return (
                <tr key={i} >
                  <td>{v.name}</td>
                  <td>{v.age}</td>
                  <td>
                    <i onClick={()=>{window.confirm(`Are you sure to Delete ${v.name}`) && deleteUser(v._id)}}  className="bx bx-trash" ></i>
                    <i onClick={()=>setEnvToUpdate(v)} className="bx bx-edit" ></i>
                  </td>
                </tr>
              )
            })
          }


        </tbody>


      </table>

    </div>
  )
}

export default Crud