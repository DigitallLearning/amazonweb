import { NavLink } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './navbar.css'
import Button from 'react-bootstrap/Button';
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/electronics">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/mobile">Mobile</NavLink>
            </li>
            <li>
              <NavLink to="/laptop">Laptop</NavLink>
            </li>
            <li>
              <NavLink to="/upload">Upload</NavLink>
            </li>
            <li><Button variant="outline-primary">Login</Button>{' '}</li>
            <li><Button variant="outline-secondary">Registration</Button>{' '}</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav