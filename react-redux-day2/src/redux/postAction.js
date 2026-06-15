export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

// action creators
const fetchPostRequest = () => ({type: FETCH_POSTS_REQUEST});
const fetchPostSuccess = (posts) => ({type: FETCH_POSTS_SUCCESS, payload:posts});
const fetchPostError = (error) => ({type: FETCH_POSTS_ERROR, payload:error});

// thunk action
export const fetchPosts = () => {
    return async(dispatch) => {
        dispatch(fetchPostRequest());
        
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            // console.log(data)
            dispatch(fetchPostSuccess(data))
        
        }catch(err){
            dispatch(fetchPostError(err))
        }
    }
}
