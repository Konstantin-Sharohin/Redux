import { PUT_DATA, GET_DATA, PAGE_SELECTED } from "../constants/action-types";

const initialState = {
  doneTasks: [],
  remoteTasks: [],
  currentPage: 1
};

export default (state = initialState, action) => {
  if (action.type === GET_DATA || action.type === PUT_DATA) {
    return {
      ...state,
      remoteTasks: action.payload
    }
  } else if (action.type === PAGE_SELECTED) {
    return {
      ...state,
      remoteTasks: action.payload,
      currentPage: action.currentPage
    }
  }
  
  else return state;
};