import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import {store} from '../src/context/redux/types/configstore'
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <Provider store={store}>
      <AuthContextProvider>
         <DarkModeContextProvider >
      <App />
    </DarkModeContextProvider>
      </AuthContextProvider>
     
    </Provider>
    
  

);
