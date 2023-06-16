import "./styles.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


export default function ChartItem({props,aspect}) {
  const data =[{
    name: 'Page B',
    dien: 3000,
    nuoc: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    dien: 2000,
    nuoc: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    dien: 2780,
    nuoc: 3908,
    amt: 2000,
  },]
  return (
    <>
     <ResponsiveContainer width="100%" aspect={aspect}>

        <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="nuoc"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="dien" stroke="#82ca9d" />
    </LineChart>
     </ResponsiveContainer>
   
    </>
   
  );
}
