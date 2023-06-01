import './Navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {


    return (
        <div className='Navbar'>
            <nav>

                <div className="LogoAndLinks">

                    <img src="https://edify.pk/_next/image?url=%2Fimages%2Flogo.webp&w=256&q=75" alt="" />

                    <ul>
                        <li><NavLink to="/">Home </NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact-us">Contact</NavLink></li>
                    </ul>

                </div>

                <div className="buttons">
                    <button>Sign up</button>
                    <button>Log in</button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar