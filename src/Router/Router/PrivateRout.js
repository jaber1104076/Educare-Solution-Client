import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/ContextProvider';

const PrivateRout = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    else {
        return children;
    }

};

export default PrivateRout;