import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/Login.css';
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/ContextProvider';
import './Register.css'

const Register = () => {
    const [error, setError] = useState("")
    const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(email, password)

        createUser(email, password, name, photoURL)
            .then((result) => {
                const user = result.user;
                console.log(user)
                form.reset()
                // handlegoogleSignIn();
                // handleGithubSignIn();
                navigate('/home')
            })
            .catch((error) => {
                console.error(error)
                setError(error.message)
            })

    }




    const handlegoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate('/home')
            })
            .catch((error) => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user)
                navigate('/home')
            })
            .catch((error) => {
                console.error(error)
                setError(error.message)
            })
    }

    return (
        <div className='mt-5 p-5'>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="border border-3 border-primary"></div>
                            <div className="card bg-white shadow-lg">
                                <div className="card-body p-5">
                                    <Form onSubmit={handleSubmit} className="mb-3 mt-md-4">
                                        <h2 className="fw-bold mb-2 text-uppercase ">Educare</h2>
                                        <p className=" mb-5">Please SignUp with email and password!</p>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label ">Full Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter Full Name" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label ">Photo URl</label>
                                            <input type="text" className="form-control" id="PhotoURL" name="photoURL" placeholder="Enter Photo URL" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label ">Email address</label>
                                            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label ">Password</label>
                                            <input type="password" className="form-control" id="password" placeholder="*******" />
                                        </div>
                                        <p className="small"><a className="text-primary" href="forget-password.html">Forgot password?</a></p>
                                        <div className="d-grid">
                                            <Button className="btn btn-outline-dark" type="submit">Sign Up</Button>
                                        </div>
                                        <p>{error}</p>
                                    </Form>
                                    <div>
                                        <p className='fs-3 text-center'>
                                            <FaGoogle onClick={handlegoogleSignIn} className='me-3 cursor-pointer'></FaGoogle>
                                            <FaGithub onClick={handleGithubSignIn} className='cursor-pointer'></FaGithub>
                                        </p>
                                        <p className="mb-0  text-center">Already have an account? <Link to="/login"
                                            className="text-primary fw-bold">LogIn</Link></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;