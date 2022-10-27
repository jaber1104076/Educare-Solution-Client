import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PriviewItem from './PriviewItem';

const Checkout = () => {
    const course = useLoaderData()
    console.log(course)
    return (
        <div>
            <h1>this is checkout</h1>
            {
                course.map(c => <PriviewItem
                    key={c._id}
                    course={c}
                ></PriviewItem>)
            }
        </div>
    );
};

export default Checkout;