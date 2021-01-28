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
            url : 'http://13.55.254.225/apis/products/',
            products: [],
            filteredProducts: [],
            newProductData: {
              title: '',
              price: '',
              uploaded_date: '',
              discount_price: '',
              category: [],
              description: '',
              product_address: '',
              product_image: '',
                checked: false
                
            },
            searchData: {
                title: ''
            },
            editProductData: {
              id: '',
              title: '',
              price: '',
              uploaded_date: '',
              discount_price: '',
              category: [],
              description: '',
              product_address: '',
              product_image: ''
            },
            newProductModal: false,
            editProductModal: false,
        }

        this.temp = '123'
        
    }
    componentDidMount() {
      this._refreshProducts();
    }

    toggleNewProductModal() {
        this.setState({
            newProductModal: !this.state.newProductModal
        });
    }

    addProduct() {
        axios.post(this.state.url, this.state.newProductData).then(res => {
            let { products } = this.state;
            products.push(res.data.results);
            this.setState({ products, newProductModal: false, newProductData: {
              id: '',
              title: '',
              price: '',
              uploaded_date: '',
              discount_price: '',
              category: [],
              description: '',
              product_address: '',
              product_image: '',
              checked: false
            } });
        });
    }
    toggleEditProductModal() {
        this.setState({
            editProductModal: !this.state.editProductModal
        });
    }
    editProduct(id,title,price,uploaded_date,discount_price,category, description,product_address,product_image) {
        this.setState({
            editProductData: { id,title,price,uploaded_date,discount_price,category, description,product_address,product_image},
            editProductModal: !this.state.editProductModal
        });
    }
    updateProduct() {
        let { title,price,uploaded_date,discount_price,category, description,product_address,product_image} = this.state.editProductData;
        axios
            .put( 'http://13.55.254.225/apis/product' + this.state.editProductData.id, {
            title, price, uploaded_date, discount_price,category, description, product_address,product_image
            })
            .then(response => {
                this._refreshProducts();
                this.setState({editProductModal: false, editProductData: {id:'',title:'',price:'',uploaded_date:'',discount_price:'',category:'', description:'',product_address:'',product_image:''}})
            });
    }

    deleteProduct(id) {
        axios.delete( 'http://13.55.254.225/apis/product' + id).then(response => {
            this._refreshProducts();
        });
    }
    _refreshProducts() {
         axios.get(this.state.url).then(res => {
            this.setState({
                products: res.data.results
            });
        });
    }
    render() {

        let data = this.state.products.map((list) => {
          return (
            <tr key={list.id}>
              <td>{list.title}</td>
              <td>{list.price}</td>
              <td>{list.uploaded_date}</td>
              <td>{list.discount_price}</td>
              <td>{list.category}</td>
              <td>{list.description}</td>
              <td>{list.product_address}</td>
              <td>{list.product_image}</td>
              <td>
                <Button variant="success" size="sm" className="mr-2" 
                onClick={this.editProduct.bind(this, list.id, list.title, list.price, list.uploaded_date, list.discount_price, list.category, list.description, list.product_address, list.product_image)}>
                  Edit
                </Button>
                <Button variant="danger" size="sm" onClick={() => this.deleteProduct(list.id)}>
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
        <h2>Product List</h2>
        <br></br>
        <form>
          <Table striped bordered hover>
            <thead>
              <tr>

                <th>Title</th>
                <th>Price</th>
                <th>Uploded Date</th>
                <th>Discount Price</th>
                <th>Category</th>
                <th>Description</th>
                <th>Product Address</th>
                <th>Product Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </Table>
          <br></br>
        </form>
      </div>
                <Modal
                    isOpen={this.state.editProductModal}
                    toggle={this.toggleEditProductModal.bind(this)}
                >
                    <ModalHeader toggle={this.toggleEditProductModal.bind(this)}>
                        Edit product detail
                    </ModalHeader>
                    <ModalBody>
                    <FormGroup>
                            <Label for="title">Title</Label>
                            <Input
                                id="title"
                                value={this.state.editProductData.title}
                                onChange={e => {
                                    let { editProductData } = this.state;
                                    editProductData.title = e.target.value;
                                    this.setState({ editProductData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">Price</Label>
                            <Input
                                id="price"
                                value={this.state.editProductData.price}
                                onChange={e => {
                                    let { editProductData } = this.state;
                                    editProductData.price = e.target.value;
                                    this.setState({ editProductData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="discount_price"> Discount Price</Label>
                            <Input
                                id="discount_price"
                                value={this.state.editProductData.discount_price}
                                onChange={e => {
                                    let { editProductData } = this.state;
                                    editProductData.discount_price = e.target.value;
                                    this.setState({ editProductData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="category">Category</Label>
                            <Input
                                id="category"
                                value={this.state.editProductData.category}
                                onChange={e => {
                                    let { editProductData } = this.state;
                                    editProductData.category = e.target.value;
                                    this.setState({ editProductData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input
                                id="description"
                                value={this.state.editProductData.description}
                                onChange={e => {
                                    let { editProductData } = this.state;
                                    editProductData.description = e.target.value;
                                    this.setState({ editProductData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="product_address">Product Address</Label>
                            <Input
                                id="product_address"
                                value={this.state.editProductData.product_address}
                                onChange={e => {
                                    let { editProductData } = this.state;
                                    editProductData.product_address = e.target.value;
                                    this.setState({ editProductData });
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="product_image">Product Image</Label>
                            <Input
                                id="product_image"
                                value={this.state.editProductData.product_image}
                                onChange={e => {
                                    let { editProductData } = this.state;
                                    editProductData.product_image = e.target.value;
                                    this.setState({ editProductData });
                                }}
                            />
                        </FormGroup>
                        
           
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.updateProduct.bind(this)}>
                            Update 
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggleEditProductModal.bind(this)}>
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
