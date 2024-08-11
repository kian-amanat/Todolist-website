import "./App.css";
import React, { useState } from "react";
import { InputField } from "./input.jsx";
import { SignInPage } from "./sign.jsx";
import { LogInPage } from "./logIn.jsx";

function App() {
  let [access, setAccess] = useState(0);
  let [logIn, setLogIn] = useState(false);
  return (
    <div className="App">
      {/* {access === 0 ? (
        <LogInPage setAccess={setAccess} />
      ) : access === 1 ? (
        <SignInPage setAccess={setAccess} />
      ) : access === 2 ? (
        <InputField /> // Replace with your actual input component
      ) : null} */}
      {access === 1 ? <InputField /> : <LogInPage setAccess={setAccess} />}
    </div>
  );
}

export default App;
