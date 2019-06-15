export const selectors = {
    getDoneTasks: state => state.doneTasks,
    getRemoteTasks: state => state.remoteTasks,
    getCurrentPage: state => state.currentPage,
    getTasksQuantity: state => state.tasksQuantity,
    getErrors: state => state.errors
}

