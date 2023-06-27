import './Contact.css'
import { useState, useEffect,useRef } from 'react'

const Contact = () => {

  const inputRef = useRef()

  

  // Enroll Student -------------------------------------------------
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const submitForm = async (e) => {
    e.preventDefault()

    var res = await fetch('https://react-batch3.vercel.app/api/students/enroll', {
      method: "POST",
      body: JSON.stringify({ name: name, age: age }),
      headers: {
        "Content-type": "application/json"
      }
    })

    const jsonRes = await res.json()

    if (jsonRes.success) {
      alert("User Created Successfully!")
      setName("")
      setAge("")
    } else {
      alert("Something Went Wrong!")
    }
  }


  // Edit Student ----------------------------------------------------
  const [updateMode,setUpdateMode] = useState(false)
  const [updatingStudentID,setUpdatingStudentID] = useState("")
  const setEnvToUpdate = (v) =>{

    setUpdateMode(true)
    setName(v.name)
    setAge(v.age)
    setUpdatingStudentID(v._id)
    inputRef.current.focus()
  }
  const updateStudent =async (e) =>{
    e.preventDefault()
    var res = await fetch(`https://react-batch3.vercel.app/api/students/${updatingStudentID}`, {
      method: "PUT",
      body: JSON.stringify({ name: name, age: age }),
      headers: {
        "Content-type": "application/json"
      }
    })

    const jsonRes = await res.json()

    if (jsonRes.success) {
      alert("User Updated Successfully!")
      setName("")
      setAge("")
    } else {
      alert("Something Went Wrong!")
    }
  }



  // Get All Students ------------------------------------------------
  const [students, setStudents] = useState([])
  const getStudents = async () => {
    var res = await fetch('https://react-batch3.vercel.app/api/students/')
    res = await res.json()
    setStudents(res)
  }


  useEffect(() => {
    getStudents()
  }, [students])


  // Delete Student
  const deleteStudent = async (id) =>{
    var res = await fetch(`https://react-batch3.vercel.app/api/students/${id}`,{
      method:"DELETE"
    })
    res = await res.json()
    alert(res.message)
  }


  return (
    <div>
      <h1>Contact Us</h1>


      <form onSubmit={updateMode ? updateStudent : submitForm} >
        <h2>{updateMode ? "Edit" : "Enroll"} Student</h2>
        <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
        <button>{updateMode ? "Update" : "Enroll"}</button>
      </form>


      <table border="true" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>


          {
            students.map((v,i) => {
              return (
                <tr key={i} >
                  <td>{v.name}</td>
                  <td style={{ textAlign: "center" }} >{v.age}</td>
                  <td style={{ textAlign: "center" }} ><i onClick={()=>deleteStudent(v._id)} className='bx bx-trash'></i> <i onClick={()=>setEnvToUpdate(v)} className='bx bx-edit'></i></td>
                </tr>
              )
            })
          }



        </tbody>
      </table>



    </div>
  )
}

export default Contact