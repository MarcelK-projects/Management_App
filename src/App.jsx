import { useState, useRef } from "react";

import Projects from "./components/Project";
import Img from "./assets/no-projects.png";
import Project from "./components/Project";
import Input from "./components/Input.jsx";
import Tasks from "./components/Tasks.jsx";

let projects = [];

function App() {
  const [showInput, setShowInput] = useState(false)
  const [showProject, setShowProject] = useState(false);
  //const [name, setProjectName] = useState();
  const name = useRef('');
  const description = useRef('');
  const date = useRef('');
  //const details = useRef();

  const handleShowInput = () => {
    setShowInput(!showInput);
  }

  /*function handleProjectName(event) {
    setProjectName(event.target.value)
  }*/

  function addProject() {
      name.current.value !== "" && projects.push(name.current.value);
      console.log(description.current.value)
      console.log(date.current.value)
      console.log(projects[0])
      setShowInput(showInput)
  }

  console.log(projects)
  
  return (
    <div>
      <p className="text-stone-800 my-4">Your Projects</p>
      <button onClick={handleShowInput} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>
      <ul>
        {projects.map((item) => <li>{item}</li>)}
      </ul>
        <section className="my-8 text-center">
          { showInput ? <Input name={name} description={description} date={date} onClick={addProject}/> :
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


