import { React, useState } from 'react'
import './CheckBox.css';

function CheckBox ({todo, onClick}) {
    const [isChecked, setIsChecked] = useState();
    // console.log(`CheckBox - ${todo.id}`);
    // console.log(`CheckBox - ${isChecked}`);

    function handleChange(event){
        setIsChecked(event.target.checked)
        onClick(todo.id)
        console.log(`checked - ${todo.id}`)
    }
    return (
        <>
            <input type='checkbox' 
                checked={isChecked} onChange={handleChange} 
                className={isChecked?"checked":""} 
                id={todo.id}>
            </input>
        </>
    )
}

export default CheckBox;