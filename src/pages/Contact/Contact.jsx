import './Contact.css'
import { useState, useEffect } from 'react'

const Contact = () => {

  // Enroll Student -------------------------------------------------
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const submitForm = async (e) => {
    e.preventDefault()

    var res = await fetch('http://localhost:4600/api/students/enroll', {
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
  // -----------------------------------------------------------------




  // Get All Students ------------------------------------------------
  const [students, setStudents] = useState([])
  const getStudents = async () => {
    var res = await fetch('http://localhost:4600/api/students/')
    res = await res.json()
    setStudents(res)
  }
  useEffect(() => {
    getStudents()
  }, [students])
  // ----------------------------------------------------------------


  // Delete Student
  const deleteStudent = async (id) =>{
    var res = await fetch(`http://localhost:4600/api/students/${id}`,{
      method:"DELETE"
    })
    res = await res.json()
    alert(res.message)
  }


  return (
    <div>
      <h1>Contact Us</h1>


      <form onSubmit={submitForm} >
        <h2>Enroll Student</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
        <button>Submit</button>
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
                  <td style={{ textAlign: "center" }} ><i onClick={()=>deleteStudent(v._id)} className='bx bx-trash'></i> <i className='bx bx-edit'></i></td>
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