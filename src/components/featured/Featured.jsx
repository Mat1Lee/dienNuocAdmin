import "./featured.scss";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import { GIA_DIEN_1,GIA_NUOC1 } from "../../context/redux/types/AdminTypes";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { QuanLyDienNuocThangAction,ValueNowAction,ActionsStatus,HanMucAction } from "../../context/redux/action/QuanLyDnAction";
import { useDispatch,useSelector } from "react-redux";
import { Line,LineChart,XAxis,YAxis,CartesianGrid } from "recharts";
import { motion, LayoutGroup } from "framer-motion";
import { giaSoDien,giaSoNuoc } from "../priceprovider/Priceprovider";
import { useEffect,useState } from "react";
const Card =(props)=>{
  
 
 
 
  const dispatch = useDispatch();
  const {dataNow,hanMuc} = useSelector(state=>state.QuanLyDienNuocReducer)
  
  const [state,setState]=useState(false)
  useEffect(()=>{
      dispatch(ValueNowAction())
      dispatch(HanMucAction())
      // 
      
  },[])
  const handleClick =() =>{
    setState(!state)
  dispatch(ActionsStatus(true))
 
  }
  


const value1 = dataNow?.Dien + dataNow?.Nuoc

const price =  (giaSoDien(dataNow?.Dien) + giaSoNuoc(dataNow?.Nuoc)).toFixed(2)

const num = Math.round((value1/hanMuc)*100)
const changeTt=()=>{
  if(num>=100){
    return <>
    <p style={{color:'red'}}>Giá trị vượt mức cảnh báo</p></>
  }
  
  let title =''
  if(num>100) title='()'
  else title ='(Giá trị đang ở dưới mức cảnh báo)'
  return title
}
  return (
    <div  className="featured">
      <div className="top">
      <KeyboardArrowUpOutlinedIcon />
        <h1 className="title">Số điện, nước hôm nay</h1>
        <RestartAltIcon onClick={()=>{
          handleClick();
        
        }} fontSize="small" style={{cursor:'pointer'}} />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          
          <CircularProgressbar
          
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            // rotation: 0.25,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
            strokeWidth:'20px',
            // Text size
            textSize: '26px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
            textColor:`${(num>100)?'red' : '#3e98c7'}`
          
          
          })}
           value={num} text={`${num}%`} strokeWidth={5} />
        </div>
        <p className="title"> {changeTt()}</p>
        <p>Thành Tiền: </p>
        <p className="amount">{price} Nghìn Đồng</p>
        <p className="desc">
         
        </p>
        <div className="summary">
         
          <div className="item">
            <div className="itemTitle">Số điện</div>
            <div className="itemResult positive">
              {/* <KeyboardArrowUpOutlinedIcon fontSize="small"/> */}
              <div className="resultAmount">{dataNow?.Dien}</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Số nước</div>
            <div className="itemResult positive">
              {/* <KeyboardArrowUpOutlinedIcon fontSize="small"/> */}
              <div className="resultAmount">{dataNow?.Nuoc}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card;
