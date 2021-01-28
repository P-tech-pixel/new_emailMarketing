import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Custom.css";

export default function InitialAppbar() {
  return (
    <div>
      <container>
        <Navbar collapseOnSelect expand="xl" bg="primary" variant="dark">
          <Navbar.Brand className=" Brand " href="/">
            111IT Email Marketing
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="NavItems">
              <NavLink className="nav-link" to="/">
                Sign In
              </NavLink>
              <NavLink className="nav-link" to="/signout">
                Sign Out
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </container>
    </div>
  );
}