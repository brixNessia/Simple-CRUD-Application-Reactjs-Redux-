import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

import ProductList from './ProductList'
import FormModalComponent from './components/FormModalComponent';

import './product.css';

import { fetchProducts, createProduct, updateProduct, deleteProduct} from '../../services/productService';

import { validation } from './validation'

function Product() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isCreate, setIsCreate] = useState(true);
  const [error, setError] = useState({})

  const data = useSelector((state) => state?.product?.data || [])
  const status = useSelector((state) => state?.product?.status || false)

  const [formData, setFormData] = useState({product_name: '', product_description: ''});

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
      dispatch(createProduct(formData)).then(() => setShow(false))
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
      dispatch(updateProduct(formData, formData.id)).then(() => setShow(false))
    } 
    setError(result)
  }

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }

  useEffect(() => {
    dispatch(fetchProducts())
  }, [data.length, dispatch])

  return (
    <div>
        {status && (
        <div className="loading">
          <div className="spinner">
            <div className="spinner-grow text-primary" role="status" style={{width: '10rem', height: '10rem'}}>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
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
      <ProductList data={data || []} handleGetSelectedProduct={handleGetSelectedProduct} handleDelete={handleDelete}/>
    </div>
  )
}
export default Product