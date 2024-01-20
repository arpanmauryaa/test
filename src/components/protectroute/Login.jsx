import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate=useNavigate()
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    useEffect(()=>{
        let data=localStorage.getItem("obj")
        if(data){
        navigate("/")}
    })

    const handleChange = (e) => {
        setLoginData((oldData => ({...oldData, [e.target.name]: e.target.value })))
    }

    const submit = () => {
        var local = localStorage.setItem("obj", JSON.stringify(loginData));
        // localStorage.removeItem("obj");

    }

    
    return (

        <>
            <label>Email</label><br />
            <input type="text"
                name='email'
                value={loginData.email}
                onChange={handleChange}
            /> <br /><br />

            <label>Password</label><br />
            <input type="text"
                name='password'
                value={loginData.password}
                onChange={handleChange}
            />
            <br /><br />

            <button onClick={submit}>Save</button>
        </>

    )
}

export default Login
