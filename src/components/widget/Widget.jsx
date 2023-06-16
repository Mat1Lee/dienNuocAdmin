import "./widget.scss";

import { Line,LineChart,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from "recharts";
import { motion, LayoutGroup } from "framer-motion";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


import { useState } from "react";
const Wid =(props)=>{

  
const diff1 = 100;
  const [expandedd,setExpanded]= useState(false)
  return(
    
    
    <LayoutGroup>
      {expandedd ? (
        <ExpandedCard props={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <Widget props={props} setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>

   
    

  )
}
const Widget = ({ props,setExpanded }) => {

  return (
    <>
     <div onClick={setExpanded} className="widget col-md-6">
      <div className="left">
        <span className="title">Tiền Điện(Nghìn VND)</span>
        <span className="counter">
          {/* {lastItem?.data.Dien*GIA_DIEN} VND */}
          {/* {tinhGiaTien().amount} VND */}
        16,000 VND
        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {/* {tinhGiaTien().diff1} % */}
          20%
        </div>
        {/* {data.icon} */}
      </div>
    </div>
    <div onClick={setExpanded} className="widget col-md-6">
      <div className="right">
        <span className="title">Tiền Nước(Nghìn VND)</span>
        <span className="counter">
          {/* {lastItem?.data.Nuoc*GIA_NUOC} VND */}
          {/* {tinhGiaTien().amount1} VND  */}
          17,000 VND

        </span>
        {/* <span className="link">{data.link}</span> */}
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {/* {tinhGiaTien().diff1} % */}
          20%
        </div>
        {/* {data.icon} */}
      </div>
    </div>
    </>
  );
};
function ExpandedCard({ param, setExpanded }) {
  const data = [
    {
      "name": "0-1h",
      "dien": 4000,
      "nuoc": 2400,
      "amt": 2400
    },
    {
      "name": "1-2h",
      "dien": 3000,
      "nuoc": 1398,
      
    },
    {
      "name": "2-3h",
      "dien": 2000,
      "nuoc": 9800,
      
    },
    {
      "name": "3-4h",
      "dien": 2780,
      "nuoc": 3908,
      
    },
    {
      "name": "4-5h",
      "dien": 1890,
      "nuoc": 4800,
      
    },
    {
      "name": "5-6h",
      "dien": 2390,
      "nuoc": 3800,
      
    },
    {
      "name": "P6-7h",
      "dien": 3490,
      "nuoc": 4300,
      
    }
  ]
  

  return (
    <motion.div
    onClick={setExpanded}
      className="ExpandedCard"
      style={{
      
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      }}
      layoutId="expandableCard"
    >
    <LineChart width={730} height={250} data={data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="dien" stroke="#8884d8" />
  <Line type="monotone" dataKey="nuoc" stroke="#82ca9d" />
</LineChart>
      <span>Last 7 hours</span>
    </motion.div>
  );
}
export default Wid;
