import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import Sidepanel from "../side-panel/Sidepanel";
import "./dashboard.css";
const Dashboard = () => {
  const [rows, setRows] = useState({ users: [] });
  const [selectedUser, SetselectedUser] = useState({});
  const [open, setOpen] = useState(false);
  const avatar = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };

  const columns = [
    {
      field: "image",
      headerName: "",
      renderCell: ({ value }) => (
        <img src={value} style={avatar} alt="User avatar" />
      ),
    },
    {
      field: "firstName",
      headerName: "Name",
      width: 250,
    },
    { field: "gender", headerName: "Gender", width: 250 },
    { field: "email", headerName: "Email", width: 250 },
  ];
  const handleRowClick = (user) => {
    setOpen(!open);
    console.log(user.row);
    SetselectedUser(user.row);
  };
  const handleFetch = () => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setRows({ users: response.data.users });
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <div className="parent" style={{ height: "100vh" }}>
        <div className="heding">
          <h2>Users</h2>
          <p>Here are all the users for this project</p>
        </div>
        <DataGrid
          rows={rows?.users}
          columns={columns}
          onRowClick={handleRowClick}
          components={{ Toolbar: GridToolbar }}
        />
        <Sidepanel popne={open} selectedUser={selectedUser} />
      </div>
    </>
  );
};

export default Dashboard;
