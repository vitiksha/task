import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const navLinkStyle = ({isActive}) => {
        return{
            fontWeight : isActive ? 'bold' : 'normal',
            textDecoration : isActive ? 'none' : 'underline' 
        }
    }

    return (
    <nav className='primary-nav'>
        <NavLink style={navLinkStyle} to="/">Home</NavLink>
        <NavLink style={navLinkStyle} to="/displaydata">SeeUserDate</NavLink>
    </nav>
  )
}

export default Navbar;
