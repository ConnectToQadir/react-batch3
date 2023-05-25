import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById('r'));


// Component => A component is a function returning some jsx

function Amaan() {
  return (
    <h2>Amaan's Component</h2>
  )
}




function Btn(p) {

  console.log(p)

  return (
    <div>
      <h1>Authentication</h1>
      <button>Sign in</button>
      <button>Sign out</button>
    </div>
  )
}

// props   Assignment



root.render(
  <>
    
    <Btn src="Amaan" name="Usman" />
    {/* <h1>Center</h1> */}
    {/* <Btn /> */}
  </>
);





