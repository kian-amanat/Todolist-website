import "./signIn.css"
import React, { useRef, useState } from 'react';
import { logInUserData } from "./createUser.js";

let changePage = false;
function LogInPage({setAccess} , {}){
    const [fill , setFill] = useState(false)
    const [tasks, setTasks] = useState([]);
    let firstName = useRef(null)
    let lastName = useRef(null)




    async  function SubmitSignIn(){
      
        let first = firstName.current.value;
        let last = lastName.current.value;
      if (first && last) {
        let changePage = false;
        changePage = await logInUserData(firstName, lastName  );

          {changePage ? setAccess(1) : setAccess(0)} 
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
        <div>
        <button onClick={SubmitSignIn}>Log In</button>
        <button onClick={changePage}>Create Account</button>
        </div>
        

      
      </div>
{fill ? <h1 className="para-error"> Fill The Blanks</h1> : "" }
</>

    )
   

}

export{LogInPage }