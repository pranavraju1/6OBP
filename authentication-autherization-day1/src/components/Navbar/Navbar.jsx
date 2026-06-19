import { Link } from "react-router"
import './styles.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">AuthApp</div>

        <nav className="nav-links">
            <Link to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Login</Link>
            <Link to="/signup" className={({ isActive }) => (isActive ? "active" : "")}>Signup</Link>
            <Link to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>Profile</Link>
            <Link to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>Dashboard</Link>
        </nav>
    </header>
  )
}

export default Navbar
