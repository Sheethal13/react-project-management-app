import noProjectImg from '../assets/no-projects.png'
import Button from './Button';
import './NoProjectSelected.css'

export default function NoProjectSelected({onStartAddProject}){
    return(
        <div className="no-project-selected-div">
            <img src={noProjectImg} alt='an empty project list' className='no-project-selected-img'/>
            <h2 className='no-project-selected-h2 '>No Project Selected</h2>
            <p className='no-project-selected-p1'>Select a project or get started with a new one</p>
            <p className='mt-8'>
                <Button onClick={onStartAddProject}>Create  new project</Button>
            </p>
        </div>
    );
}