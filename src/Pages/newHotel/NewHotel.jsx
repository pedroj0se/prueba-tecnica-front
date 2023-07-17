import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";
import "./newHotel.css";

export default function NewHotel() {
  return (
    <>
      <Topbar />
      <div className="containerAdmin">
        <Sidebar />
        <div className="Admin">
          <div className="newUser">
            <h1 className="newUserTitle">Nuevo Hotel</h1>
            <form className="newUserForm">
              <div className="newUserItem">
                <label>Nombre</label>
                <input type="text" placeholder="Paraíso Azul" />
              </div>
              <div className="newUserItem">
                <label>Email</label>
                <input type="email" placeholder="ParaísoAzul@gmail.com" />
              </div>
              <div className="newUserItem">
                <label>Phone</label>
                <input type="text" placeholder="+1 123 456 78" />
              </div>
              <div className="newUserItem">
                <label>Direccion</label>
                <input type="text" placeholder="New York | USA" />
              </div>
              
              <div className="newUserItem">
                <label>Active</label>
                <select className="newUserSelect" name="active" id="active">
                  <option value="yes">Si</option>
                  <option value="no">No</option>
                </select>
              </div>
              <button className="newUserButton">Crear</button>
            </form>
          </div>
        </div>
      </div>
    </>

  );
}
