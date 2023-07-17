import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";
import "./RoomList.css";
import Topbar from '../../Components/topbar/Topbar';
import Sidebar from '../../Components/sidebar/Sidebar';

export default function RoomList() {
  return (
    <>
      <Topbar />
      <div className="containerAdmin">
        <Sidebar />
        <div className="Admin">

          <div className="user">
            <div className="userTitleContainer">
              <h1 className="userTitle">Editar Habitacion</h1>
              <Link to="/admin/hotel/newHotel">
                <button className="userAddButton">Crear</button>
              </Link>
            </div>
            <div className="userContainer">
              <div className="userShow">
                <div className="userShowTop">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RtZZQ6FQ_cNOh3YvfvovcJmhKVRjx25xeQgr_rwD&s"
                    alt=""
                    className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">Estrella Dorada</span>
                  </div>
                </div>
                <div className="userShowBottom">
                  <span className="userShowTitle">Detalles</span>
                  <div className="userShowInfo">
                    <PermIdentityIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">Estrella Dorada</span>
                  </div>
                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                    {/* <PhoneAndroid className="userShowIcon" /> */}
                    <span className="userShowInfoTitle">+1 123 456 67</span>
                  </div>
                  <div className="userShowInfo">
                    <MailOutlineIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">estrelladorada@gmail.com</span>
                  </div>
                  <div className="userShowInfo">
                    <LocationSearchingIcon className="userShowIcon" />
                    <span className="userShowInfoTitle">New York | USA</span>
                  </div>
                </div>
              </div>
              <div className="userUpdate">
                <span className="userUpdateTitle">Editar</span>
                <form className="userUpdateForm">
                  <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                      <label>Nombre</label>
                      <input
                        type="text"
                        placeholder="Estrella Dorada"
                        className="userUpdateInput"
                      />
                    </div>

                    <div className="userUpdateItem">
                      <label>Tipo de habitacion</label>
                      <input
                        type="text"
                        placeholder="EstrellaDorada@gmail.com"
                        className="userUpdateInput"
                      />
                    </div>
                    <div className="userUpdateItem">
                      <label>Habitaciones</label>
                      <input
                        type="text"
                        placeholder="1"
                        className="userUpdateInput"
                      />
                    </div>
                    <div className="newUserItem">
                      <label>Activo</label>
                      <select className="newUserSelect" name="active" id="active">
                        <option value="yes">Si</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                      <img
                        className="userUpdateImg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RtZZQ6FQ_cNOh3YvfvovcJmhKVRjx25xeQgr_rwD&s"
                        alt=""
                      />
                      <label htmlFor="file">
                        <PublishIcon className="userUpdateIcon" />
                      </label>
                      <input type="file" id="file" style={{ display: "none" }} />
                    </div>
                    <button className="userUpdateButton">Actualizar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
