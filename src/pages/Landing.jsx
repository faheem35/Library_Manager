import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Container className="mt-5 min-vh-100 d-flex align-items-center">
      <Row className="w-100 text-center text-md-start">
        {/* Text Column */}
        <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
          <h3>
            Welcome to <span className="text-warning">Library Manager</span>
          </h3>
          <p style={{ textAlign: 'justify' }} className="mt-4 px-3 px-md-0">
            Library Manager is a tool designed to help users efficiently manage their personal or organizational library. With Library Manager, you can easily add new books to your collection by simply inputting the book details, remove books when they are no longer needed, and even track the history of books read.
          </p>
          <Link
            to={'/home'}
            className="btn btn-primary mt-3 mx-auto mx-lg-0 align-self-lg-start"
          >
            Get Started
          </Link>
        </Col>

        {/* Image Column */}
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center mt-4 mt-md-0"
        >
          <img
            width="100%"
            src="https://img.soogif.com/yIP2EQK5b8fhaNtRrnrxtKNlo2IcSZNH.gif"
            alt="Library Manager"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
