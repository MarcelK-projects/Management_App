//let tasks = [];
import { useState, useRef } from 'react'

export default function Project({ project, task, deleteProject, addTask }) {
    //const allTasks = useRef([]);
    //const [tasks, setTasks] = useState([]);
    console.log("bin in Project: " + project.tasks)
    
    /*const addTask = () => {
      console.log(project.tasks)
      //setTasks((prev) => [...prev, task.current.value])
      //project.tasks.push(tasks)
      //console.log(project.tasks[0])
      //allTasks.current = tasks 
    }*/

    const deleteTask = (delTask) => {
      console.log("bin in deleteTask")
      console.log(delTask)
      setTasks(prev => prev.filter((element, index) => index !== delTask))
      //allTasks.current = task
    }


    return(
        <>
          <h1>{project.title}</h1>
          <button onClick={() => deleteProject(project)}>Delete</button>
          <p>{project.date}</p>
          <p>{project.description}</p>
          <input ref={task} type="text" />
          <button onClick={() => addTask(project)}>add task</button>
          <ul className="center">
            {project.tasks.map((item, index) => 
            <>
              <li key={index}>{item}
                <button onClick={() => deleteTask(index)}>clear</button>
              </li>
              
            </>)}
          </ul>
        </>
    )
}
