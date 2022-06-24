import { Grid, Snackbar } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Images/entrust-logo.png";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Customizedsnackbars from "../../Components/Snackbar";
const initialState = {
  username: "admin",
  password: "admin",
};

const Login = () => {
  const [loginData, setLoginData] = useState(initialState);
  const navigate = useNavigate();
  const [openSla, setOpenSla] = useState(false);
  const [slaMessage, setMessage] = useState('');

  const handleInputChange = (event, property) => {
    setLoginData({ ...loginData, [property]: event.target.value });
  };
  const onSubmit = () => {
    if (loginData.username === "admin" && loginData.password === "admin") {
      navigate("/license");
    } else {
      setMessage("Incorrect user credential.");
      setOpenSla(true);
    }
  };

  const closeSLA = () => {
    setOpenSla(false)
  };
  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100%" }}
    >
      <Grid
        item
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        sx={{
          width: "600px",
          minHeight: "440px",
          background: "#fff",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          borderRadius: "4px",
          borderTop: "solid 2px #690070",
        }}
      >
        <Grid item container justifyContent="center" alignItems="center" xs={3}>
          <img src={Logo} alt="Entrust Logo" width={280} loading="lazy" />
        </Grid>
        <Divider
          style={{
            width: "100%",
            height: "1px",
          }}
        />
        <Grid
          xs
          item
          container
          direction="column"
          sx={{ padding: "4vh 4vh 0" }}
        >
          <Grid item container direction="column" xs={3}>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom fontWeight={600}>
                Login
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                Login to access license POC.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            direction="column"
            xs={6}
          >
            <Grid item mb={2}>
              <Customizedsnackbars close={closeSLA} openSla={openSla} type="error" message={slaMessage} />
            </Grid>
            <Grid item mb={2}>
              <TextField
                label="Enter User ID"
                variant="standard"
                size="small"
                required
                fullWidth
                value={loginData.username}
                onChange={(e) => handleInputChange(e, "username")}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Enter Password"
                variant="standard"
                size="small"
                required
                fullWidth
                type="password"
                value={loginData.password}
                onChange={(e) => handleInputChange(e, "password")}
              />
            </Grid>
          </Grid>
          <Grid
            xs
            item
            container
            direction="column"
            justifyContent="start"
            alignItems="stretch"
          >
            <Button variant="contained" onClick={onSubmit}>
              Login
            </Button>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
