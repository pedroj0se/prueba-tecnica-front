export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Nombre",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "direction",
    headerName: "Direccion",
    width: 230,
  },  

  {
    field: "room",
    headerName: "Habitaciones",
    width: 120,
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Sno0w",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    room: "1",
    status: "Activo",
    direction: "1snow@gmail.com",
    age: 35
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    room: "1",
    direction: "2snow@gmail.com",
    status: "Pendiente",
    age: 42
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    direction: "3snow@gmail.com",
    room: "1",
    status: "Pendiente",
    age: 45
  },
  {
    id: 4,
    username: "Stark",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    direction: "4snow@gmail.com",
    room: "1",
    status: "Activo",
    age: 16
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    direction: "5snow@gmail.com",
    room: "1",
    status: "Pendiente",
    age: 22
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    direction: "6snow@gmail.com",
    room: "1",
    status: "Activo",
    age: 15
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    direction: "7snow@gmail.com",
    room: "1",
    status: "Pendiente",
    age: 44
  },
  {
    id: 8,
    username: "Frances",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    direction: "8snow@gmail.com",
    room: "1",
    status: "Activo",
    age: 36
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    direction: "snow@gmail.com",
    room: "1",
    status: "Pendiente",
    age: 65
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    direction: "snow@gmail.com",
    room: "1",
    status: "Activo",
    age: 65
  },
];




export const roomColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Nombre Hotel",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "type",
    headerName: "Tipo de habitacion",
    width: 230,
  },  

  {
    field: "room",
    headerName: "Habitaciones",
    width: 120,
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const roomRows = [
  {
    id: 1,
    username: "Sn3wo0w",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    room: "1",
    status: "Activo",
    type: "Cama matrimonial",
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    room: "1",
    type: "Cama matrimonial",
    status: "Pendiente",
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    type: "Cama matrimonial",
    room: "1",
    status: "Pendiente",
  },
  {
    id: 4,
    username: "Stark",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    type: "Cama matrimonial",
    room: "1",
    status: "Activo",
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    type: "Cama matrimonial",
    room: "1",
    status: "Pendiente",
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    type: "Cama matrimonial",
    room: "1",
    status: "Activo",
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    type: "Cama matrimonial",
    room: "1",
    status: "Pendiente",
  },
  {
    id: 8,
    username: "Frances",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    type: "Cama matrimonial",
    room: "1",
    status: "Activo",
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    type: "Cama matrimonial",
    room: "1",
    status: "Pendiente",
  },
  {
    id: 10,
    username: "Rooe",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",
    type: "Cama matrimonial",
    room: "1",
    status: "Activo",
  },
];
