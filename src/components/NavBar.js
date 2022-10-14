import React, { useState } from 'react'
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Flip from 'react-reveal/Flip';
import { Button } from 'react-bootstrap';


const NavBar = () => {

    return (
        <Row>
            <Navbar bg="black" expand="lg" variant='dark' className='nav'>
                <Container >
                    <Navbar.Brand href="#">

                        <Flip left className=''>
                            <Navbar.Brand href="#"> Pin Win  <img className='img-logo' src="logo.png" alt="" />
                            </Navbar.Brand>
                        </Flip>


                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <Navbar.Collapse id="navbarScroll">

                                <Nav className="me-auto my-2 my-lg-2 py-2 btn-mix " style={{ maxHeight: '50px' }} navbarScroll   >

                                    <Button className='btn-0' variant="light" size="sm" href="https://www.instagram.com/pinwinshopping/"><img src='icon-inst.png' /></Button>
                                    
                                </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Row>
    )
}

export default NavBar;
