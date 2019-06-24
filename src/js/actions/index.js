import { GET_DATA, PUT_DATA, UPDATE_DATA, SELECT_PAGE, SORT_EMAIL, SORT_USERNAME, AUTHORIZATION, LOGOUT } from "../constants/action-types";
import API from "../services/index";

export const getData = () =>
  async dispatch => {
    try {
      const data = await API.getData();
      dispatch({
        type: GET_DATA,
        payload: data.message.tasks,
        tasksQuantity: parseInt(data.message.total_task_count),
        responseStatus: data.status
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
        responseStatus: data.status
       });
    } catch (error) {
      console.error(error);
    }
  };


  export const updateData = task =>
  async dispatch => {
    try {
      const data = await API.updateData(task);
      dispatch({ 
        type: UPDATE_DATA,
        responseStatus: data.status
       });
    } catch (error) {
      console.error(error);
    }
  };


export const selectPage = (event) =>
  async (dispatch) => {
    try {
      const page = parseInt(event.target.id);
      const data = await API.selectPage(page);
      dispatch({
        type: SELECT_PAGE,
        payload: data.message.tasks,
        currentPage: page,
        responseStatus: data.status,
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
        responseStatus: data.status,
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
        responseStatus: data.status,
        tasksQuantity: parseInt(data.message.total_task_count)
      });
    } catch (error) {
      console.error(error);
    }
  };


  export const authorization = (values) =>
  async dispatch => {
    try {
      const data = await API.getToken(values);
      dispatch({
        type: AUTHORIZATION,
        payload: data.message.token,
        responseStatus: data.status
      });
    } catch (error) {
      console.error(error);
    }
  };


  export const logout = () =>
  dispatch => {
    try {
      dispatch({
        type: LOGOUT
      });
    } catch (error) {
      console.error(error);
    }
  };