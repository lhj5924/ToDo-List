import { React, useState } from 'react';
import CheckBox from './CheckBox';
import DeleteBtn from './DeleteBtn';
import todoList from '../../static/todoList';
import Todo from './Todo';
import './TodoContainer.css';

function TodoContainer () {
    
    let [newTodo, setNewTodo] = useState('')
    let [newTodoList, setNewTodoList] = useState(todoList)

    // 할일 추가하기
    const handleButtonClick = (event) => {
        event.preventDefault(event);
        const todo = {
            id : newTodoList.length+1,
            content : newTodo,
            createdAt: new Date().toISOString(),
        }
        setNewTodoList([...newTodoList, todo])
        setNewTodo('');
    }

    // 텍스트 더블클릭 시 수정하기
    let [editable, setEditable] = useState(false)

      // function to get the value of the edit input and set the new state
//   function handleEditInputChange(e) {
//     // set the new state value to what's currently in the edit input box
//     setCurrentTodo({ ...currentTodo, text: e.target.value });
//     console.log(currentTodo);
//   }

    const handleOnDoubleClick = (event) => {
        event.preventDefault(event);
            setEditable(!editable)
    }

    const handleKeyDown = (event) => {
        event.preventDefault(event);
        if(event.key === "Enter"){
            setEditable(!editable)
        }
    }

    // 할일 추가하기
    const handleChangeNewTodo = (event) => {
      event.preventDefault();
      setNewTodo(event.target.value)
    };

    // DeleteBtn - 삭제 버튼 클릭 시 삭제 기능
    const onRemove = id => {
        console.log(`delete todo id ${id}`);
        setNewTodoList(newTodoList.filter(todo => todo.id !== id));
      };

    return (
        <>
                <ul className="todos">
                    {newTodoList.map((todo) =>
                    <>
                       <li className="todo">
                        <CheckBox todo={todo}/>
                        <Todo todo={todo} />
                        <DeleteBtn todo={todo} onClick={onRemove}/>   
                       </li>
                    </>
                    )}
                </ul>
                <div className='newTodoBox'>
                    <input
                    type="text"
                    placeholder="write new todo here"
                    className="newTodoBox__input--newTodo"
                    onChange={handleChangeNewTodo}
                    value={newTodo}
                    // contentEditable="false"
                    // onDoubleClick={handleOnDoubleClick}
                    // onKeyDown={handleKeyDown}
                    ></input>

                    <button 
                    className='newTodoBox__submitButton' 
                    onClick={handleButtonClick}>
                    할일 입력하기
                    </button>
                </div>
        </>
    )
}

export default TodoContainer;