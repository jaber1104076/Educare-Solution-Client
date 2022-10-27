import React, { useContext, useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/ContextProvider';
import './NavBar.css'
import Logo from '../../assets/images/Logo.jpg'

const NavBar = () => {
    const { user, LogOut } = useContext(AuthContext)

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

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
        <Navbar bg="light" variant="light" expand="lg" className="p-3">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        roundedCircle
                        src={Logo}
                        // width="30"
                        // height="30"
                        // border-radius="15"
                        className="d-inline-block img-nav align-top me-2 mt-1"
                    />
                    <Link to='/' className='text-decoration-none text-dark fw-bolder fs-3'>EduCare Solution</Link></Navbar.Brand>
                {/* <Navbar.Brand className='fs-3 fw-bold text-primary'>Educare Solution</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-decoration-none text-dark  mt-1 fs-5 me-3' to='/home'>Home</Link>
                        <Link className='text-decoration-none text-dark mt-1 fs-5 me-3' to='/course'>Course</Link>
                        <Link className='text-decoration-none text-dark  mt-1 fs-5 me-3' to='/blog'>Blog</Link>
                        <Link className='text-decoration-none text-dark  mt-1 fs-5' to='/faqs'>fAQs</Link>
                    </Nav>
                    <Nav className="gap-3 d-flex justify-content-center align-items-center">
                        {
                            user?.uid
                                ?
                                <>
                                    <Button onClick={handleLogOut} className="btn btn-primary">
                                        logout
                                    </Button>
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
                        >
                            <div className={`App ${theme}`}>
                                <p className='btn btn-light text-black mb-0' onClick={toggleTheme}>Toggle</p>
                            </div>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;