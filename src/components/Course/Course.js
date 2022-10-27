import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../components/CourseDetails/CourseDetails';

const Course = () => {
    const allCourses = useLoaderData();
    // console.log(allCourses)
    return (
        <div>
            <h2>Our All Courses</h2>
            <div>
                {
                    allCourses.map(course => <CourseDetails
                        key={course._id}
                        course={course}

                    ></CourseDetails>)
                }
            </div>
        </div>
    );
};

export default Course;
