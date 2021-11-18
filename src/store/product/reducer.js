import * as types from './actionTypes'

const initialState = {
  data: [],
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case types.CREATE_PRODUCT:
      return {
        data: [...state.data, payload],
      }
    case types.UPDATE_PRODUCT:
        return {
            data: payload,
        }
    case types.DELETE_PRODUCT:
        return {
            data: payload,
        }
    default:
      return state
  }
}
export default reducer
