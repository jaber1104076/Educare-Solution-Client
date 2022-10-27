import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/ContextProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRout = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const Location = useLocation()
    if (loader) {
        return <Spinner animation="grow" variant="dark" />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: Location }} replace></Navigate>
    }
    else {
        return children;
    }

};

export default PrivateRout;