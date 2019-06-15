import { PUT_DATA, GET_DATA, PAGE_SELECTED } from "../constants/action-types";

const initialState = {
  doneTasks: [],
  remoteTasks: [],
  tasksQuantity: [],
  errors: [],
  currentPage: 1
};

export default (state = initialState, action) => {
  if (action.type === GET_DATA) {
    return {
      ...state,
      remoteTasks: action.payload,
      tasksQuantity: action.tasksQuantity
    }
  } else if (action.type === PUT_DATA) {
      if (action.status === "ok") {
          return {
            ...state,
            remoteTasks: action.payload,
          }
      } else {
          return {
            ...state,
            errors: action.message,
      }
  }
  } else if (action.type === PAGE_SELECTED && action.status === "ok") {
    return {
      ...state,
      remoteTasks: action.payload,
      currentPage: action.currentPage,
      tasksQuantity: action.tasksQuantity
    }
  }
  
  else return state;
};