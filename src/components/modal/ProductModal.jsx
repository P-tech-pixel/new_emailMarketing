import React, { Component } from 'react'
import {Modal, Button, Form} from 'react-bootstrap'


export default class CustomerModal extends Component {
    constructor(props){
        super(props);
        this.state = {
           
        }
    }
    render() {
        return (
                <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
          <form action="" className="white">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Product Category</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary">Update Product</Button>
        </form>
          </div>
       </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
        );
    }
}



