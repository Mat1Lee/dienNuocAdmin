import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import ChartItem from "../../components/chart/ChartItem";
import List from "../../components/table/Table";
import { QuanLyDienNuocThangAction } from "../../context/redux/action/QuanLyDnAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GIA_DIEN_1, GIA_DIEN_2, GIA_DIEN_3, GIA_DIEN_4, GIA_DIEN_5 } from "../../context/redux/types/AdminTypes";
import { GIA_NUOC1, GIA_NUOC2, GIA_NUOC3, GIA_NUOC4 } from "../../context/redux/types/AdminTypes";
const Single = (props) => {
  const data = []
  const { tableDataMonth } = useSelector(state => state.QuanLyDienNuocReducer)
  console.log(tableDataMonth);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(QuanLyDienNuocThangAction())
  }, [])

  const giaSoDien = (data) => {
    let thanhTien = 0;
    if (0 < data && data <= 50) { return thanhTien = data * GIA_DIEN_1 }
    else if (50 < data && data <= 100) {
      return thanhTien = ((data - 50) * GIA_DIEN_2 + (50) * GIA_DIEN_1)
    } else if (100 < data && data <= 200) {
      return thanhTien = 50 * GIA_DIEN_1 + 100 * GIA_DIEN_2 + (data - 100) * GIA_DIEN_3
    }
    else {
      thanhTien = 0
    }
  }
  const giaSoNuoc = (data) => {
    let thanhTien = 0;
    if (0 < data && data <= 10) { return thanhTien = data * GIA_NUOC1 }
    else if (10 < data && data <= 20) {
      return thanhTien = ((data - 50) * GIA_NUOC2 + (50) * GIA_NUOC1)
    } else if (20 < data && data <= 30) {
      return thanhTien = 50 * GIA_NUOC1 + 100 * GIA_NUOC2 + (data - 100) * GIA_NUOC3
    }
    else {
      thanhTien = 0
    }
  }

  const data1 = []

  // tableDataMonth?.map((data,index)=>{
  //   data1?.push({'name':data?.key , 'Total':((giaSoDien(data?.data.Dien))+(giaSoNuoc(data?.data.Nuoc))).toFixed(2)})
  // })
  tableDataMonth?.map((data, index) => {
    data1?.push({ 'name': data?.key, 'Price': ((giaSoDien(data?.data.Dien)) + (giaSoNuoc(data?.data.Nuoc))).toFixed(2) })
  })
  console.log(data1);
  const renderHoaDon = () => {
    return data1.map((data, index) => {
      return <>
        <div className="left">
          
          <div className="item col-6">

            <div className="details">
              <h1 className="itemTitle">Hóa Đơn Tiền Điện Tháng {data.name[5]}</h1>
              <p>{data.Price} Nghìn đồng</p>
              <div className="detailItem">
                <span className="itemKey">Date:</span>
                <span className="itemValue">
                  {data.name}
                </span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+1 2345 67 89</span>
              </div>
             
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Viet Nam</span>
              </div>
            </div>
            <hr />
          </div>

        </div>



      </>
    })

  }
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
         
              {renderHoaDon()}
       
          
          {/* <div className="right">
            <ChartItem props={data} aspect={3 / 1} title="User Spending" />
          </div> */}
        </div>
        {/* <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div> */}
      </div>
    </div>
  );
};

export default Single;
