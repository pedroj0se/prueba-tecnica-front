import Sidebar from "../../Components/sidebar/Sidebar";
import Topbar from "../../Components/topbar/Topbar";
import "./NewRoom.css";

export default function NewRoom() {
  return (
    <>
      <Topbar />
      <div className="containerAdmin">
        <Sidebar />
        <div className="Admin">
          <div className="newUser">
            <h1 className="newUserTitle">Nueva Habitacion</h1>
            <form className="newUserForm">
              <div className="newUserItem">
                <label>Nombre</label>
                <input type="text" placeholder="Paraíso Azul" />
              </div>
              <div className="newUserItem">
                <label>Tipo de Habitacion</label>
                <input type="text" placeholder="Cama doble" />
              </div>
              <div className="newUserItem">
                <label>Habitaciones</label>
                <input type="text" placeholder="2" />
              </div>

              <div className="newUserItem">
                <label>Costo Base</label>
                <input type="text" placeholder="$2.000" />
              </div>
              
              <div className="newUserItem">
                <label>Direccion</label>
                <input type="text" placeholder="New York | USA" />
              </div>

              <div className="newUserItem">
                <label>Impuesto</label>
                <input type="text" placeholder="IVA: 18%" />
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
