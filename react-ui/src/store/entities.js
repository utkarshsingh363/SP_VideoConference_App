import { combineReducers } from "redux";

// Import different reducers from different slices in the application

import sideDrawerReducers from "./sideDrawer";
import chatWindowReducers from "./chatWindow";

export default combineReducers({
  // sideDrawer:sideDrawerReducers,
  // chatWindow:chatWindowReducers
});
