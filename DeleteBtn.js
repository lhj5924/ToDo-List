import { React} from 'react';
import './DeleteBtn.css';

// fontawsome
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

// library.add(fab, faSquareCheck)

function DeleteBtn ({todo, onClick}) {
   

    // 구현기능 : todoBox의 delete 버튼을 클릭하면 해당 버튼이 위치한 todoBox의 todo.id 를 받아와서,
    // filter 를 사용해서 해당 todo.id 를 제외한 todo 리스트를 newTodoList 로 다시 map하기
    // => TodoContainer 에 넣어야겠다...
    
    function handleOnClick() {
        console.log(`DeleteBtn - ${todo.id}`);
        onClick(todo.id);
    }

    return (
        <span>
            <button 
            onClick={handleOnClick}
            className="delete__btn"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
        </span>
    )
}

export default DeleteBtn;