import { useReducer } from "react"

const initialState = {
    name: "",
    email: "",
    password: "",
    address: {
        line1: "",
        city: "",
        pincode: ""
    }
}


const reducer = (state, action) => {
    switch(action.type){
        case "change/field":{
            const {name, value} = action.payload;
            return {...state, [name]: value}
        }
        case "change/address":{
            const {name, value} = action.payload;
            return {
                ...state,
                address:{
                    ...state.address, [name]: value
                }
            }
        }

        case 'reset':
            return initialState
        default:
            return state
    }
}

const ComplexState = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const changeField = (e) => {
        // const name = e.target.name;
        // const value = e.target.value
        const {name, value} = e.target;
        // dispatch({type: "change/field", payload: {name: name, value: value}})
        dispatch({type: "change/field", payload: {name, value}})
    }

    const changeAddress = (e) => {
        const {name, value} = e.target;
        dispatch({type: "change/address", payload: {name, value}})

    }

    console.log(state)
  return (
    <form>
      <input type="text" name="name" placeholder="enter name" onChange={changeField} />
      <input type="email" name="email" placeholder="enter email" onChange={changeField} />
      <input type="password" name="password" placeholder="enter password" onChange={changeField} />
      <input type="text" name="line1" placeholder="enter line 1" onChange={changeAddress} />
      <input type="text" name="city" placeholder="enter city" onChange={changeAddress}/>
      <input type="number" name="pincode" placeholder="enter pincode" onChange={changeAddress}/>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        <button>Submit</button>
    </form>
  )
}

export default ComplexState
