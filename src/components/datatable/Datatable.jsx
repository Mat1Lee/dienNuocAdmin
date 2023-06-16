import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { QuanLyDienNuocAction,QuanLyDienNuocThangAction,ActionsValue,HanMucAction } from "../../context/redux/action/QuanLyDnAction";
const Datatable = (props) => {

 const {tableDataDefault,hanMuc,dataNow} = useSelector(state=>state.QuanLyDienNuocReducer);
 const dispatch = useDispatch()
  
 useEffect(()=>{
   dispatch(QuanLyDienNuocAction())

   // ActionsValue()

 },[])
 const dataBiding =[] ;
  
 //  console.log(records)
 tableDataDefault?.map((data,index)=>{
  
     dataBiding.push({'id':index, 'Date':data?.key , 'Dien':data.data.Dien , 'Nuoc':data.data.Nuoc, 'Total':(data.data.Dien+data.data.Nuoc)})
 
 
 })
const data = dataBiding.reverse()

  return (
    <div className="datatable">
      {/* <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div> */}
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns}
        pageSize={15}
        rowsPerPageOptions={[3]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
