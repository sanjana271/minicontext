import React from "react";
import { createContext } from "react";
//see w3 school for notes

const UserContext= React.createContext()
//when we wrap elements in provider of usercontext , whatever componets are wrap in this they will have acess to data of usercontext.

export default UserContext;