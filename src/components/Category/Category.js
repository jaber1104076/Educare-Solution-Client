import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../components/CourseDetails/CourseDetails';

const Category = () => {

    const courses = useLoaderData();

    return (
        <div className='mt-5 container'>
            {
                courses.map(course => <CourseDetails

                    key={course._id}
                    course={course}

                ></CourseDetails>)
            }
        </div>
    );
};

export default Category