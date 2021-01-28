import React, { Component } from "react";
import { Table, Button, Form, Modal, FormControl } from "react-bootstrap";
import axios from "axios";
import ProductModal from '../modal/ProductModal';
import "./productDash.css";
import ProductCheckbox from "../SelectionandSend/ProductCheckbox";
import SelectAllCheckbox from "../SelectionandSend/selectallcheckbox";


export default class ProductDash extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      selectedProduct: [],
      isChecked : false
  
    };
  }
  async componentDidMount() {
    let results = await axios
      .get("http://13.55.254.225/apis/products/")
      .then((response) => {
        this.setState({ products: response.data.results });
      });
  }

  onChange(e, value){
    console.log(e.target.checked)
    if(e.target.checked){
      this.setState({
        selectedProduct: this.state.selectedProduct.concat([value])
      })
    }
    else {
      this.setState({
        selectedProduct : this.state.selectedProduct.filter(function(val){return  val!==value})
      })
    }
    console.log(this.state.selectedProduct)
  }
 

   render() {
    let data = this.state.products.map((list) => {
      return (
        <tr key={list.id}>
          <td><input 
                       type="checkbox"
                       name="isChecked"
                       id= {list.id}
                       onChange={ (e) => this.onChange(e, list)}
                ></input>
            </td>
          <td>{list.title}</td>
        </tr>
      );
    });
    let selected = this.state.selectedProduct.map((item) => {
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
        <h2>Product List</h2>
        <br></br>
        <form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th><SelectAllCheckbox/></th>
                <th>Product Name</th>
              </tr>
            </thead>
            <tbody>
                 {data}
            </tbody>
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











