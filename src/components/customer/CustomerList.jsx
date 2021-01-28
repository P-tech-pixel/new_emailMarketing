import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import {
    Table,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import axios from 'axios';

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://13.55.254.225/apis/customers/',
            customers: [],
            filteredCustomers: [],
            newCustomerData: {
                first_name: '',
                last_name: '',
                email: '',
                mobile_number: '',
                customer_address: '',
                checked: false
                
            },
            searchData: {
                name: ''
            },
            editCustomerData: {
                id: '',
                first_name: '',
                last_name: '',
                email: '',
                mobile_number: '',
                customer_address: ''
            },
            newCustomerModal: false,
            editCustomerModal: false,
        }

        this.temp = '123'
        
    }
    componentDidMount() {
      this._refreshCustomers();
    }

    toggleNewCustomerModal() {
        this.setState({
            newCustomerModal: !this.state.newCustomerModal
        });
    }

    addCustomer() {
        axios.post(this.state.url, this.state.newCustomerData).then(res => {
            let { customers } = this.state;
            customers.push(res.data.result);
            this.setState({ customers, newCustomerModal: false, newCustomerData: {
              first_name: '',
              last_name: '',
              email: '',
              mobile_number: '',
              customer_address: '',
              checked: false
            } });
        });
    }
    toggleEditCustomerModal() {
        this.setState({
            editCustomerModal: !this.state.editCustomerModal
        });
    }
    editCustomer(id, first_name, last_name, email, mobile_number, customer_address) {
        this.setState({
            editCustomerData: { id, first_name, last_name, email, mobile_number, customer_address},
            editCustomerModal: !this.state.editCustomerModal
        });
    }
    updateCustomer() {
        let { first_name, last_name, email, mobile_number, customer_address} = this.state.editCustomerData;
        axios
            .put('http://13.55.254.225/apis/customer' + this.state.editCustomerData.id, {
                first_name,
                last_name,
                email,
                mobile_number,
                customer_address
            })
            .then(response => {
                this._refreshCustomers();
                this.setState({editCustomerModal: false, editCustomerData: {id:'', first_name:'', last_name:'', email:'', mobile_number: '', customer_address:''}})
            });
    }

    deleteCustomer(id) {
        axios.delete('http://13.55.254.225/apis/customer' + id).then(response => {
            this._refreshCustomers();
  });
    }
    _refreshCustomers() {
         axios.get(this.state.url).then(res => {
            this.setState({
                customers: res.data.results
            });
        });
    }
    render() {

        let data = this.state.customers.map((list) => {
          return (
            <tr key={list.id}>
              <td>{list.first_name}</td>
              <td>{list.last_name}</td>
              <td>{list.email}</td>
              <td>{list.mobile_number}</td>
              <td>{list.customer_address}</td>
              <td>
                <Button variant="success" size="sm" className="mr-2" 
                onClick={this.editCustomer.bind(this, list.id, list.first_name, list.last_name, list.email, list.mobile_number, list.customer_address)}>
                  Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => this.deleteCustomer(list.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        }); 

        // main render return ....
        return (
          <div>

<div className="dashboard container">
        <br></br>
        <h2>Customer List</h2>
        <br></br>
        <form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </Table>
          <br></br>
        </form>
      </div>
                <Modal
                    isOpen={this.state.editCustomerModal}
                    toggle={this.toggleEditCustomerModal.bind(this)}
                >
                    <ModalHeader toggle={this.toggleEditCustomerModal.bind(this)}>
                        Edit customer detail
                    </ModalHeader>
                    <ModalBody>
                    <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                id="name"
                                value={this.state.editCustomerData.first_name}
                                onChange={e => {
                                    let { editCustomerData } = this.state;
                                    editCustomerData.first_name = e.target.value;
                                    this.setState({ editCustomerData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="last_name">Last Name</Label>
                            <Input
                                id="last_name"
                                value={this.state.editCustomerData.last_name}
                                onChange={e => {
                                    let { editCustomerData } = this.state;
                                    editCustomerData.last_name = e.target.value;
                                    this.setState({ editCustomerData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                value={this.state.editCustomerData.email}
                                onChange={e => {
                                    let { editCustomerData } = this.state;
                                    editCustomerData.email = e.target.value;
                                    this.setState({ editCustomerData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Mobile Number</Label>
                            <Input
                                id="phone"
                                value={this.state.editCustomerData.mobile_number}
                                onChange={e => {
                                    let { editCustomerData } = this.state;
                                    editCustomerData.mobile_number = e.target.value;
                                    this.setState({ editCustomerData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input
                                id="address"
                                value={this.state.editCustomerData.customer_address}
                                onChange={e => {
                                    let { editCustomerData } = this.state;
                                    editCustomerData.customer_address = e.target.value;
                                    this.setState({ editCustomerData });
                                }}
                            />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateCustomer.bind(this)}>
                            Update 
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditCustomerModal.bind(this)}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
                <nav className="navbar navbar-dark navbar-expand-sm fixed-bottom">
                    <footer id='foot'> 
                         <small>&copy; Copyright 2020, All right reserved </small> 
                    </footer>
                </nav>
              </div>
        );
    }
}

export default CustomerList;




