import { GET_DATA, PUT_DATA, SELECT_PAGE, SORT_EMAIL, SORT_USERNAME } from "../constants/action-types";
import API from "../services/index";

export const getData = () =>
  async dispatch => {
    try {
      const data = await API.getData();
      dispatch({
        type: GET_DATA,
        payload: data.message.tasks,
        tasksQuantity: parseInt(data.message.total_task_count),
        status: data.status
      });
    } catch (error) {
      console.error(error);
    }
  };


export const putData = task =>
  async dispatch => {
    try {
      const data = await API.putData(task);
      dispatch({ 
        type: PUT_DATA,
        payload: Array(data.message),
        status: data.status
       });
    } catch (error) {
      console.error(error);
    }
  };


export const selectPage = (page) =>
  async (dispatch) => {
    try {
      const data = await API.selectPage(page);
      dispatch({
        type: SELECT_PAGE,
        payload: data.message.tasks,
        currentPage: page,
        status: data.status,
        tasksQuantity: parseInt(data.message.total_task_count)
      });
    } catch (error) {
      console.error(error);
    }
  };


  export const sortByEmail = () =>
  async (dispatch, getState) => {
    const { currentPage } = getState();
    try {
      const data = await API.sortByEmail(currentPage);
      dispatch({
        type: SORT_EMAIL,
        payload: data.message.tasks,
        currentPage: currentPage,
        status: data.status,
        tasksQuantity: parseInt(data.message.total_task_count)
      });
    } catch (error) {
      console.error(error);
    }
  };

  export const sortByUsername = () =>
  async (dispatch, getState) => {
    const { currentPage } = getState();
    try {
      const data = await API.sortByUsername(currentPage);
      dispatch({
        type: SORT_USERNAME,
        payload: data.message.tasks,
        currentPage: currentPage,
        status: data.status,
        tasksQuantity: parseInt(data.message.total_task_count)
      });
    } catch (error) {
      console.error(error);
    }
  }