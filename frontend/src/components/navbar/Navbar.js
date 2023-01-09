import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo' onClick={()=>{window.location.href="http://localhost:3000/"}}>Paat-Vihar</span>
            <div className='navItems'>
            </div>
        
        </div>
    </div>
  )
}

export default Navbar