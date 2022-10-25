import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpg'
const Header = () => {
    return (
        <div>
            <Navbar className='py-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            border-radius="15"
                            className="d-inline-block align-top me-3"
                        />
                        <Link to='/' className='text-decoration-none text-white fs-4'>EduCare building Future</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <><Link className='text-decoration-none text-white mt-2 fs-5' to='/home'>Home</Link></>
                            <Link className='text-decoration-none text-white mt-2 fs-5 ms-2' to='/courses'>Courses</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;