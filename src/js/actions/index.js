import { GET_DATA, PUT_DATA, PAGE_SELECTED } from "../constants/action-types";
import API from "../services/index";

export const getData = () =>
  async dispatch => {
    try {
      const tasks = await API.getData();
      dispatch({ type: GET_DATA, payload: tasks.message, tasksQuantity: tasks.message.total_task_count });
    } catch (error) {
      console.error(error);
    }
  };


export const putData = task =>
  async dispatch => {
    try {
      const tasks = await API.putData(task);
      dispatch({ type: PUT_DATA, payload: tasks.message, status: tasks.status });
    } catch (error) {
      console.error(error);
    }
  }


export const selectPage = (page) =>
  async (dispatch, getState) => {
    const { currentPage } = getState();
    try {
      const tasks = await API.selectPage(page);
      dispatch({ type: PAGE_SELECTED, payload: tasks.message, currentPage: currentPage, status: tasks.status });
    } catch (error) {
      console.error(error);
    }
  }