import { forwardRef,useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
import '../index.css'
import './Modal.css'
import Button from "./Button";

const Modal = forwardRef(function Modal({children,buttonCaption},ref){
    const dialog=useRef();
    useImperativeHandle(ref,() => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 modal-dialog">
            {children}
            <form method="dialog" className="modal-dialog-form">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
});

export default Modal;