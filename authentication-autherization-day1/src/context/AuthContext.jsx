import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext(null);

export function AuthProvider({children}){
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
        const storedTokken = localStorage.getItem("authToken");
        const storedUser = localStorage.getItem("authUser");

        if(storedTokken && storedUser){
            setToken(storedTokken)
            setUser(JSON.parse(storedUser))
        }
        setLoading(false)
  },[]);

  function login(email, rememberMe = false){
    const fakeToken = "fake-jwt-token";
    const userData = {email};
    setUser(userData);
    setToken(fakeToken)
    if(rememberMe){
      localStorage.setItem("authToken", fakeToken)
      localStorage.setItem('authUser', JSON.stringify({email}))
    }else{
      localStorage.removeItem("authTokens")
      localStorage.removeItem("authUser")
    }
  }

  function logout(){
    setUser(null)
    setToken(null)
    localStorage.removeItem("authToken")
    localStorage.removeItem("authUser")
  }

  const value = {
    user,
    token,
    loading,
    login,
    logout,

    isAuthticated: !!token
    // "fake-jwt-token" -> false -> true 
    // null -> true -> false 
  };

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>

}


// creating a custom hook that can be used inside your component as useAuth()
export function useAuth(){
  const ctx = useContext(AuthContext);
  if(!ctx){
    throw new Error("useAuth must be used within the Provider")
  }
  return ctx;
}
