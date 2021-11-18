import * as types from './actionTypes'

const initialState = {
  data: [],
  status: false,
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case types.FETCH_PRODUCT:
      return {
        data: payload,
      }
    case types.CREATE_PRODUCT:
      return {
        data: [...state.data, payload],
      }
    case types.UPDATE_PRODUCT:
        return state
    case types.DELETE_PRODUCT:
        return {
          ...state.data
        }
    case types.PRE_FLIGHT_STATUS:
        return {
          ...state,
          status: true,
        }
    case types.POST_FLIGHT_STATUS:
      return {
        ...state,
        status: false,
      }
    default:
      return state
  }
}
export default reducer
