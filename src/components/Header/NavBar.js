import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
                <Navbar.Brand className='fs-3 fw-bold text-primary'>Educare Solution</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-decoration-none text-white mt-1 fs-5 me-3' to='/home'>Home</Link>
                        <Link className='text-decoration-none text-white mt-1 fs-5 me-3'>Courses</Link>
                        <Link className='text-decoration-none text-white mt-1 fs-5 me-3' to='/blog'>Blog</Link>
                        <Link className='text-decoration-none text-white mt-1 fs-5' to='/faqs'>fAQs</Link>
                    </Nav>
                    <Nav className="gap-3 d-flex justify-content-center align-items-center">
                        {
                            user?.uid
                                ?
                                <>
                                    <Button onClick={handleLogOut} className="btn btn-primary">
                                        logout
                                    </Button>
                                    <span className='text-white'>{user?.email}</span>
                                    <Image src={user?.photoURL} style={{ width: "30x", height: "30px", borderRadius: '15px' }}></Image>
                                </>
                                :
                                <>
                                    <Link className="btn btn-primary" to='/login'>
                                        Login
                                    </Link>
                                    <Link
                                        className="btn btn-light text-black"
                                        to='/register'
                                    >
                                        Sign up
                                    </Link>
                                </>
                        }
                        <Nav.Link
                            eventKey={2}
                            className="btn btn-light text-black"
                        >
                            togol
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;