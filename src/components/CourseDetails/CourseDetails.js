import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CourseDetails = ({ course }) => {
    const { title, image_url, details, instructor, _id, rating } = course;
    const handleCheckout = (id) => {
        return id;
    }
    return (
        <div className='shadow p-4 mb-4 rounded-3'>
            <img className="img-fluid w-100 h-50 rounded-3" src={image_url} alt="" />
            <h2>{title}</h2>
            <p>{details.length > 250 ?
                <span>{details.slice(0, 250) + '...'} <Link to={`/courses/${_id}`}>Read More</Link></span>
                :
                <span>{details}</span>

            }</p>
            <div className='d-flex'>
                <Image
                    roundedCircle
                    className='me-3'
                    src={instructor.img}
                    style={{ width: "50", height: '50px' }}

                ></Image>
                <div className='d-flex justify-content-between'>
                    <div>
                        <p className='mb-0'>{instructor.name}</p>
                        <p className='mb-0'><small>Course Duration: {instructor.duration}</small></p>
                        <div className='me-5 pe-5'>
                            <div className='align-items-center'>
                                <FaStar className='text-warning me-2'></FaStar>
                                <FaStar className='text-warning me-2'></FaStar>
                                <FaStar className='text-warning me-2'></FaStar>
                                <FaStar className='text-warning me-2'></FaStar>
                                <FaStar className='text-warning me-2'></FaStar>
                                <span>{rating?.number}</span>
                            </div>


                        </div>

                    </div>
                    <div>
                        <Link to="/checkout"> <p onClick={() => handleCheckout(_id)} className='btn btn-primary ms-5 mt-2 '>Get premium Access</p></Link>
                    </div>
                </div>



            </div>


        </div>
    );
};

export default CourseDetails;