// action type
export const ADDTODO = "ADDTODO";
export const EDITTODO = "EDITTODO";


// action creator
export const addTodo = (payload) => {
    return {type: ADDTODO, payload}
}

// payload = {id:123123, updatedTask:"asdasdd"}
export const editTodo = (payload) => {
    return {type: EDITTODO, payload}
}

