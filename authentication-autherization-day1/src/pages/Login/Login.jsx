import { useEffect, useState } from "react"
import './styles.css'
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router";


const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate();
    const {login, isAuthticated} = useAuth();
    console.log(login)
    console.log(isAuthticated)





    useEffect(()=>{
        const savedUser = localStorage.getItem("authUser");
        if(savedUser){
            const user = JSON.parse(savedUser);
            setEmail(user.email);
            setRememberMe(true);
        }
    },[])


    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
        setError("Email and password are required");
        return;
        }

        const fakeToken = "fake-jwt-token";
        if(rememberMe){
            localStorage.setItem("authToken", fakeToken)
            localStorage.setItem('authUser', JSON.stringify({email}))
        }else{
            localStorage.removeItem("authTokens")
            localStorage.removeItem("authUser")
        }

        console.log("Logging in with", { email, password });
        setError("");
    }


    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h1>Login</h1>

                <label>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <label style={{display: "flex", flexDirection:"row", gap:"0.5rem"}}>
                    <input 
                        style={{marginTop: 0}} 
                        type="checkbox" 
                        onChange={(e) => setRememberMe(e.target.checked)} 
                        checked={rememberMe}
                    />
                    Remeber Me
                </label>



                {error && <p className="error">{error}</p>}

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
