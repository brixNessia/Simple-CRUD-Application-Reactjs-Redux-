import Http from '../utils/Http'

import {
    actionCreateProduct,
    actionUpdateProduct,
    actionDeleteProduct,
    actionFetchProduct,
    actionPreFlightStatus,
    actionPostFlightStatus,
  } from '../store/product/actionCreator'

export function fetchProducts() {
  return async (dispatch) => {
    dispatch(actionPreFlightStatus())
    return Http.get('/products')
      .then(({ data }) => {
        dispatch(actionFetchProduct(data.data))
      })
      .finally(() => {
        dispatch(actionPostFlightStatus)
      })
  }
}

export function createProduct(productData) {
  return async (dispatch) => {
      dispatch(actionPreFlightStatus())
      return Http.post('/products', productData)
        .then(({ data }) => {
          dispatch(actionCreateProduct(data.data))
      })
      .finally(() => {
        dispatch(actionPostFlightStatus)
      })
  }
}

export function updateProduct(productData, id) {
  return async (dispatch) => {
    dispatch(actionPreFlightStatus())
    return Http.put(`/products/${id}`, productData)
      .then(({ data }) => {
       dispatch(actionUpdateProduct(data))
    })
    .finally(() => {
      dispatch(actionPostFlightStatus)
    })
  }
}

export function deleteProduct(id) {
  return async (dispatch) => {
    dispatch(actionPreFlightStatus())
    return Http.delete(`/products/${id}`)
      .then(({ data }) => {
       dispatch(actionDeleteProduct(data))
    })
    .finally(() => {
      dispatch(actionPostFlightStatus)
    })
  }
}