import NewProject from "./components/NewProject";
import ProjectsSideBar from "./components/ProjectsSideBar";
import './index.css';
import './App.css';
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import { SelectedProject } from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState]=useState({
    selectedProjectID:undefined,
    projects:[],
    tasks:[]
  });

  function handleAddTask(text){
    setProjectState(prevState =>{
      const taskId=Math.random()
      const newTask={
        text:text,
        projectId:prevState.selectedProjectID,
        id:taskId
      };
      return {
        ...prevState,
        tasks:[...prevState.tasks,newTask]
      };
    });
  }

  function handleDeleteTask(id){
    setProjectState(prevState =>{
      return {
        ...prevState,
        tasks:prevState.tasks.filter((task) => task.id!==id)
      };
    });
  }

  function handleStartAddProject(){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectID:null
      };
    });
  };

  function handleSelectProject(id){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectID:id
      };
    });
  }

  function handleAddProject(newProjectData){
    setProjectState(prevState =>{
      const newId=Math.random()
      const newProject={
        ...newProjectData,
        id:newId
      };
      return {
        ...prevState,
        selectedProjectID:undefined,
        projects:[...prevState.projects,newProject]
      };
    });
  };

  function handleCancelAddProject(){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectID:undefined
      };
    });
  }

  function handleDeleteProject(){
    setProjectState(prevState =>{
      return {
        ...prevState,
        selectedProjectID:undefined,
        projects:prevState.projects.filter((project) => project.id!==prevState.selectedProjectID)
      };
    });
  }

  const selectedProject = projectState.projects.find(project => project.id===projectState.selectedProjectID)
  console.log(selectedProject);
  let content =<SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks}/> ;

  if(projectState.selectedProjectID===null){
    content=<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if(projectState.selectedProjectID===undefined){
    content=<NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="App-main">
      <ProjectsSideBar onStartAddProject={handleStartAddProject} projects={projectState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectState.selectedProjectID}/>
      {content}
    </main>
  );
}

export default App;
