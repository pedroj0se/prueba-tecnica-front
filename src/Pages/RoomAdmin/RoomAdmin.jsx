

import { hotelRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { roomRows } from "../../datatablesource";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DataTable from "../../Components/datatableRooms/Datatable";

const RoomAdmin = () => {
    const [data, setData] = useState(roomRows);

    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };
  
    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to="/users/test" style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Eliminar
              </div>
            </div>
          );
        },
      },
    ];
    return (
        <>
            <Topbar />
            <div className="containerAdmin">
                <Sidebar />
                <div className="Admin">
                    <DataTable />
                </div>
            </div>
        </>
    );
};

export default RoomAdmin;