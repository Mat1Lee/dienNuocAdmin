import "./chart.scss";
import { GIA_DIEN,GIA_NUOC } from "../../context/redux/types/AdminTypes";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import { QuanLyDienNuocThangAction } from "../../context/redux/action/QuanLyDnAction";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";

const Chart = ({ aspect, title,props }) => {
  const {tableDataMonth} = useSelector(state=>state.QuanLyDienNuocReducer)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(QuanLyDienNuocThangAction())
  },[])

  
  const data1=[]
   
  // tableDataMonth?.map((data,index)=>{
  //   data1?.push({'name':data?.key , 'Total':((giaSoDien(data?.data.Dien))+(giaSoNuoc(data?.data.Nuoc))).toFixed(2)})
  // })
  tableDataMonth?.map((data,index)=>{
    data1?.push({'name':data?.key , 'Dien':data?.data.Dien ,'Nuoc':data?.data.Nuoc})
  })

 

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
     
        <AreaChart width={730} height={250} data={data1}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="dien" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="nuoc" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Dien" stroke="#8884d8" fillOpacity={1} fill="url(#dien)" />
  <Area type="monotone" dataKey="Nuoc" stroke="#82ca9d" fillOpacity={1} fill="url(#nuoc)" />
  {/* <Area type="monotone" dataKey="Price" stroke="#82ca9d" fillOpacity={1} fill="url(#nuoc)" /> */}
</AreaChart>
      
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
