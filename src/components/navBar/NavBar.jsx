import React from 'react'
import './NavBar.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="Netflix Logo" />
      <h4 className='nav-text'>UNLIMITED TV SHOWS & MOVIES</h4>
      <button className='join-btn'>Join Now</button>
      <button className='sign-btn'>Sign Out</button>
    </div>
  )
}

export default NavBar
