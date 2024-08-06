import "./input.css"
import React, { useRef, useState , forwardRef } from 'react';
import { getfetchData , createfetchData , removeFetchData  } from "./api.js";
import { handleChange , updatefetchData } from './createData.js';



const InputField = forwardRef((firstName, ref) => {
    const [inputs, setInputs] = useState([]);
    const [des, setDes] = useState([]);
    const [error, setError] = useState(false);
    const inputVal = useRef(null);
    const descriptionVal = useRef(null);
    const isComplete = useRef(false);
    let count = 0 

    async function onChangeHandler() {
        await handleChange(inputVal, descriptionVal, setDes, setInputs, isComplete, setError);
    }

    async function removeTaskEvent() {
        let div = document.querySelector(".list");
        let removedDiv = div.remove();
        await removeFetchData(40);
    }

    async function completeTaskEvent() {
        count++
        if(count / 2 === 1 ){
            isComplete.current = false;
            await updatefetchData( inputVal, descriptionVal , isComplete )
            console.log(inputVal, descriptionVal , isComplete)
            
        }else{
            isComplete.current = true;
            await updatefetchData(61 , inputVal, descriptionVal , isComplete )
        }
        console.log(count / 2 === 1)
   
    }

    return (
        <>
            <h1 className="title"> Todo List</h1>
            <div className='input'>
                <input
                    type="text"
                    ref={inputVal}
                    placeholder={error ? "Fill the blank" : "Type something... "}
                    className={error ? 'error' : ''}
                />

                <input
                    type="text"
                    ref={descriptionVal}
                    placeholder={error ? "Fill the blank" : "Type your description... "}
                    className={error ? 'error' : ''}
                />

                <button onClick={onChangeHandler}>Submit</button>

                {inputs.map((input, index) => (
                    <div key={index} className='list'>
                        <h1>{input}</h1>
                        {des[index] && (
                            <div className='list2'>
                                <p>{des[index]}</p>
                            </div>
                        )}
                        <button onClick={removeTaskEvent}>Remove</button>
                        <input ref={isComplete} type="checkbox" onClick={completeTaskEvent} />
                    </div>
                ))}
            </div>
        </>
    );
});

export { InputField };
