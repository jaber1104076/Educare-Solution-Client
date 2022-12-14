import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://b610-lerning-platform-server-side-jaber1104076.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='shadow p-4 border-top  border-3 border-primary  rounded-3 text-center mt-5'>
            <h2 className='bg-info rounded-3 p-2 text-white'>All Courses</h2>
            <div className='category-design '>
                {
                    categories.map(category => <p key={category.id}>
                        <Link style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }} to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );


};

export default LeftSideNav;