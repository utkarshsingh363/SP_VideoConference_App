import React, { useState, Fragment } from "react";
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
import OtpInput from "react-otp-input";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
// import AppBar from '@material-ui/core/AppBar';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import OtpWindow from "../../components/OtpWindow/OtpWindow";
import Backdrop from "../../components/Backdrop/Backdrop";
import SabMeetsLogo from "../../static/img/sabmeets.jpeg";
import SabpaisaCopyRight from '../../components/SabPaisaCopyRight/SabPaisaCopyRight'
import Test from "../../components/Test/Test";


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
  const [orgState, setOrgState] = React.useState(false);
  const [indiState, setIndiState] = React.useState(false);


  //Organization Form:
  function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    function handleChange(e) {
      setValue(e.target.value)
    }
    return {
      value: value,
      onChange: handleChange
    };
  }
  const organizationName = useFormInput("")
  // const [organizationName,setOrganizationName]=useState('')
  const registererName = useFormInput("")
  const designation = useFormInput("")
  const email = useFormInput("")
  const numEmployees = useFormInput("")
  const mobileNo = useFormInput("")
  const setValueProp = {}
  // const [mobileNo,setMobileNo]=useState("")

  const onClickNextButton = () => {
    toggleOrgState()
    console.log(organizationName, registererName, designation, email, numEmployees, mobileNo)
  }

  const onClickOrganizationVerify = () => {

  }


  const toggleOrgState = () => {
    if (orgState == false) {
      setOrgState(!orgState)
    } else if (orgState == true) {
      setOrgState(!orgState)
    }
    console.log(orgState)
  }

  const toggleIndiState = () => {
    if (indiState == false) {
      setIndiState(!indiState)
    } else if (indiState == true) {
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



  function OrganizaionForm(props) {
    if (props.page == false) {
      return (
      <React.Fragment>
        <Test/>
         <Grid container spacing={2} >
            <Grid item xs={12}  >
              
              <TextField
                {...organizationName}
                autoComplete="organizationName"
                name="organizationName"
                variant="outlined"
                required
                fullWidth
                id="organizationName"
                label="Name of Organization"

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...registererName}
                variant="outlined"
                required
                fullWidth
                id="registererName"
                label="Name of Registerer"
                name="registererName"
                autoComplete="registererName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...designation}
                variant="outlined"
                required
                fullWidth
                id="designation"
                label="Designation of Person"
                name="designation"
                autoComplete="designation"
                onChange={designation.handleChange}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Id of Registerer"
                name="email"
                autoComplete="email"
                onChange={email.handleChange}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...numEmployees}
                variant="outlined"
                required
                fullWidth
                id="numEmployees"
                label="No. of Employees"
                name="numEmployees"
                autoComplete="numEmployees"
                onChange={numEmployees.handleChange}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                 {...mobileNo}
                variant="outlined"
                required
                fullWidth
                id="mobileNo"
                label="Mobile No."
                name="mobileNo"
                autoComplete="mobileNo"
                onChange={mobileNo.handleChange}

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
            onClick={onClickNextButton}
          >
            Next
        </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href='/signin' variant="body2">
                Already have an account? Sign in
            </Link>
            </Grid>
          </Grid>
          </React.Fragment>
      );
    } else if (props.page == true) {
      return (
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
            onClick={toggleOrgState}
          >
            Back
        </Button>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={props.listen}
            onClick={onClickOrganizationVerify}
          >
            Verify
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


  function IndividualForm(props) {
    if (props.page == false) {
      return (
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
    } else if (props.page == true) {
      return (
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
            {/* <Grid item xs={12}>
          <Paper elevation={0}>
            <Typography variant="h7">
                What is your Organization type?
            </Typography>
          </Paper>
          </Grid> */}
            {/* <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="companyType"
            label="Company Type"
            name="companyType"
            autoComplete="companyType"
          />
        </Grid> */}
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
            Back
      </Button>
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
          <OrganizaionForm page={orgState} />
          <Box mt={8}>
            <SabpaisaCopyRight />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <IndividualForm page={indiState} />
          <Box mt={8}>
            <SabpaisaCopyRight />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
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
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
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
              Sign Up
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
            <SabpaisaCopyRight />
          </Box>
        </TabPanel>

      </SwipeableViews>
    </div>
  );
}

// **************************************************************************************************

function SignUp() {
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
        <FullWidthTabs listen={listenOtp} />
        <OtpWindow show={getOtp} closed={changeOpt} />
        <Backdrop show={getOtp} />
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
    // auth: (data) => {
    //   dispatch(auth(data));
    // },
  };
};



export default SignUp