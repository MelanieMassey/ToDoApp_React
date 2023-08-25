import axios from "axios"

const apiURL = "http://34.155.87.181:8082/tasks"


// export async function getTasks(){
    
//     // const response = await fetch(apiURL);
//     // const tasks = await response.json();
//     // console.log(tasks);
//     // console.log(typeof tasks)
//     // return tasks;

//     let fetchedTasks = []

//     fetch("http://localhost:8081/tasks")
//     .then(response => response.json())
//     .then( (json) => {fetchedTasks = json})

//     return fetchedTasks
    

// }

export async function getTasks(){
    console.log("getTasks")
    
    return axios.get(apiURL)
    // .then(response=>{
    //     // console.log(response.data)
    //     return response.data
    // })
    
}

export async function deleteTask(taskId){
    return axios.delete(apiURL+"/"+taskId)
    .then(response=>{
        return response.data
    })
}

export async function addTask(newTask){
    return axios.post(apiURL, newTask)
    .then(response=>{
        return response.data
    })
}

export async function updateTask(updatedTask){
    
    return axios.put(apiURL+"/"+updatedTask.id, updatedTask)
    .then(response=>{
        return response.data
    })
}




