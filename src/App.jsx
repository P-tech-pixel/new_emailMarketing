import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import AddProduct from "./components/layout/AddProduct";
import AddCustomer from "./components/layout/AddCustomer";
import SignOut from "./components/auth/SignOut";
import NotFound from "./components/layout/NotFound";
import ProductList from "./components/product/ProductList";
import CustomerList from "./components/customer/CustomerList";
import EditCustomer from "./components/modal/CustomerModal";
import Signin from './components/auth/SignIn';


class App extends Component {
  constructor(props) {
    super(props);
   // this.state = {isAuthenticated: false};
  }

  //login = () => {
  //   this.setState({isAuthenticated : true});
  //}
  //logout = () => {
  //   this.setState({isAuthenticated : false});
  //}

  render() {
    //const {isAuthenticated} = this.state;

    return (
      <Router>
         <Appbar />
       {/* <Appbar isloggedin={isAuthenticated} logout={this.logout} />*/}
        <Switch>
        <Route exact path='/' component={Signin} />
          <Route path="/home" component={Dashboard} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/addcustomer" component={AddCustomer} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/customerlist" component={CustomerList} />
          <Route path="/signout" component={SignOut} />
          <Route path="/editcustomer" component={EditCustomer}/>
        </Switch>
      </Router>
    );
  }
}
export default App;
