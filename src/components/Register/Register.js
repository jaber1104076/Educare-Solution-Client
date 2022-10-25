import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/Login.css';
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/ContextProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        // const name = form.name.value;
        const password = form.password.value;
        console.log(email, password)

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                console.error(error)
            })

    }




    const handlegoogleSignIn = () => {

    }
    return (
        <div className='mt-3'>
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
                                    </Form>
                                    <div>
                                        <p className='fs-3 text-center'>
                                            <FaGoogle onClick={handlegoogleSignIn} className='me-3'></FaGoogle>
                                            <FaGithub></FaGithub>
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