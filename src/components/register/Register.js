import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./register.css";
const useStyles = {
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
  },
  form: {
    width: "100%",
    marginTop: "10px",
  },
  submit: {
    margin: "20px 0",
  },
};

const Register = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
    // console.log("registered user", user);
  };
  return (
    <Grid container component="main" style={useStyles.root}>
      <Grid item xs={false} sm={6} md={6} style={useStyles.image} />
      <Grid className="reg-parent" item xs={12} sm={6} md={6}>
        <div className="paper-sec" style={useStyles.paper}>
          <img className="logo-img" src="/assets/images/logo.svg" />
          <Typography component="h5" variant="h5">
            Register to Labs Monitoring System
          </Typography>
          <form style={useStyles.form} onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Username"
              name="name"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={useStyles.submit}
            >
              register
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default Register;
