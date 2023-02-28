import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import "./sidepanel.css";
const Sidepanel = ({ popne, selectedUser }) => {
  //   console.log("popne", selectedUser);
  const [state, setState] = useState(false);
  const toggleDrawer = (popne) => {
    setState(popne);
  };
  useEffect(() => {
    toggleDrawer(popne);
  }, [popne]);
  const { image, firstName, id, email, phone, company } = selectedUser;
  //   console.log("company", company);
  return (
    <div>
      <React.Fragment key={"right"}>
        <SwipeableDrawer
          anchor={"right"}
          open={state}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          <Box sx={{ width: 450 }} role="presentation">
            <div>
              <div className="parent-sec">
                <h2>User Details</h2>
                <div className="sec-one">
                  <div>
                    <img className="side-img" src={image} alt="user" />
                  </div>
                  <div className="sec-child">
                    <h4>{firstName}</h4>
                    <p>user id: {id} </p>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="parent-sec">
                <div className="acc-two">
                  <AccountCircleIcon />
                  <h4>Basic and account details</h4>
                </div>
                <div>
                  <h4>{firstName}</h4>
                  <p>full name</p>
                  <br />
                  <h4>{company?.title}</h4>
                  <p>User role</p>
                </div>
              </div>
              <Divider />
            </div>

            <Divider />
            <div className="parent-sec">
              <div className="acc-two">
                <ContactPageIcon />
                <h4>User data</h4>
              </div>    
              <div>
                <h4>{email}</h4>
                <p>Email Id</p>
                <br />
                <h4>{phone}</h4>
                <p>Phone</p>
              </div>
            </div>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default Sidepanel;
