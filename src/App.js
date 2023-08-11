
import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { addTask, getTasks } from './api/apiCalls';
// import Controller from './components/Controller/Controller';
import TaskLine from './components/TaskLine/TaskLine';
import Button from './components/Button/Button';

function App() {

  const [tasks, setTasks] = useState([])
  const [inputValue, setInputValue] = useState("")
  const onInput = (e) => setInputValue(e.target.value);

  useEffect(()=>{
    // setTasks(getTasks())
    getTasks().then(response => setTasks(response.data))
  }, [])


  // function getTasks(){
  //   console.log("getTasks started")
  //   fetch("http://localhost:8081/tasks")
  //   .then(response => response.json())
  //   .then( (json) => setTasks(json))
  //   console.log(tasks)  
  // }

  let nbTasksToBeDone = 0;
  tasks.forEach(task => {
    if(task.isChecked === false) {
      nbTasksToBeDone++
    }
  })

  
    
  
  const clickHandler = (event) => {
      let buttonId = event.target.id
      // let inputValue;
      
      switch(buttonId) {
        case "addButton":
            setInputValue(document.getElementById("input").value)
            console.log(inputValue)
            let newTask = {
                "id": "",
                "text": inputValue,
                "isChecked": false
            }
            console.log(newTask)
            addTask(newTask)
            window.location.reload(false)
          break;
        case "todoButton":
          let todoTasks = tasks.filter(task => task.isChecked === false)
          // console.log(filteredTasks)
          setTasks(todoTasks)
          // window.location.reload(false)
          break;
        case "doneButton":
          let doneTasks = tasks.filter(task => task.isChecked === true)
          // console.log(filteredTasks)
          setTasks(doneTasks)
          // window.location.reload(false)
          break;
        case "allButton":
          
          getTasks().then(response => setTasks(response.data))
          // window.location.reload(false)
          break;
        case "searchButton":
          setInputValue(document.getElementById("input").value.toLowerCase())
          console.log(inputValue)
          let searchedTasks = tasks.filter(task => task.text.toLowerCase().includes(inputValue))
          setTasks(searchedTasks)
          break;
        case "clearButton":
          console.log("clear")
          console.log(document.getElementById("input").value.toLowerCase())
          setInputValue("")
          console.log(inputValue)
          break;
        default:
          // code block
      }
  }


  return (
    <div className="App">
      <h1>To do list</h1>
      <div className='buttonsSection'>
        <Button id="allButton" text="Toutes" onClick={clickHandler}/>
        <Button id="todoButton" text="A faire" onClick={clickHandler}/>
        <Button id="doneButton" text="Finies" onClick={clickHandler}/>
        <p className='status'>{nbTasksToBeDone} tâches à faire</p>
        <Button id="addButton" text="Ajouter" onClick={clickHandler}/>
        <Button id="searchButton" text="Chercher" onClick={clickHandler}/>

      </div>
      <div className='tasks'>
        {tasks.map((element)=> {
          return <TaskLine className={element.isChecked ? "doneTask" : ""} value={element} setTasks={setTasks}/>
        })}
      </div>
      <div className='inputSection'>
        <input id="input" type="text" value={inputValue} placeholder='Nouvelle tâche' onInput={onInput}/>
        <Button id="clearButton" text="Effacer"  onClick={clickHandler}/>
      </div>
      
      

    </div>
  );
}

export default App;
