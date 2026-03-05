import React from 'react';
const Login=({data})=>{

    console.log("login component ===> ", data);
    const {login,setLogin}=data;
    return (
        <>
            <p>Login</p>
            <button onClick={()=>setLogin(!login)}>{login?'Log Out':'Login'}</button>
        </>
    );
}
export default Login;