import { ADDTODO, EDITTODO } from "./todoAction";

const initialState = []

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADDTODO:
            {
                let obj = {id: Date.now(), task: action.payload}
                return [...state, obj]
            }
        case EDITTODO:
            {
                return state.map(item => 
                item.id === action.payload.id 
                    ? { id: item.id, task: action.payload.taskInput } 
                    : item
                );
            }

        default:
            return state
    }
}

export default todoReducer;