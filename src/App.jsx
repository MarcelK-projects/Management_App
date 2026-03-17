import { useState, useRef } from "react";

import Img from "./assets/no-projects.png";
import Project from "./components/Project";
import Input from "./components/Input.jsx";

function App() {
  const [showInput, setShowInput] = useState(false)
  const [showProject, setShowProject] = useState(false);
  const [chosedProject, setChosedProject] = useState(false);
  const [projects, setProjects] = useState([]);
  const name = useRef('');
  const description = useRef('');
  const date = useRef('');
  const task = useRef('');
  
  const handleShowInput = () => {
    setShowInput(true);
    setShowProject(false);
  }

  const cancel = () => {
    setShowInput(false);
  }

  const addProject = () => {
      const newProject = {
        id: Date.now(),
        title: name.current.value ,
        description: description.current.value,
        date: date.current.value,
        tasks: []
      }
      setProjects((prev) => [...prev, newProject])
      /*name.current.value !== '' && projects.push({ title: name.current.value ,
                                                   description: description.current.value,
                                                   date: date.current.value,
                                                   tasks: []
                                                }); */
      setShowInput(false)
  }

  const handleShowProject = (item) => {
    console.log(item.title)
    console.log(item.description)
    console.log(item.date)
    setChosedProject(item);
    setShowProject(true)
    setShowInput(false);
  }

  /*const addTask = () => {
      setTasks((prev) => [...prev, task.current.value])
      console.log(tasks)
  }*/

  const deleteProject = (project) => {
    setProjects(prev => prev.filter((element, index) => index !== projects.indexOf(project)))
    setShowProject(false);
  }

  /*const deleteTask = (task) => {
    console.log("bin in deleteTask")
    console.log(task)
    setTasks(prev => prev.filter(element => element !== task))
  }*/

  const addTask = (currentProject) => {
    console.log(currentProject);
    console.log(task.current.value)
    setProjects(prev => prev.map(p => p === currentProject ? { ...p, tasks: [...p.tasks, task.current.value]} : p))
    console.log(currentProject);
  }

  /*const deleteTask = (project) => {
    setProjects(prev => prev.filter(p => p.id))
  }*/

  //console.log(projects)
  return (
    <div>
      <p className="text-stone-800 my-4">Your Projects</p>
      <button onClick={handleShowInput} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>
      <ul>
        {projects.map((item) => <li><button onClick={() => handleShowProject(item)}>{item.title}</button></li>)}
      </ul>
        <section className="my-8 text-center">
          { showInput ? <Input name={name} description={description} date={date} add={addProject} cancel={cancel}/> :
            showProject ? <Project project={chosedProject} task={task} deleteProject={deleteProject} addTask={addTask} /> :
            <>
            <img src={Img} className="w-16 h-16 object-contain mx-auto" />
            <h1 className=" text-5xl font-bold">No Project are Selected</h1>
            <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
            <button onClick={handleShowInput} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Create new Project</button>
            </>
          }
        </section>
    </div>
  );
}

export default App;


