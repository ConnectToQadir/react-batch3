import './Navbar.css'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='Navbar'>
      <h1>Navbar</h1>
      <Link href="/" >Home</Link><br /><br />
      <Link href="/about" >About</Link><br /><br />
      <Link href="/blog" >Blog</Link><br /><br />
      <Link href="/users" >Users</Link><br /><br />
    </div>
  )
}

export default Navbar