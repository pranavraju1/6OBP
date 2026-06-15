import { createContext, useReducer } from "react"

export const CounterContext = createContext();

const initialState = {
    count : 0
} 

const countReducer = (state, action) => {
    switch(action.type){
        case 'increase':
            return {...state, count: state.count + 1}
        case 'decrement':
            return {...state, count: state.count - 1}
        case 'reset':
            return initialState;
        default: 
            return state;
    }
}


export const CounterProvider = ({children}) => {
    const [state, dispatch] = useReducer(countReducer, initialState)
  return (
    <CounterContext.Provider value={{state, dispatch}} >
      {children}
    </CounterContext.Provider>
  )
}


