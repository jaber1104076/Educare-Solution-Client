import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Pdf from 'react-to-pdf';
import './CourseDetails.css'

const CourseDetails = ({ course }) => {
    const { title, image_url, details, instructor, _id, rating } = course;
    const ref = React.createRef()

    return (
        <div className='shadow p-4 mb-4 rounded-3 border-top border-3 border-primary'>
            <img className="img-fluid w-100 h-50 rounded-3" src={image_url} alt="" />
            <h2>{title}</h2>
            <p>{details.length > 250 ?
                <span>{details.slice(0, 250) + '...'} <Link to={`/courses/${_id}`}>Click to see More</Link></span>
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
                        <div>
                            <Pdf targetRef={ref} filename="course-example.pdf">
                                {({ toPdf }) => <Button className="btn-design px-2 mt-3" onClick={toPdf}>Downloadloadadadd</Button>}
                            </Pdf>
                            <div className='text-white' ref={ref}>
                                <span>f</span>
                            </div>
                        </div>
                    </div>

                </div>



            </div>


        </div>
    );
};
export default CourseDetails;