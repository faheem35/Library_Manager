import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-5 bg-danger text-white pt-3' >
      <Container>
       <Row>
        {/* intro */}
        <Col xs={5}> 
           <h5><i class="fa-solid fa-book me-3"></i> Library Manager</h5>
           <p>This site helps you store and manage your library effectively</p>
           <p>Code licensed MIT, docs CC BY 3.0.</p>
           <p>Currently v5.3.3.</p>
        </Col>
        {/* Links */}
        <Col>
        <div className='d-grid'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>
        </div>
        </Col>
        {/* Guides */}
        <Col>
        <div className='d-grid'>
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{textDecoration:'none', color:'white'}} target='_blank'>React</a>
          <a href="https://react-bootstrap.github.io/" style={{textDecoration:'none', color:'white'}} target='_blank'>React Bootstrap</a>
          <a href="https://reactrouter.com/" style={{textDecoration:'none', color:'white'}} target='_blank'>React Router</a>


        </div>
        </Col>
        {/* contact */}
        <Col>
        <h5>Contacts</h5>
        <div className='d-flex'>
          <input type="text" className='form-control me-3' placeholder='Enter Your Email Here...'/>
          <button className='btn btn-secondary'><i className="fa-solid fa-arrow-right"></i></button>
        </div>

        <div className='d-flex justify-content-between mt-3'>
          <a href="https://x.com/__x" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://www.instagram.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></a>
          <a href="https://www.facebook.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></a>
          <a href="" style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-phone" target='_blank'></i></a>
          <a href="https://in.linkedin.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
        </div>
        </Col>
       </Row>

      </Container>

    </div>
  )
}

export default Footer