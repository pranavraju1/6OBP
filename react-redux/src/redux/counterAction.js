// action types
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENTBY = "INCREMENTBY";

// actionCreators
export const increment = () =>{
    return {type: INCREMENT}
}
export const decrement = () =>{
    return {type: DECREMENT}
}
export const incrementBy = (payload) =>{
    return {type: INCREMENTBY, payload}
}
