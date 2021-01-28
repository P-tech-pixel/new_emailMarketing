import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Custom.css";


class NavBar  extends React.Component {
  constructor(props){
    super(props);
    this.state = {isAuthenticated: false}
  
  }
  login = () => {
     this.setState({isAuthenticated : true});
  }

  render(){
     const {isAuthenticated} = this.state;
    
    
    return(      
      <div>
      <container>
        <Navbar collapseOnSelect expand="xl" bg="primary" variant="dark">
          <Navbar.Brand className=" Brand " href="/">
            111IT Email Marketing
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="NavItems">
             { !isAuthenticated && (<NavLink className="nav-link" to="/home">
                Home
              </NavLink>)} 
              { isAuthenticated && (<NavLink className="nav-link" to="/addproduct">
                Add Product
              </NavLink>)}
              { isAuthenticated && (<NavLink className="nav-link" to="/productlist">
                Product List
              </NavLink>)}
              { isAuthenticated && (<NavLink className="nav-link" to="/addcustomer">
                Add Customer
              </NavLink>)}
              { isAuthenticated && (<NavLink className="nav-link" to="/customerlist">
                Customer List
              </NavLink>)}
              { isAuthenticated && (<NavLink className="nav-link" to="/signout">
                Sign Out
              </NavLink>)}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </container>
    </div>

    )
  }
}
export default NavBar

