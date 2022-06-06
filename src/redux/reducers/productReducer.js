import { ActionTypes } from "../constants/action-types"

const initialState = {
  products: [{
    id: 1,
    title: "Const",
    category: "Prog"
  }]
}

export const productReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case ActionTypes.SET_PTODUCTS: return state
    default: return state
  }
}