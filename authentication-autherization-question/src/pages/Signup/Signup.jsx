import { useState } from "react"
import './styles.css'

function validatePassword(pwd) {
     const errors = [];
    //  if (pwd.length < 8) errors.push("At least 8 characters");
    //  if (!/[0-9]/.test(pwd)) errors.push("At least one number");
    //  if (!/[!@#$%^&*]/.test(pwd)) errors.push("At least one special character (!@#$%^&*)");
  return errors;
}

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordErrors, setPasswordErrors] = useState([]);
    const [error, setError] = useState("");

    function handlePasswordChange(e) {
        const value = e.target.value;
        setPassword(value);
        setPasswordErrors(validatePassword(value));
    }


    function handleSubmit(e) {
      e.preventDefault();
      if (!email || !password || !confirmPassword) {
        setError("All fields are required");
        return;
      }
      const pwdErrors = validatePassword(password);
      if (pwdErrors.length > 0) {
        setError("Password does not meet requirements");
        setPasswordErrors(pwdErrors);
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      console.log("Signing up", { email, password });
      setError("");
    }




  return (
    <div className="auth-container">
        <form className="auth-form" onSubmit={handleSubmit}>
            <h1>Create Account</h1>

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
                    onChange={handlePasswordChange}
                />
            </label>

            {passwordErrors.length > 0 && (
                <ul className="password-errors">
                    {passwordErrors.map((err) => (
                        <li key={err}>{err}</li>
                    ))}
                </ul>
            )}

            <label>
                Confirm Password
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </label>

            {error && <p className="error">{error}</p>}

            <button type="submit">Create Account</button>
        </form>
    </div>
  )
}

export default Signup
