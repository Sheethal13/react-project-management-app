import Button from './Button'
import './ProjectsSideBar.css'

export default function ProjectsSideBar({onStartAddProject,projects,onSelectProject,selectedProjectId}){
    console.log(projects)
    return(
        <aside className="side-bar-aside md:w-72 ">
            <h2 className=" md:text-xl side-bar-h2">Your Projects</h2>
            <div>
                <Button onClick={() => onStartAddProject(selectedProjectId)}>+ Add Project</Button>
            </div>
            <ul className='mt-8'>
                {projects.map(project => {
                    let cssCls="side-bar-ul-li-button hover:text-stone-200 hover:bg-stone-800";

                    if(project.id===selectedProjectId){
                        cssCls+=" bg-stone-800 text-stone-200"
                    }
                    else{
                        cssCls+=" text-stone-400"
                    }

                return (<li key={project.id}>
                    <button onClick={() => onSelectProject(project.id)} className={cssCls}>{project.title}</button>
                </li>)
                }
                )}
            </ul>
        </aside>
    )
}