import React, { useEffect, useState } from 'react';

export default function Controller(){

    const [tasks, setTasks] = useState()

    useEffect(()=>{
        getTasks()
    }, [])

    function getTasks(){
        console.log("getTasks started")
        fetch("http://localhost:8081/tasks")
        .then(response => response.json())
        .then( (json) => setTasks(json))

        console.log(tasks)
        // const response = await fetch("http://localhost:8081/tasks")
        // const tasks = await response.json()
        // setTasks(tasks)
        
    }

    

    return(
        <div>
        </div>
    )

    

}