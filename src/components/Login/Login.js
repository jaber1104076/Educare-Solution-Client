import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import '../../styles/Login.css';

const Login = () => {
    return (
        <div className='mx-auto w-25 background-property'>
            <Form>
                <Form.Group className="mb-3 fs-5 fw-semibold" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 fs-5 fw-semibold" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Sign In
                </Button>
                <span className='ms-1'>New to website <Link to='/register'>Register</Link></span>
            </Form>
        </div>
    );
};

export default Login;