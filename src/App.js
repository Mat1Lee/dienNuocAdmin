import Home from "./pages/home/Home";

import List from "./pages/list/List";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import "./style/dark.scss";

import { DarkModeContext } from "./context/darkModeContext";

import Contact from "./pages/contact/Contact";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { darkMode } = useContext(DarkModeContext); 
  const {currentUser} = useContext(AuthContext)
  const ProtectedRoute = ( {children }) => {
   
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
  
    return children
  };
  
 


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>  
     
      <Routes>
        <Route path="/">
          <Route
          
            index
            element={
              <ProtectedRoute>
                <Home />
             
              </ProtectedRoute>
            }
          />  
           <Route path="invoices" element={<List />} />
           <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
