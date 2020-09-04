import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './images/Whisel.png'

function Navigation({ user, logout }) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand> <img className="nav-logo" src={logo} alt="Logo"/>  </Navbar.Brand>
      <Navbar.Brand href="/landingpage">Find a coach</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {user ? (
            <>
              <Nav className="mr-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Nav>
              <Link className="nav-link" to="/item/add">
                Create Profile
              </Link>
              <Nav.Link href="#user">
                {user.firstname} {user.lastname}
              </Nav.Link>
              <Link to="/logout" onClick={logout} className="nav-link">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;