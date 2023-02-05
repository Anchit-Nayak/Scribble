import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logosmol.png'

function Navbar() {
  return <div className='navbar'>
  <div className='container'>
    <div className='logo'>
    <Link to="/">
    <img classname='logoimg'src={Logo} alt=''/>
    </Link>
      
    </div>
    <div className='links'>
      <Link className='link' to="/?cat=art">
         <h3>ART</h3>
      </Link>
      <Link className='link' to="/?cat=science">
         <h3>SCIENCE</h3>
      </Link>
      <Link className='link' to="/?cat=technology">
         <h3>TECHNOLOGY</h3>
      </Link>
      <Link className='link' to="/?cat=design">
         <h3>DESIGN</h3>
      </Link>
      <Link className='link' to="/?cat=food">
         <h3>FOOD</h3>
      </Link>
      <span className='write'>
      <Link className="link" to="/write"><h3>Write</h3></Link>
      </span>
      <span>Anchit</span>
      
      
      <span >Logout</span>
    </div>
  </div>

  </div>
}

export default Navbar