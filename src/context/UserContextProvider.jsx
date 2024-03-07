import react, { useState } from 'react';
import UserContext from './UserContext';


const UserContextProvider=({children})=>{
    //we will return whatever component we receive eg card , dash etc
    //we will wrap it in provider
    //then add data 
    const [user, setUser]= useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}> {/*giving access of user(to send data) and setuser(to add data)*/}
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;