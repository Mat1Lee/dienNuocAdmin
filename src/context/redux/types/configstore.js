import { combineReducers,createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { QuanLyDienNuocReducer } from "../reducer/QuanLyDnReducer";
const rootReducers = combineReducers({

  //khai báo các reducer
 
  QuanLyDienNuocReducer,
  
});

export const store = createStore(rootReducers,applyMiddleware(thunk));