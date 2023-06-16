import "./navbar.scss";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";

import { DarkModeContext } from "../../context/darkModeContext";

import { useContext,useState } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
 
  return (
    <div className="navbar">
      <div className="wrapper">
        
        <div className="items">
         
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          
      
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;



