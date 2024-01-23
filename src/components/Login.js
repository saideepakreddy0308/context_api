import React, {useState, useContext} from 'react'

// To access here we have to import the context object from the file, so that we can import it in other files.
import { LoginContext } from "../contexts/LoginContext";

function Login() {

  // we need to destruct the context object to get the state and the dispatch function.
  // const { state, dispatch } = React.useContext(LoginContext);
  const {setUsername, setShowprofile} = useContext(LoginContext);



  return (
    <>
    <input type="text" placeholder='Username...' onChange={(e) => {
        setUsername(e.target.value);
    }}/>
    <input type="password" placeholder='Password...' />
    <button onClick={() => {setShowprofile(true)}}>Login</button>
    </>
  )
}

export default Login