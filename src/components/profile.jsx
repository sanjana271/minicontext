//to get or receive the data
import React from "react";
import  {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile()
{
    //user is called in usecontextprovider to add data
    const {user}= useContext(UserContext)//(usercontext.js is context we wrote)

    if(!user) return <div>Please Login!</div>

    return <div>Welcome {user.username}</div>
}

export default Profile