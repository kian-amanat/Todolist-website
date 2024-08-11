import "./signIn.css"
import React, { useRef, useState } from 'react';
import { getUserData , createUserData } from "./apiUser.js";
import { createdUserData } from "./createUser.js";


function SignInPage({setAccess}){
   const [fill , setFill] = useState(false)


    let firstName = useRef(null)
    let lastName = useRef(null)

    function changePage(){
        setAccess(2)
    }


    async  function SubmitSignIn(){
        let first = firstName.current.value;
        let last = lastName.current.value;
      if (first && last) {
    await createdUserData(firstName , lastName)
            setAccess(true) 
      }else{
        setFill(true)
      }
        }

      
  
    
    return(
        <>
<h1 className="title">Todo List</h1>

        <div className="card">
        <input
          type="text"
          ref={firstName}
          placeholder="name"
          className="nameInput"
        />
        <input
          type="text"
          ref={lastName}
          placeholder="last name"
          className="lastNameInput"
        />
        <button onClick={SubmitSignIn}>Submit</button>
        <button className="logIn" onClick={changePage}>Log In</button>
      </div>
{fill ? <h1 className="para-error"> Fill The Blanks</h1> : "" }
</>

    )
   

}


export {SignInPage} ;