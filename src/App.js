import "./App.css";
import Login from "./components/Login";
import React, { useState } from "react";
import { LoginContext } from "./contexts/LoginContext";
import Profile from "./components/Profile";

// Here app.js is the parent component and login.js and profile.js are the child components.
// We are using the useState hook to set the state of the showprofile variable to false.
// We are passing the showprofile variable to the ternary operator.
// If the showprofile variable is true, then the Profile component will be rendered.
// If the showprofile variable is false, then the Login component will be rendered.
// We are passing the showprofile variable, setShowprofile function to the Login component as a prop.
// We are passing the showprofile variable, setShowprofile function to the Profile component.
// LoginContext.Provider is the provider component that provides the context to the components and wraps the components in it.
// And also we are passing the value prop to the provider component.

function App() {
  const [username, setUsername] = useState("");
  const [showprofile, setShowprofile] = useState(false);

  return (
    <div className="App">
      <LoginContext.Provider value={{username, setUsername, setShowprofile}}>
        
        {/* we are here passing everything as an object to the value prop, here we pass all the different things/states we want to pass to the child components. */}
        {/* Lets say we want to pass username and setUsername to the child components, then we can pass it like this: value={{username, setUsername}} */} 
        {/* Let's say we want set username in login, so we can pass it like this: value={{username, setUsername}} and we want to access username in profile.js, so we can pass it like this: value={{username}} */} 
        {/* Here, value represents states we are gonna show in the app.And, we can pass any number of states. */}
        
        {showprofile ? <Profile /> : <Login />}
        {/* Here, it means if showprofile is true, then render the Profile component, else render the Login component. */}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
