import { useRef } from 'react';
import Input from './Input.jsx'
import './NewProject.css'
import Modal from './Modal.jsx';
import './NoProjectSelected.css'

export default function NewProject({onAdd,onCancel}){
    const title=useRef();
    const description=useRef();
    const dueDate=useRef();
    const modal=useRef();

    function handleSave(){
        const enteredTitle=title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredTitle.trim()===''|| enteredDescription.trim()===''|| enteredDueDate.trim()===''){
            modal.current.open();
            return;
        }

        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        })
    }

    return (
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className='no-project-selected-h2'>Invalid Input!</h2>
            <p className='no-project-selected-p1'>Please make sure you entered valid inputs in all fields.</p>
        </Modal>
        <div className='new-project-div'>
            <menu className='new-project-menu '>
                <li><button className='new-project-li-button-cancel hover:text-stone-950' onClick={onCancel}>Cancel</button></li>
                <li><button className='new-project-li-button-save hover:bg-stone-950'onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title"/>
                <Input ref={description} label="Description" textarea />
                <Input ref={dueDate} type="date" label="Due Date"/>
            </div>
        </div>
        </>
     );
}