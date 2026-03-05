import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute=({login})=>{
    console.log(login);
    if(login){
        return <Navigate to='/playGround'/>
    }
    return <p>Page not found.</p>
}
export default PrivateRoute;