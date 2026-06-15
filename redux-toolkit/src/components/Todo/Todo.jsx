import { useState } from "react"
import { addTodo, deleteTodo } from "./todoSlice"
import { useDispatch, useSelector } from "react-redux"


const Todo = () => {
    const todos = useSelector(state=>state.todos) 
    
    const dispatch = useDispatch();
    const [task, setTask] = useState("")

    const handleAddTodo = () => {
        let obj = {
            id: Date.now(),
            task: task
        }
        dispatch(addTodo(obj));

    }


    
    return (
    <div>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleAddTodo}>AddTodo</button>
        <ul>
            {todos.map(item=><li key={item.id}>{item.task} <button onClick={()=>dispatch(deleteTodo(item.id))}>Delete Todo</button></li>)}
        </ul>  
    </div>
  )
}

export default Todo
