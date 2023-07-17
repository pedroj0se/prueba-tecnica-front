import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './app.css';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import List from "./Pages/list/List";
import Hotel from "./Pages/Hotel/Hotel";
import HomeAdmin from "./Pages/HomeAdmin/HomeAdmin";
import HotelAdmin from "./Pages/HotelAdmin/HotelAdmin";
import RoomAdmin from "./Pages/RoomAdmin/RoomAdmin";
import HotelList from "./Pages/HotelList/HotelList";
import NewHotel from "./Pages/newHotel/NewHotel";
import RoomList from "./Pages/RoomList/RoomList";
import NewRoom from "./Pages/NewRoom/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="admin">
            <Route index element={<HomeAdmin />} />
          </Route>

          <Route path="/admin/hotel">
            <Route index element={<HotelAdmin />} />
          </Route>

          <Route path="/admin/rooms">
            <Route index element={<RoomAdmin />} />
          </Route>

          <Route path="/admin/hotel/edit">
            <Route index element={<HotelList />} />
          </Route>

          <Route path="/admin/hotel/newHotel">
            <Route index element={<NewHotel />} />
          </Route>

          <Route path="/admin/room/edit">
            <Route index element={<RoomList />} />
          </Route>

          <Route path="/admin/room/new">
            <Route index element={<NewRoom />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
