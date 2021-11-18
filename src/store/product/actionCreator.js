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