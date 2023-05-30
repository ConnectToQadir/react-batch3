import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import { Routes, Route } from 'react-router-dom'
import Layout from "./Layout"

const App = () => {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact-us' element={<Contact />} />
                </Routes>
            </Layout>
        </div>
    )
}




export default App