import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrashCan } from '@fortawesome/free-solid-svg-icons';
import "./DeleteButton.css"
import { deleteTask } from "../../api/apiCalls";

export default function DeleteButton(props){

    const icon = <FontAwesomeIcon icon={faTrashCan} />

    
    // let id = "deleteButton"+props.id
    // let button = document.getElementById(id)
    // console.log(button)
    // button.addEventListener("click", deleteTasks(props.id))

    const clickHandler = () => {
        deleteTask(props.id)
        // getTasks().then(response => props.setTasks(response.data))
        window.location.reload(false)
    }
    

    return(
        <div className="deleteButton" onClick={clickHandler}>
            {icon}
        </div>
        
    )
}