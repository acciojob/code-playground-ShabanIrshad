import React, { Children } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute=({login,Children})=>{
    console.log(login);
    if(!login){
        return <Navigate to='/login'/>
    }
    return Children;
}
export default PrivateRoute;