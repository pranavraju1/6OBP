import { createContext } from "react";
export const PostContext = createContext({
    posts: [],
    loading: false,
    error: null
})