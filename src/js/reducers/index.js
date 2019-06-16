import { PUT_DATA, GET_DATA, PAGE_SELECTED } from "../constants/action-types";

const initialState = {
  doneTasks: [],
  remoteTasks: [],
  tasksQuantity: 0,
  errors: [],
  currentPage: 1
};

export default (state = initialState, action) => {
  if (action.type === GET_DATA) {
    return {
      ...state,
      remoteTasks: [...action.payload.tasks],
      tasksQuantity: parseInt(action.tasksQuantity)
    }
  } else if (action.type === PUT_DATA) {
      if (action.status === "ok") {
          return {
            ...state,
            remoteTasks: [...action.payload.tasks]
          }
      } else {
          return {
            ...state,
            errors: [...state.errors, action.message]
      }
  }
  } else if (action.type === PAGE_SELECTED && action.status === "ok") {
    return {
      ...state,
      remoteTasks: [...action.payload.tasks],
      currentPage: parseInt(action.currentPage),
      tasksQuantity: parseInt(action.tasksQuantity)
    }
  }
  
  else return state;
};