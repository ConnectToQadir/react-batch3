import { useState, useEffect, useRef } from "react"

const About = () => {


  const [blogs, setBlogs] = useState([])


  const [num, setNum] = useState(1)

  const fetchBlogs = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonRes = await res.json()
    setBlogs(jsonRes)
  }




  useEffect(() => {
    fetchBlogs()
  }, [num])


  return (
    <div>
      <h1>About Us</h1>

      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)} >Inc</button>


      <div className="blogs">

        {
          blogs.map((v, i) => {
            return(
            <article key={i} >
              <h1>{v.title}</h1>
              <p>{v.body}</p>
              <hr />
            </article>
            )
          })
        }

      </div>

    </div>
  )
}

export default About