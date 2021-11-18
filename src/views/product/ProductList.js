import React from 'react';
import { Table, Button } from 'react-bootstrap'

function ProductList(props) {
  const { data, handleGetSelectedProduct, handleDelete } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.length !== 0 ? data.map((value, index) => (
          <tr key={index}>
            <td>{`PR-${value.id}`}</td>
            <td>{value.product_name}</td>
            <td>{value.product_description}</td>
            <td>
              <div className="btn-group-table-list">
                <Button variant="success" size="md" className="btn-props" onClick={() => handleGetSelectedProduct(value.id)}>Edit</Button>
                <Button variant="danger" size="md" className="btn-props" onClick={() => handleDelete(value.id)}>Delete</Button>
              </div>
            </td>
          </tr>
        )) : 
          <tr>
            <td colSpan="4">No Data</td>
          </tr>
        }
      </tbody>
    </Table>
  )
}
export default ProductList;