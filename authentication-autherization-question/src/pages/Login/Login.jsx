import { useState } from "react"
import './styles.css'


const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
        setError("Email and password are required");
        return;
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

                {error && <p className="error">{error}</p>}

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
