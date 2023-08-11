import React from "react";
import "./Button.css";
// import { addTask } from "../../api/apiCalls";
// import { deleteTask } from "../../api/apiCalls";

export default function Button(props){

    // let inputValue = ""
    

    // const clickHandler = () => {
    //     inputValue = document.getElementById("input").value
    //     console.log(inputValue)
    //     let newTask = {
    //         "id": "",
    //         "text": inputValue,
    //         "isChecked": false
    //     }
    //     console.log(newTask)
    //     switch(props.id) {
    //         case "addButton":
    //             addTask(newTask)
    //             window.location.reload(false)
    //           // code block
    //           break;
    //         // case y:
    //         //   // code block
    //         //   break;
    //         default:
    //           // code block
    //       }
    // }

    return(
        <button id={props.id} className="button" type="button" onClick={props.onClick}>{props.text}</button>
    )
}