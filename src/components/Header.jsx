import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
    <Navbar className="bg-info">
        <Container>
        <Link to={'/'} style={{textDecoration:"none " }}     >
              <Navbar.Brand href="#home"  className='fs-2 text-light'>
              <i class="fa-solid fa-music me-3 fs-2"></i>
                Media Player
              </Navbar.Brand>
        </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header