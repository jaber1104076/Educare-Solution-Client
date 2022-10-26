import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/ContextProvider';

const NavBar = () => {
    const { user, LogOut } = useContext(AuthContext)

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                toast.success('Logout successfully')
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
            <Container>
                <Navbar.Brand href="#home">Educare build</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-decoration-none text-white mt-1 fs-5 me-3' to='/home'>Home</Link>
                        <Link className='text-decoration-none text-white mt-1 fs-5 me-3'>Courses</Link>
                        <Link className='text-decoration-none text-white mt-1 fs-5 me-3' to='/blog'>Blog</Link>
                        <Link className='text-decoration-none text-white mt-1 fs-5' to='/faqs'>fAQs</Link>
                    </Nav>
                    <Nav className="gap-2">
                        {
                            user?.uid
                                ?
                                <>
                                    <Button onClick={handleLogOut} className="btn btn-primary">
                                        logout
                                    </Button>
                                    <p className='text-white mt-1'>{user?.email}</p>
                                </>
                                :
                                <>
                                    <Link className="btn btn-primary" to='/login'>
                                        Login
                                    </Link>
                                    <Link
                                        eventKey={2}
                                        className="btn btn-light text-black"
                                        to='/register'
                                    >
                                        Sign up
                                    </Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;