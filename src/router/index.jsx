import { createBrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from "./protectedRoute";

import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import List from "../pages/list/List";
import Contact from "../pages/contact/Contact";

const AuthLayout =({children})=>{
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  )
}
export default createBrowserRouter([
  {
    element: <AuthLayout />,
  
    children: [
      {
        element: <Login />,
        path: '/login',
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Home />,
            path: '/',
         
            children: [
              {
                element: <List />,
                path: `/invoices`,

              },
              {
                element: <Contact />,
                path: `/contact`,

              },
            ]
          },
        ],
      },
    ],
  },
])