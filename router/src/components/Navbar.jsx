import { Link, NavLink } from "react-router"


const Navbar = () => {
    let stylesObj = {
            display: "flex",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }

    const activeNav = ({isActive}) => {
       return {
                textDecoration: isActive ? "none" : "underlined",
                fontWeight: isActive ? "bold" : "normal"
            }
    }
  return (
    <div>
      <nav style={stylesObj}>
        <NavLink to="/" style={activeNav} >Home</NavLink>
        <br /> 
        <NavLink to="/contact" style={activeNav} >Contact</NavLink>
        <br />
        <NavLink to="/about" style={activeNav} >About</NavLink>
      </nav>
    </div>
  )
}

export default Navbar

// Navlink behaves like link but the only difference is that it adds active class when that route is selected