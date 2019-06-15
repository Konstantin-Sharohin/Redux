import store from "../js/store/index";
import { getData, putData, selectPage } from "../js/actions/index";
window.store = store;
window.getData = getData;
window.putData = putData;
window.selectPage = selectPage;