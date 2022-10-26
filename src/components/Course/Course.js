import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../../components/CourseDetails/CourseDetails';

const Course = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>Our All Courses</h2>
            <div>
                {
                    allCourses.map(course => <CourseDetails
                        key={course.id}
                        course={course}

                    ></CourseDetails>)
                }
            </div>
        </div>
    );
};

export default Course;
