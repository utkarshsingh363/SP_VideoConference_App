import React, { useState } from "react";
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
import Paper from "@material-ui/core/Paper";
import MenuItem from '@material-ui/core/MenuItem';
import OtpInput from "react-otp-input";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import OtpWindow from "../../components/OtpWindow/OtpWindow";
import Backdrop from "../../components/Backdrop/Backdrop";
import SabMeetsLogo from "../../static/img/sabmeets.jpeg";



const numOfEmployees = [
  {
    value: '0-50',
    label: '0 to 50',
  },
  {
    value: '50-100',
    label: '50 to 100',
  },
  {
    value: '100-500',
    label: '100 to 500',
  },
  {
    value: '500-1000',
    label: '500 to 1000',
  },
  {
    value: '1000+',
    label: '1000+',
  }
];


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://sabpaisa.in/">
        SabPaisa
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
  const [openOtp, setOtp] = React.useState(false);
  const [orgState, setOrgState]=React.useState(false);
  const [indiState, setIndiState]=React.useState(false);

  const toggleOrgState=()=>{
    if(orgState==false){
      setOrgState(!orgState)
    }else if(orgState==true){
      setOrgState(!orgState)
    }
    console.log(orgState)
  }

  const toggleIndiState=()=>{
    if(indiState==false){
      setIndiState(!indiState)
    }else if(indiState==true){
      setIndiState(!indiState)
    }
    console.log(indiState)
  }

  const otpOpen = () => {
    setOtp(true);
    console.log(openOtp);
  };

  const otpClose = () => {
    setOtp(false);
    console.log(openOtp);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(value);
    // console.log(index);
  };



function OrganizaionForm(props){
  const [orgName,setOrgName]=React.useState('')
  const [registererName,setRegistererName]=React.useState('')
  const [registererDesignation,setDesignation]=React.useState('')
  const [registererEmail,setEmail]=React.useState('')
  const [registererMobile,setMobile]=React.useState('')
  const [numEmployees,setNumOfEmployee]=React.useState('0 to 50')

  const onSubmit=()=>{
    console.log({
      "OrganizationName":orgName,
      "RegistererName":registererName,
      "Designation":registererDesignation,
      "RegistererEmail":registererEmail,
      "RegistererMobile":registererMobile,
      "NumberOfEmployees":numEmployees
    })
  }
    if(props.page==false){
      return(
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              autoComplete="organizationName"
              name="organizationName"
              variant="outlined"
              required
              fullWidth
              id="organizationName"
              label="Name of Organization"
              // autoFocus
              value={orgName}
              onChange={(e)=>setOrgName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="registererName"
              label="Name of Registerer"
              name="registererName"
              autoComplete="registererName"
              value={registererName}
              // autoFocus
              onChange={e=>setRegistererName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="designation"
              label="Designation of Person"
              name="designation"
              value={registererDesignation}
              onChange={e=>setDesignation(e.target.value)}
              autoComplete="designation"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Id of Registerer"
              name="email"
              value={registererEmail}
              onChange={e=>setEmail(e.target.value)}
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="mobile"
              label="Mobile number of Registerer"
              name="mobile"
              value={registererMobile}
              onChange={e=>setMobile(e.target.value)}
              autoComplete="mobile"
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="numEmployees"
              name="numEmployees"
              autoComplete="numEmployees"
              select
              label="No. of Employees"
              required
              fullWidth
              value={numEmployees}
              onChange={e=>setNumOfEmployee(e.target.value)}
              helperText="Please select your Organization's size"
              variant="filled"
            >
              {numOfEmployees.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox value="allowExtraEmails" color="primary" />
              }
              label="I have read & agree to the Privacy Policy of SabMeets."
            />
          </Grid>
        </Grid>
        <Button
          // type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          // onClick={props.listen}
          onClick={toggleOrgState}
          // onClick={onSubmit}
          
        >
          Next
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
      );
    }else if(props.page==true){
      return(
        <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <Paper elevation={0}>
              <Typography variant="h7">
                  What is your Organisation type?
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="companyType"
              label="Company Type"
              name="companyType"
              autoComplete="companyType"
            />
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0}>
              <Typography variant="h7">
                  What is your Organisation Domain?
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="domainType"
              label="Domain Type"
              name="domainType"
              autoComplete="domainType"
            />
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0}>
              <Typography variant="h7">
                  We have Sent an OTP on your Organization mail
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <OtpInput
              separator={
                <span>
                  <strong></strong>
                </span>
              }
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0 1rem",
                fontSize: "2rem",
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.3)"
              }}
              numInputs={6}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="refCode"
              label="Reffral Code (Optional)"
              name="refCode"
              autoComplete="refCode"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox value="allowExtraEmails" color="primary" />
              }
              label="I have read & agree to the Privacy Policy of SabMeets."
            />
          </Grid>
        </Grid>
        <Button
          // type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          // onClick={props.listen}
          // onClick={toggleOrgState}  
          onClick={onSubmit}
        >
          Verify
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
      );
    }
}


function IndividualForm(props){
  if(props.page==false){
    return(
      <form className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12} >
          <TextField
            autoComplete="number"
            name="number"
            variant="outlined"
            required
            fullWidth
            id="number"
            label="Mobile Number"
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="fullName"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email-Id"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
          />
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0}>
            <Typography variant="h7">
                What is your Organization Name?
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="organizationName"
            label="Organization Name"
            name="organizationName"
            autoComplete="organizationName"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox value="allowExtraEmails" color="primary" />
            }
            label="I have read & agree to the Privacy Policy of SabMeets."
          />
        </Grid>
      </Grid>
      <Button
        // type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        // onClick={props.listen}
        onClick={toggleIndiState}
      >
        Register
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link href="/signin" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </form>
    );
  }else if(props.page==true){
    return(
      <form className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={0}>
            <Typography variant="h7">
                We have Sent an OTP on your Mobile Number
            </Typography>
          </Paper>
          </Grid>
        <Grid item xs={12}>
          <OtpInput
            separator={
              <span>
                <strong></strong>
              </span>
            }
            inputStyle={{
              width: "3rem",
              height: "3rem",
              margin: "0 1rem",
              fontSize: "2rem",
              borderRadius: 4,
              border: "1px solid rgba(0,0,0,0.3)"
            }}
            numInputs={6}
        />
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={0}>
            <Typography variant="h7">
                Please enter your Employee ID
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="employeeId"
            label="Employee Id"
            name="employeeId"
            autoComplete="employeeId"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="refCode"
            label="Reffral Code (Optional)"
            name="refCode"
            autoComplete="refCode"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox value="allowExtraEmails" color="primary" />
            }
            label="I have read & agree to the Privacy Policy of SabMeets."
          />
        </Grid>
        </Grid>
      
      <Button
        // type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        // onClick={props.listen}
        onClick={toggleOrgState}  
      >
        Send Request
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link href="/signin" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </form>
    );
  }
}




  return (
    <div className={classes.root}>
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
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <OrganizaionForm page={orgState}/>
          <Box mt={8}>
            <Copyright />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <IndividualForm page={indiState}/>
          <Box mt={8}>
            <Copyright />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Mobile No"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  name="fullName"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email-ID"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <Paper elevation={0}>
                  <Typography variant="h7">
                      Name of Organization Invited you?
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="organizationName"
                  label="Organization Name"
                  name="organizationName"
                  autoComplete="organizationName"
                />
              </Grid>
            </Grid>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={props.listen}
            >
              Send OTP
            </Button>
            {/* <OtpWindow show={openOtp} closed={otpClose} />
            <Backdrop show={openOtp} /> */}
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
          <Box mt={8}>
            <Copyright />
          </Box>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

// **************************************************************************************************

export default function SignUp() {
  const classes = useStyles();
  const [getOtp, setOtp] = React.useState(false);

  const listenOtp = otp => {
    setOtp(otp);
    console.log(getOtp);
  };

  const changeOpt = () => {
    setOtp(false);
  };


  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <div>
          <img src={SabMeetsLogo} width="100" height="100" />
        </div>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <FullWidthTabs listen={listenOtp}/>
        <OtpWindow show={getOtp} closed={changeOpt} />
        <Backdrop show={getOtp} />
      </div>
    </Container>
  );
}
