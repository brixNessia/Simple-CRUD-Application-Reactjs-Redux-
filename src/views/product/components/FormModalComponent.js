import React from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap'

function FormModalComponent(props) {
  const { handleClose, show, handleChange, formData, handleSubmit, isCreate, handleEdit, data, error } = props
  return (
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Create Product</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {error.code === 500 ? <Alert variant='danger'>{error.message}</Alert> : ''}
    <Form>
      <Form.Control type="text" placeholder={data.length + 1} name="id" value={isCreate ? data.length + 1 : formData.id} onChange={handleChange} readOnly />
      <Form.Group className="mb-3">
        <Form.Label>Product Name*</Form.Label>
        <Form.Control 
          type="text" 
          name="product_name" 
          onChange={handleChange} 
          value={formData.product_name} 
          isInvalid={error.code === 500 && formData.product_name.length === 0 ? true : false}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Product Description*</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} name="product_description" 
          onChange={handleChange} 
          value={formData.product_description} 
          isInvalid={error.code === 500 && formData.product_description.length === 0 ? true : false}
        />
      </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      {isCreate ? (
        <Button variant="primary" onClick={handleSubmit}>
          Create
        </Button>
      ) : (
        <Button variant="primary" onClick={handleEdit}>
          Edit
        </Button>
      )}
    </Modal.Footer>
  </Modal>
  )

}
export default FormModalComponent;