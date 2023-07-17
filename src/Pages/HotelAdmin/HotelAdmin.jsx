
import "./hotelAdmin.css";
import { hotelRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { userColumns, userRows } from "../../datatablesource";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import Topbar from "../../Components/topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DataTable from "../../Components/datatableHotel/Datatable";

const HotelAdmin = () => {
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

export default HotelAdmin;