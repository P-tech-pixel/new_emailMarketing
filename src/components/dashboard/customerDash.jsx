import React, { Component } from "react";
import { Table, Button, Form, Modal, FormControl } from "react-bootstrap";
import axios from "axios";
import CustomerCheckbox from "../SelectionandSend/CustomerCheckbox"
import SelectAllCheckbox from "../SelectionandSend/selectallcheckbox"


export default class CustomerList extends Component {
  state = {
    customers: [],
    selectedCustomer: [],
    isChecked : false


  };
  async componentDidMount() {
    let results = await axios
      .get("http://13.55.254.225/apis/customers/")  // if i use the server location then, put response.data.results in line 17  VERY IMPORTANT
      .then((response) => {
        console.log(response)

        this.setState({ customers: response.data.results });
      });
  }

  onChange(e, value){
    console.log(e.target.checked)
    if(e.target.checked){
      this.setState({
        selectedCustomer: this.state.selectedCustomer.concat([value])
      })
    }
    else {
      this.setState({
        selectedCustomer
        
        : this.state.selectedCustomer.filter(function(val){return  val!==value})
      })
    }
    console.log(this.state.selectedCustomer)
  }

   render() {
    let data = this.state.customers.map((list) => {
      return (
        <tr key={list.id}>
        <td><input 
                       type="checkbox"
                       name="isChecked"
                       id= {list.id}
                       onChange={ (e) => this.onChange(e, list)}
                ></input></td>
          <td>{list.first_name}</td>
          <td>{list.last_name}</td>
          <td>{list.email}</td>
        </tr>
      );
    });

    let selected = this.state.selectedCustomer.map((item) => {
      return (
        <tr key={item.id}>
          <td>
                {item.id}
          </td>
        </tr>
      )
    })

    return (
      <div className="dashboard container">
        <br></br>
        <h2>Customer List</h2>
        <br></br>
        <form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th><SelectAllCheckbox /></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </Table>
          <br></br>
        </form>

        <Table>
          <tbody>
                {selected}
          </tbody>

        </Table> 

      </div>
    );
  }
}
