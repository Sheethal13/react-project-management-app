import { forwardRef } from 'react';
import './Input.css'

const Input = forwardRef(function Input({label,textarea,...props},ref){
    const classes="input-input focus:outline-none focus:border-stone-600"
    return (
        <p className="input-p">
            <label className='input-label'>
                {label}
            </label>
            {textarea?<textarea ref={ref} className={classes} {...props}/>:<input ref={ref} className={classes} {...props}/>}
        </p>
    );
});

export default Input;