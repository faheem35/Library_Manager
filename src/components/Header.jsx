import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <Navbar className='bg-danger'>
      <Container>
      <Link to={'/'} style={{textDecoration:'none'}}>
      <Navbar.Brand className='text-white fs-5 fw-bolder'>
        <i class="fa-solid fa-book me-3"></i>
         Library Manager
         </Navbar.Brand>
      
      </Link>
      </Container>



    </Navbar>
  )
}

export default Header