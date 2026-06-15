import { useReducer } from "react";

const initialState = {
    name:"",
    email:"",
    course:"React",
    isSubmitted:false
}

const reducer = (state, action) => {
    switch(action.type){
        case "change":
            return {...state, [action.field]:action.payload}

        case "submit":
           return {...state, isSubmitted: true};
        case "reset":
            return initialState
        default:
            state
    }
}

const UserForm = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: "submit"})
    }

    const handleChange = (e) =>{
        // console.log(e.target.name , e.target.value)
        dispatch({
            type: "change",
            field : e.target.name,
            payload: e.target.value
        })
    }

  return (
    <>
        <form>
        <input type="text" name="name" placeholder="enter name" onChange={handleChange} />
        <input type="email" name="email" placeholder="enter email" onChange={handleChange}/>
        <select name="course" onChange={handleChange}>
            <option value="React">React</option>
            <option value="JS">JS</option>
            <option value="Node">Node</option>
        </select>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        <button onClick={()=>dispatch({type: "reset"})} >Reset</button>
        </form>

        {/* <h3>issubmited: {state.isSubmitted}</h3> */}
    </>
  )
}

export default UserForm
