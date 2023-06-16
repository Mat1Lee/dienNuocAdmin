import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import { useDispatch } from "react-redux";


import { useFormik } from "formik";
import { signOut } from "firebase/auth";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext,useState } from "react";
import { CaiDatPhoneAction, CaiDatVlaueAction } from "../../context/redux/action/QuanLyDnAction";
import { auth } from "../../fireBase/FireBase-congig";


const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Giám Sát Điện,Nước</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <SettingsApplicationsIcon className="icon" onClick={() => setModalShow(true)} />
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <span>Setting</span>
          </li>
          
          
         
          
          <Link to="/invoices" style={{ textDecoration: "none" }}>
            <li>
              <LocalAtmIcon className="icon" />
              <span>Invoice</span>
            </li>
          </Link>
          <Link to='/contact' style={{textDecoration:'none'}}> 
          <li>
            <CreditCardIcon className="icon" />
            <span>Contact</span>
            </li>
       
          </Link>
          
          
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
<ExitToAppIcon onClick={()=>signOut(auth)}/>
      </div>  
      
    </div>
    
  );
};

export default Sidebar;

function MyVerticallyCenteredModal(props) {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      hanMuc: '',
      phone: '',
    },
   
  })

  return (

    <>
     
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Cài Đặt 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Nhập Hạn Mức</h4>
            <input onChange={formik.handleChange} value={formik.values.hanMuc} type="number" name="hanMuc" id="hanMuc" placeholder="nhap gia tri han muc"/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{
              dispatch(CaiDatVlaueAction(formik.values))
              // dispatch(CaiDatPhoneAction(formik.values))
            }} className='btn btn-primary'  type='submit'>
              Submit
            </Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
          <Modal.Body>
            <h4>Nhập Số Điện Thoại</h4>
            <input onChange={formik.handleChange} value={formik.values.phone} type="number" name="phone" id="phone" placeholder="nhap so dien thoai"/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={()=>{
              // dispatch(CaiDatVlaueAction(formik.values))
              dispatch(CaiDatPhoneAction(formik.values))
            }} className='btn btn-primary'  type='submit'>
              Submit
            </Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal> 
      
    </>
  );
}