//to send the data
import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login()
{
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')

    //setUser is called in usecontextprovider to add data
    const {setUser}= useContext(UserContext)//(usercontext.js is context we wrote)
    
    const handalSubmit=(e)=>{
        e.preventDefault();//now add data to send data
        setUser({username, password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>{"  "}
            <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handalSubmit}>Submit</button>
        </div>
    )
}

export default Login