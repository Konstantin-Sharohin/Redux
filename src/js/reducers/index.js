import { GET_DATA, SELECT_PAGE, PUT_DATA, UPDATE_DATA, SORT_EMAIL, SORT_USERNAME, AUTHORIZATION } from "../constants/action-types";

const initialState = {
  doneTasks: [],
  remoteTasks: [],
  tasksQuantity: 0,
  pages: [],
  errors: [],
  currentPage: 1,
  token: "",
  authorization: false
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

  if (action.type === GET_DATA && action.responseStatus === "ok") {
    const pages = pagination();
    return {
      ...state,
      remoteTasks: [...action.payload],
      tasksQuantity: parseInt(action.tasksQuantity),
      pages: [...pages]
    }

  } else if (action.type === PUT_DATA && action.responseStatus === "ok") {
    return {
      ...state,
      remoteTasks: action.payload
    }

  } else if (action.type === SELECT_PAGE && action.responseStatus === "ok") {
    const pages = pagination();
    return {
      ...state,
      remoteTasks: [...action.payload],
      currentPage: parseInt(action.currentPage),
      tasksQuantity: parseInt(action.tasksQuantity),
      pages: [...pages]
    }

  } else if (action.type === SORT_EMAIL && action.responseStatus === "ok") {
    const pages = pagination();
    return {
      ...state,
      remoteTasks: [...action.payload],
      currentPage: parseInt(action.currentPage),
      tasksQuantity: parseInt(action.tasksQuantity),
      pages: [...pages]
    }

  } else if (action.type === SORT_USERNAME && action.responseStatus === "ok") {
    const pages = pagination();
    return {
      ...state,
      remoteTasks: [...action.payload],
      currentPage: parseInt(action.currentPage),
      tasksQuantity: parseInt(action.tasksQuantity),
      pages: [...pages]
    }

  } else if (action.type === AUTHORIZATION && action.responseStatus === "ok") {
    return {
      ...state,
      token: action.payload,
      authorization: true
    }

  } else if (action.type === UPDATE_DATA && action.responseStatus === "ok") {
    return state;
  }

  else return state;
};