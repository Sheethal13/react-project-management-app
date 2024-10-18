import './ProjectsSideBar.css'

export default function Button({children,...props}){
    return(
        <button className="side-bar-div-button  md:text-base  hover:bg-stone-600 hover:text-stone-100" {...props}>
            {children}
        </button>
    )
}