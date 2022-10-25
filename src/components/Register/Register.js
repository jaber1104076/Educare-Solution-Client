import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/Login.css';
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Register = () => {

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(email, password, name)
    }




    const handlegoogleSignIn = () => {

    }
    return (
        <div className='mx-auto w-25 background-property'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 fs-5 fw-semibold" controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" />
                </Form.Group>
                <Form.Group className="mb-3 fs-5 fw-semibold" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" required />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 fs-5 fw-semibold" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    SignUp
                </Button>
                <>
                    <span className='ms-1'>Already registered <Link to='/login'>Login</Link></span>
                </>
            </Form>
            <div className='text-center'>
                <p>or</p>
                <p>signUp with</p>
                <div className='fs-3'>
                    <FaGoogle onClick={handlegoogleSignIn} className='me-3'></FaGoogle>
                    <FaGithub></FaGithub>
                </div>
            </div>
        </div>
    );
};

export default Register;