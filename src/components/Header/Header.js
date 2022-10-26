import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.jpg'
import { AuthContext } from '../../contexts/ContextProvider';
import './Header.css'
const Header = () => {
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
        <div>
            <Navbar className='py-3 nav-bg' collapseOnSelect expand="lg">
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
                            <Link className='text-decoration-none text-white mt-2 fs-5 me-2' to='/faqs'>FAQs</Link>
                            <Link className='text-decoration-none text-white mt-2 fs-5' to='/blog'>Blog</Link>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2}>
                                {user?.uid &&
                                    <>
                                        <Button onClick={handleLogOut}>Logout</Button>
                                        <p>{user?.displayName}</p>
                                    </>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;