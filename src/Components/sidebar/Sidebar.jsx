import "./sidebar.css";
import { Link } from "react-router-dom";
import HotelIcon from '@mui/icons-material/Hotel';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin" className="link">
            <li className="sidebarListItem active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <Link to="/admin/hotel" className="link">
              <li className="sidebarListItem">
                <HotelIcon className="sidebarIcon" />
                Hotel
              </li>
            </Link>
            <Link to="/admin/rooms" className="link">
              <li className="sidebarListItem">
                <BedroomParentIcon className="sidebarIcon" />
                Habitaciones
              </li>
            </Link>
          </ul>
        </div>
        
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Settings</h3>
          <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem">
              <LogoutIcon className="sidebarIcon" />
              Log Out
            </li>
          </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
