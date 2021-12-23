import {
  AppBar,
  Avatar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { PersonOutlineOutlined, Search } from "@material-ui/icons";
import logo from "./static/images/logo.png";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "hsla(120,0%,90.2%,.5)"
  },
  person: {
    display: "flex",
    alignItems: "center",
  },
  btn:{
    backgroundColor: "none",
    color: "white",
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.person}>
          <PersonOutlineOutlined />
          <Typography variant="h6">Test</Typography>
        </div>

        <div className={classes.buttons} >
          <Button className={classes.btn}>Home</Button>
          <Button className={classes.btn}>Logout</Button>
        </div>

        <div className={classes.logo}>
          <img src={logo} alt="logo" width={100} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
