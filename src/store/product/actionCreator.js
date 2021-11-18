import * as types from './actionTypes'

export function actionCreateProduct(product) {
  return {
      type: types.CREATE_PRODUCT,
      payload: product,
    }
}

export function actionUpdateProduct(product) {
  return {
      type: types.UPDATE_PRODUCT,
      payload: product,
    }
}

export function actionDeleteProduct(product) {
  return {
      type: types.DELETE_PRODUCT,
      payload: product,
    }
}

export function actionFetchProduct(product) {
  return {
      type: types.FETCH_PRODUCT,
      payload: product,
    }
}

export function actionPreFlightStatus(status) {
  return {
      type: types.PRE_FLIGHT_STATUS,
      payload: status,
    }
}


export function actionPostFlightStatus(status) {
  return {
      type: types.POST_FLIGHT_STATUS,
      payload: status,
    }
}