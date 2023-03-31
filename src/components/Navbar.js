import React, { useState } from 'react'
import { Container} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbars(){
    const cartCount= JSON.parse(localStorage.getItem("cart-items")) || [];
    const { emailSuccess,passwordSuccess } = useSelector(state => state.loginState)
    const handleClick = ()=>{
      sessionStorage.clear();
    }
  return (
<Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Furniture Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto bgc">
            <NavLink to='/' activeClassName="red" className='text-white nvlinks nav-link'>Home</NavLink>
            {emailSuccess && passwordSuccess ? (<Link to='/'className='text-white nvlinks nav-link' onClick={handleClick}>Logout</Link>
             ) :
            (<NavLink to='/' activeClassName="red"className='text-white nvlinks nav-link'>Login</NavLink>)}
            <NavLink to='/cart' className='text-white nvlinks nav-link'>Cart({cartCount.length? cartCount.length : 0})</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars