import React from 'react'
import { Container} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';

import Nav from 'react-bootstrap/Nav';

function Navbars(){
  return (
<Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Furniture Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto bgc">
            <Nav.Link href="#home" className='text-white nvlinks'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white nvlinks'>About</Nav.Link>
            <Nav.Link href="#link" className='text-white nvlinks'>Our Design</Nav.Link>
            <Nav.Link href="#link" className='text-white nvlinks'>Shop</Nav.Link>
            <Nav.Link href="#link" className='text-white nvlinks'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars