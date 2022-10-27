import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/ContextProvider';
import '../../styles/Login.css';

const Login = () => {
    const [error, setError] = useState("");
    const { userSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        userSignIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                form.reset()
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error)
                setError(error.message)
            })



    }


    return (
        <div className='mt-3'>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="border border-3 border-primary"></div>
                            <div className="card bg-white shadow-lg">
                                <div className="card-body p-5 back-ground">
                                    <Form onSubmit={handleSubmit} className="mb-3 mt-md-4">
                                        <h2 className="fw-bold mb-2 text-uppercase ">Educare</h2>
                                        <p className=" mb-5">Please enter your login and password!</p>
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
                                            <Button className="btn btn-outline-dark" type="submit">Login</Button>
                                        </div>
                                    </Form>
                                    <div>
                                        <p className='text-danger'>{error}</p>
                                        <p className="mb-0  text-center">Don't have an account? <Link to="/register"
                                            className="text-primary fw-bold">Sign
                                            Up</Link></p>
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

export default Login;