import React from 'react';
const Login=({data})=>{
    const {login,setLogin}=data;
    return (
        <>
            <p>Login</p>
            <button onClick={()=>setLogin(!login)}>{login?'Logout':'Login'}</button>
        </>
    );
}
export default Login;