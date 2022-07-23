import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navba() {
  return (
    <>
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="home"><img 
            src="https://img.icons8.com/ios-glyphs/90/1ABC9C/cloud-backup-restore.png"
            alt=""
              width="30"
              height="30"
              className="d-inline-block align-top"
            
            />{' '}{'  '}
            L&T DCCS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            
          </Navbar.Brand>
        </Container>
      </Navbar> */}
    </>
  )
}

export default Navba;