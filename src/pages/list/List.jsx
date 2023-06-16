import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Single from "../single/Single"
const List = () => {
  return (
    <div className="list">
      {/* <Sidebar/> */}
      <div className="listContainer">
        {/* <Navbar/> */}
        <Single></Single>
      </div>
    </div>
  )
}

export default List