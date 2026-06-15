import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../redux/todoAction";


const Todo = () => {
    
    
    const {todo} = useSelector(state=>state) 
        
    const [taskInput, setTaskInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(taskInput));
    }

  return (
    <div>
        <form action="">
            <input type="text" placeholder='enter todo' value={taskInput} onChange={(e)=>setTaskInput(e.target.value)} />
            <button type='submit'onClick={handleSubmit} >Add Todo</button>
        </form>
      <ul>
        {todo.map(item=>(
            <li key={item.id}>{item.task}  <button onClick={()=>{
                dispatch(editTodo({id:item.id, taskInput }))
            }}>Edit Todo</button>  </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
