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
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Button variant="primary">Update Customer</Button>
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