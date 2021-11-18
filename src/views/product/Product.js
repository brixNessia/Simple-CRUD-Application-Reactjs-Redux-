import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import ProductList from './ProductList'
import FormModalComponent from './components/FormModalComponent';

import './product.css';

import * as actions from '../../store/product/actionCreator';

import { validation } from './validation'

function Product() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isCreate, setIsCreate] = useState(true);
  const [error, setError] = useState({})

  const data = useSelector((state) => state?.product?.data || [])

  const [formData, setFormData] = useState({id: '', product_name: '', product_description: ''});

  const handleClose = () => setShow(false);
  const handleCreate = () => {
    setShow(true);
    setIsCreate(true)
    setFormData({id: '', product_name: '', product_description: ''})
    setError({})
  }

  const handleChange = (event) => {
    const {name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    const result = validation(formData);
    if (result.code === 200) {
      dispatch(actions.actionCreateProduct({...formData, id: data.length + 1}))
      setShow(false);
    } 
    setError(result)
  }

  const handleGetSelectedProduct = (id) => {
    const selectedProduct = data.find((value) => value.id === id);
    setFormData(selectedProduct)
    setShow(true)
    setIsCreate(false)
    setError({})
  }

  const handleEdit = () => {
    const result = validation(formData);
    if (result.code === 200) {
      const productIndex = data.findIndex(value => value.id === formData.id)
      data[productIndex] = formData
      dispatch(actions.actionUpdateProduct(data))
      setShow(false)
    } 
    setError(result)
  }

  const handleDelete = (id) => {
    const newSetArray = data.filter(value => value.id !== id)
    dispatch(actions.actionDeleteProduct(newSetArray))
  }

  return (
    <div>
      <Button variant="primary" onClick={handleCreate} className="productCreateButton">Create Product</Button>
      <FormModalComponent 
        handleClose={handleClose} 
        show={show} handleChange={ handleChange } 
        formData={formData} 
        handleSubmit={handleSubmit} 
        handleEdit={handleEdit}
        isCreate={isCreate}
        data={data}
        error={error}
      />
      <ProductList data={data} handleGetSelectedProduct={handleGetSelectedProduct} handleDelete={handleDelete}/>
    </div>
  )
}
export default Product