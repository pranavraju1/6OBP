import { createContext } from "react";

// createContext returns an obj which you are going to use in your components
// inside createContext you can specify the initial value
// this value will come into play when nothing is specified inside your Provider
export const UserContext = createContext(null);