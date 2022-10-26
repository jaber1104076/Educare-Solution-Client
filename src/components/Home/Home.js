import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cover from '../../assets/images/cover.webp'
import learning from '../../assets/images/Learning.webp'
import skills from '../../assets/images/skills.webp'
import future from '../../assets/images/Future.jpg'
import './Home.css'
import { AuthContext } from '../../contexts/ContextProvider';
const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>We are here to Develope youe Future</h1>
                        <p> Education would be much more effective if its purpose was to ensure that by the time they leave school every boy and girl should know how much they do not know, and be imbued with a lifelong desire to know it</p>
                        <div className='d-flex'>
                            {
                                user?.uid
                                    ?
                                    <>
                                        <button type="button" className="btn btn-dark btn-large me-2">Learn more</button>
                                    </>
                                    :
                                    <>
                                        <button type="button" className="btn btn-dark btn-large me-2">Learn more</button>
                                        <button type="button" className="btn btn-dark me-2"><Link className='text-decoration-none text-white' to='/login'>Log In</Link></button>
                                        <button type="button" className="btn btn-dark"><Link className='text-decoration-none text-white' to='/register'>Sign Up</Link></button>
                                    </>

                            }


                        </div>
                    </div>
                    <div className="col img-col">
                        <Image src={Cover} className="img-fluid w-75" alt="Software Development" />
                    </div>
                </div>
                <div className="row cards">

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card">
                            <div className="card-body">
                                <img src={learning} className="icon" alt="Service One" />
                                <h5 className="card-title">Learning in the Different method</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card">
                            <div className="card-body">
                                <img src={skills} className="icon" alt="Service Two" />
                                <h5 className="card-title">Skills Development</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card">
                            <div className="card-body">
                                <img src={future} className="icon" alt="Service Three" />
                                <h5 className="card-title">Make Future Bright</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Home;