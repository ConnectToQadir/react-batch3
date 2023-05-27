import './Navbar.css'


const Navbar = () => {


    return (
        <div className='Navbar'>
            <nav>

                <div class="LogoAndLinks">

                    <img src="https://edify.pk/_next/image?url=%2Fimages%2Flogo.webp&w=256&q=75" alt="" />

                    <ul>
                        <li><a style={{color:"red"}} href="#">Home </a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Portfolio</a></li>
                    </ul>

                </div>

                <div class="buttons">
                    <button>Sign up</button>
                    <button>Log in</button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar