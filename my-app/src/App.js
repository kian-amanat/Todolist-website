import "./App.css";
import React, { useState } from "react";
import { InputField } from "./input.jsx";
import { SignInPage } from "./sign.jsx";

function App() {
  let [access, setAccess] = useState(false);
  return (
    <div className="App">
      {/* {access ? <InputField /> : <SignInPage setAccess={setAccess} />} */}
      {/* <InputField /> */}
      <SignInPage setAccess={setAccess} />
    </div>
  );
}

export default App;
