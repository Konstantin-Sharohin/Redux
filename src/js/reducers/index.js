import { GET_DATA, SELECT_PAGE, PUT_DATA, SORT_EMAIL, SORT_USERNAME } from "../constants/action-types";

const initialState = {
  doneTasks: [],
  remoteTasks: [],
  tasksQuantity: 0,
  status: 0,
  pages: [],
  errors: [],
  currentPage: 1
};

export default (state = initialState, action) => {

  const pagination = () => {
    let pagesArray = [],
    tasksQuantity = action.tasksQuantity;
      for (let i = 1; i <= Math.ceil(tasksQuantity / 3); i++) {
        pagesArray.push(i);
      }
      return pagesArray;
  };

  if (action.type === GET_DATA && action.status === "ok") {
    const pages = pagination();
    return {
      ...state,
      remoteTasks: [...action.payload],
      tasksQuantity: parseInt(action.tasksQuantity),
      pages: [...pages]
    }
  } else if (action.type === PUT_DATA && action.status === "ok") {
      if (action.status === "ok") {
          return {
            ...state,
            remoteTasks: action.payload
          }
      } else {
          return {
            ...state,
            errors: [...state.errors, Array(action.message)]
      }
  }
  } else if (action.type === SELECT_PAGE && action.status === "ok") {
    const pages = pagination();
    return {
      ...state,
      remoteTasks: [...action.payload],
      currentPage: parseInt(action.currentPage),
      tasksQuantity: parseInt(action.tasksQuantity),
      status: parseInt(action.status),
      pages: [...pages]
    }
  } else if (action.type ===  SORT_EMAIL && action.status === "ok") {
    const pages = pagination();
    return {
      ...state,
      remoteTasks: [...action.payload],
      currentPage: parseInt(action.currentPage),
      tasksQuantity: parseInt(action.tasksQuantity),
      pages: [...pages]
    }
  } else if (action.type ===  SORT_USERNAME && action.status === "ok") {
    const pages = pagination();
    return {
      ...state,
      remoteTasks: [...action.payload],
      currentPage: parseInt(action.currentPage),
      tasksQuantity: parseInt(action.tasksQuantity),
      pages: [...pages]
    }
  }
  
  else return state;
};