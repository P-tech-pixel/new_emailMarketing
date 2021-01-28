import React, { Component, useState} from "react";
import {Form, Button, Dropdown } from 'react-bootstrap';
import "./Custom.css";
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

class AddProduct extends Component {

  constructor(props) {
    super(props);

    this.state = {
        url: 'http://13.55.254.225/apis/products/',
        category_url: 'http://13.55.254.225/apis/categories/',
        categories : [],
        show:false,
        products: [],
        newProductData: {
            title: '',
            price: '',
            discount_price: '',
            category: [],
            description: '',
            product_address: '',
            product_image: '' 
        },
        editProductData: {
          id: '',
          title: '',
          price: '',
          discount_price: '',
          category: [],
          description: '',
          product_address: '',
          product_image: ''
        }
    }
    this.temp = '123'
}
addProduct() {
    let results = axios.post(this.state.url, this.state.newProductData).then(res => {
        let { products } = this.state;
        products.push(res.data.results);

        this.setState({ products, newProductData: {
          title: '',
          price: '',
          discount_price: '',
          category: [],
          description: '',
          product_address: '',
          product_image: ''
       }
    });
    });
}
get_categories(){
    axios.get(this.state.category_url).then(res => {
        this.setState({
            categories: res.data.results
        });
    });
}
componentDidMount() {
    this.get_categories();
  }


render() {

   let category = this.state.categories.map((cat) => {
        return(
                <Dropdown.Item
                    id={cat.id}
                    value= {cat.id}
                    onClick={e => {
                      let { newProductData } = this.state;
                       newProductData.category = e.target.value;
                    this.setState({ newProductData });
                    console.log(this.state.newProductData)
                }}
             >{cat.category_name}</Dropdown.Item>   
        )
    })
     



  return (
      <div className="container addCustomer">

          <div className="container addproduct">
                  <h3>Add Product Details</h3>
                  <form action="" className="white">
                  <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Title</Form.Label>
                      <Form.Control type="text" 
                          id="title"
                          value={this.state.newProductData.title}
                          onChange={e => {
                              let { newProductData } = this.state;
                              newProductData.title = e.target.value;
                              this.setState({ newProductData });
                              }}
                      />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Price</Form.Label>
                      <Form.Control type="text" 
                           id="price"
                           value={this.state.newProductData.price}
                           onChange={e => {
                           let { newProductData } = this.state;
                           newProductData.price = e.target.value;
                           this.setState({ newProductData });
                          }}  
                      />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Discount price</Form.Label>
                      <Form.Control type="text" 
                          id="discount_price"
                          value={this.state.newProductData.discount_price}
                          onChange={e => {
                              let { newProductData } = this.state;
                              newProductData.discount_price = e.target.value;
                              this.setState({ newProductData });
                          }}  
                      />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Category</Form.Label>
                      <Dropdown>
                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic" row = "3">
                                Select Category
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {category}
                            </Dropdown.Menu>
                        </Dropdown>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Description</Form.Label>
                      <Form.Control type="textarea" rows="3" 
                          value={this.state.newProductData.description}
                          onChange={e => {
                              let { newProductData } = this.state;
                              newProductData.description = e.target.value;
                              this.setState({ newProductData });
                              }}
                      />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type ="text" rows="3" 
                          id="address"
                          value={this.state.newProductData.product_address}
                          onChange={e => {
                              let { newProductData } = this.state;
                              newProductData.product_address = e.target.value;
                              this.setState({ newProductData });
                              }}
                      />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Image</Form.Label>
                      <Form.Control type ="text" rows="3" 
                          id="category"
                          value={this.state.newProductData.product_image}
                          onChange={e => {
                              let { newProductData } = this.state;
                              newProductData.product_image = e.target.value;
                              this.setState({ newProductData });
                              }}
                      />
                  </Form.Group>
                  <Link to="./productlist"><Button variant="primary" onClick={this.addProduct.bind(this)} >Add Product</Button></Link>
                  </form>
              </div>
          <br />
      </div>

 );
}
}
export default AddProduct
