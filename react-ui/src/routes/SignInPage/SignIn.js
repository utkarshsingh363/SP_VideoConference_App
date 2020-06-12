import React,{useState,useEffect} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import axios from 'axios'

import SabMeetsLogo from "../../static/img/sabmeets.jpeg";

import SabpaisaCopyRight from '../../components/SabPaisaCopyRight/SabPaisaCopyRight'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect, useDispatch } from "react-redux";

import { auth } from "../../store/auth";


// Added SabpaisaCopyRight Component 

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// **************************************************************************************************




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    
  };

  const handleChangeIndex = index => {
    setValue(index);
    console.log(index);
  
  };

  const onClickLoginButton=()=>{
       // console.log(mobile);
       const data = {
        mobileNumber: String(mobile),
        password: String(password),
      };
      console.log("yo", data);
      console.log(props.auth)
      props.auth(data);
      // props.increment();
  }

  const [mobile,setMobile]=useState("")
  const [password,setPassword]=useState("")

  const notify = (message) => toast(message);


  return (
    <div className={classes.root}>
      <ToastContainer />
      {/* <AppBar position="static" color="default"> */}
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="ORGANIZATION" {...a11yProps(0)} />
        <Tab label="INDIVIDUAL" {...a11yProps(1)} />
        <Tab label="GUEST" {...a11yProps(2)} />
      </Tabs>
      {/* </AppBar> */}
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        // onChangeIndex={handleChangeIndex}
      >
       
        {/*Tab for organization*/}

        <TabPanel value={value} index={0} dir={theme.direction}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mobile"
              label="Mobile No."
              name="mobile"
              autoComplete="mobile"
              autoFocus
              onChange={(e)=>setMobile(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
              onClick={onClickLoginButton}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
          <Box mt={8}>
            <SabpaisaCopyRight />
          </Box>
        </TabPanel>
        
         {/*Tab for individual*/}

        <TabPanel value={value} index={1} dir={theme.direction}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Mobile No"
              name="phone"
              autoComplete="phone"
              autoFocus
              onChange={(e)=>setMobile(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onClickLoginButton}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
          <Box mt={8}>
            <SabpaisaCopyRight />
          </Box>
        </TabPanel>
        
        {/*Tab for guests*/}
        
        <TabPanel value={value} index={2} dir={theme.direction}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Mobile No"
              name="phone"
              autoComplete="phone"
              autoFocus
            />
            {/* <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            /> */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Continue
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
          <Box mt={8}>
            <SabpaisaCopyRight />
          </Box>
        </TabPanel>
     
      </SwipeableViews>
    </div>
  );
}

// **************************************************************************************************




// **************************************************************************************************


 function SignUp(props) {
  const classes = useStyles();
  

    return (
    
    <Container component="main" maxWidth="xs">
      {/* {console.log("this is the props", props)} */}
      <CssBaseline />
      {(props.currentUser.currentUser)?props.history.replace("/"):""}
     
      <div className={classes.paper}>
        <div>
          <img src={SabMeetsLogo} width="100" height="100" />
        </div>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        <FullWidthTabs {...props} />
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  console.log(state.auth.auth)
  return {
    currentUser: state.auth.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    auth: (data) => {
      dispatch(auth(data));
    },
  };
};


//state.entities.bugs.list

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
