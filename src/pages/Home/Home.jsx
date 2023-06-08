import {useState} from 'react'


const Home = () => {


  var [num,setNum] = useState(1)


  





  return (
    <div>
        <h1>Home Page</h1>

        <div>
          <h2>Counter App</h2>
          <div>
            <button disabled={num === 1} onClick={()=>setNum(num-1)} >-</button>
            <span>{num}</span>
            <button disabled={num === 10} onClick={()=>setNum(num+1)} >+</button>
          </div>
        </div>
    </div>
  )
}

export default Home