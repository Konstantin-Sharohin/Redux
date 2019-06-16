import { PUT_DATA, GET_DATA, SELECT_PAGE, SORT_EMAIL } from "../constants/action-types";

const initialState = {
  doneTasks: [],
  remoteTasks: [],
  tasksQuantity: 0,
  pages: [],
  errors: [],
  currentPage: 1
};

export default (state = initialState, action) => {

  const pagination = () => {
    let pagesArray = [],
    tasksQuantity = action.tasksQuantity;
      for (let i = 0; i <= Math.ceil(tasksQuantity / 3); i++) {
        pagesArray.push(i);
      }
      return pagesArray;
  };

  if (action.type === GET_DATA) {
    const pages = pagination();
    return {
      ...state,
      remoteTasks: [...action.payload],
      tasksQuantity: parseInt(action.tasksQuantity),
      pages: [...pages]
    }
  } else if (action.type === PUT_DATA) {
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
  } else if ((action.type === SELECT_PAGE || action.type === SORT_EMAIL) && action.status === "ok") {
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