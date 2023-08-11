import React from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
// import DeleteButton from "../DeleteButton/DeleteButton";
import "./TaskLine.css";
import { updateTask } from "../../api/apiCalls";



export default function TaskLine(props){

    const clickHandler = () => {
        console.log(props.value.text)
        console.log(props.value.id)
        console.log(props.value.isChecked)
        props.value.isChecked = true
        updateTask({
            "id" : props.value.id,
            "text" : props.value.text,
            "isChecked" : props.value.isChecked

        })
        window.location.reload(false)
    }

    return (
        <div className="taskLine">
            <p className={props.className} onClick={clickHandler}>{props.value.text}</p>
            <DeleteButton id={props.value.id} setTasks={props.setTasks}/>
        </div>
        
    )
}