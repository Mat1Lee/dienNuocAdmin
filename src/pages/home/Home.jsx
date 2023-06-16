import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Wid from "../../components/widget/Widget";
import Card from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Datatable from "../../components/datatable/Datatable";
import { GIA_DIEN,GIA_NUOC } from "../../context/redux/types/AdminTypes";
import { QuanLyDienNuocAction,QuanLyDienNuocThangAction,ActionsValue,HanMucAction } from "../../context/redux/action/QuanLyDnAction";
// import { GIA_DIEN,GIA_NUOC } from "../../context/redux/types/AdminTypes";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
const Home = () => {
  
  let {tableDataDefault} = useSelector(state=>state.QuanLyDienNuocReducer);
   
    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(QuanLyDienNuocAction())
   
      // ActionsValue()
  
    },[])
  //temporary
  

  // console.log(dataBiding);

  const xulyData=(myArray,chunk_size)=>{
    let results = [];

    while (myArray.length) {
        results.push(myArray.splice(0,chunk_size));
    }

    return results
  }


  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Wid props={tableDataDefault}  type="user" />
         
        </div>
        <div className="charts">
          <Card />
          <Chart  title="Số Liệu Điện,Nước Theo Tháng " aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Số liệu ghi nhận từng ngày </div>
          <Datatable />
          {/* <Table data={dataDefault}/> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
