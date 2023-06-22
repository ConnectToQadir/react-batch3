import './Contact.css'
import { useState } from 'react'

const Contact = () => {

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

    if(jsonRes.success){
      alert("User Created Successfully!")
      setName("")
      setAge("")
    }else{
      alert("Something Went Wrong!")
    }


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


    </div>
  )
}

export default Contact