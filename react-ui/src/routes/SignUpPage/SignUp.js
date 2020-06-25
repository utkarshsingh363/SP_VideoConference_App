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
import SabpaisaCopyRight from "../../components/SabPaisaCopyRight/SabPaisaCopyRight";
import Test from "../../components/Test/Test";

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import RingLoader from "react-spinners/RingLoader";
import { signUpStep1 } from "../../store/components/signup";
import { connect, useDispatch } from "react-redux";
import Axios from "axios";
import { toast, ToastContainer } from "react-toastify";

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
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function FullWidthTabs(props) {
  const notify = (message) => toast(message);
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [openOtp, setOtp] = React.useState(false);
  const [orgState, setOrgState] = React.useState(false);
  const [indiState, setIndiState] = React.useState(false);

  //Organization Form:
  function useFormInput(initialValue, type = "text") {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState("");
    const typeForField = type;
    function handleChange(e) {
      setError(false);
      setHelperText("");
      setValue(e.target.value);
    }
    return {
      typeForField: typeForField,
      value: value,
      onChange: handleChange,
      error: error,
      setError: setError,
      helperText: helperText,
      setHelperText: setHelperText,
    };
  }

  const organizationName = useFormInput("");
  // const [organizationName,setOrganizationName]=useState('')
  const registererName = useFormInput("");
  const designation = useFormInput("");
  const o_email = useFormInput("", "email");
  const numOfEmployees = useFormInput("", "number");
  const o_mobileNo = useFormInput("", "mobile");
  const companyType = useFormInput("");
  const domainType = useFormInput("");
  const referral = useFormInput("");
  const otp = useFormInput("");
  const o_password = useFormInput("");
  const agreementCheckBox = useFormInput(false);
  // const [mobileNo,setMobileNo]=useState("")

  const [validationCheck, setValidationCheck] = useState(false);

  const formValidation = (field) => {
    // field[0].setError(true);
    // field[0].setHelperText("This field cannot be empty");

    var validation = true;
    for (var i = 0; i < field.length; i++) {
      console.log(validation);
      console.log(field[i].value);
      if (field[i].value == "") {
        field[i].setError(true);
        field[i].setHelperText("This feild cannot be empty");
        validation = false;
        continue;
      }
      if (field[i].typeForField === "number") {
        if (isNaN(field[i].value)) {
          field[i].setError(true);
          field[i].setHelperText("Please enter a number");
          validation = false;
        }
      } else if (field[i].typeForField === "mobile") {
        var r = /^[6-9]\d{9}$/;

        if (!r.test(String(field[i].value))) {
          field[i].setError(true);
          field[i].setHelperText("Please enter a valid Mobile No.");
          validation = false;
        }
      } else if (field[i].typeForField === "email") {
        var email_r = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email_r.test(field[i].value)) {
          field[i].setError(true);
          field[i].setHelperText("Please enter a valid Email Id ");
          validation = false;
        }
      }
    }
    return validation;
  };
  const onClickNextButton = () => {
    var checkingValidation = formValidation([
      organizationName,
      registererName,
      designation,
      o_email,
      numOfEmployees,
      o_mobileNo,
    ]);
    // var checkingValidation = formValidation([]);
    // alert(checkingValidation);
    if (checkingValidation) {
      // toggleOrgState();
      Axios.post("https://wallet.sabpaisa.in/sabMeets/signup", {
        organisationName: organizationName.value,
        registererName: registererName.value,
        registererDesignation: designation.value,
        emailId: o_email.value,
        numberOfEmployees: numOfEmployees.value,
        mobileNumber: o_mobileNo.value,
        userType: "organisation",
      })
        .then((response) => {
          if (response.data.msg == "Information is saved") {
            notify("OTP is sent for verification");
            toggleOrgState();
          } else if (response.data.msg == "Given mail id already exist") {
            notify("Given Mail Id already exist");
            toggleOrgState();
          }
        })
        .catch((error) => {
          notify(error.message);
        });
    }
  };

  const onClickOrganizationVerify = () => {
    var checkingValidation = formValidation([companyType, domainType, otp]);
    if (checkingValidation) {
      Axios.post("https://wallet.sabpaisa.in/sabMeets/updateSignup", {
        companyType: companyType.value,
        domainType: domainType.value,
        referalCode: referral.value,
        otp: otp.value,
        emailId: o_email.value,
        password: o_password.value,
      })
        .then((response) => {
          if (response.data.msg == "Information is updated") {
            notify("Registered Successfully");
            setTimeout(() => {
              props.history.replace("/signin");
            }, 1000);
          } else {
            notify("Otp is not correct");
          }
        })
        .catch((error) => {
          notify(error.message);
        });
    }
  };

  //Individual Form
  const i_mobileNo = useFormInput("", "mobile");
  const i_name = useFormInput("");
  const i_email = useFormInput("", "email");
  const i_password = useFormInput("");
  const i_referral = useFormInput(" ");
  const i_otp = useFormInput("");
  const i_organisationName = useFormInput("");
  const i_employeeId = useFormInput("");

  const i_onClickSendRequest = () => {};

  //////////////////////////////

  const toggleOrgState = () => {
    if (orgState == false) {
      setOrgState(!orgState);
    } else if (orgState == true) {
      setOrgState(!orgState);
    }
    console.log(orgState);
  };

  const toggleIndiState = () => {
    if (indiState == false) {
      setIndiState(!indiState);
    } else if (indiState == true) {
      setIndiState(!indiState);
    }
    console.log(indiState);
  };

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

  const handleChangeIndex = (index) => {
    setValue(value);
    // console.log(index);
  };

  function OrganizaionForm(props) {
    if (props.page == false) {
      return (
        <React.Fragment>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...o_email}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Id of Registerer"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...numOfEmployees}
                  variant="outlined"
                  required
                  fullWidth
                  id="numOfEmployees"
                  label="No. of Employees"
                  name="numOfEmployees"
                  autoComplete="numOfEmployees"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...o_mobileNo}
                  variant="outlined"
                  required
                  fullWidth
                  id="mobileNo"
                  label="Mobile No."
                  name="mobileNo"
                  autoComplete="mobileNo"
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
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </React.Fragment>
      );
    } else if (props.page == true) {
      return (
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper elevation={0}>
                <Typography variant="h7">
                  What is your Organisation type?
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...companyType}
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
                {...domainType}
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
              <TextField
                {...otp}
                variant="outlined"
                required
                fullWidth
                id="OTP"
                label="OTP"
                name="OTP"
                autoComplete="OTP"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...o_password}
                variant="outlined"
                required
                fullWidth
                type="password"
                id="password"
                label="Password"
                name="Password"
                autoComplete="Password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...referral}
                variant="outlined"
                fullWidth
                id="refCode"
                label="Referral Code (Optional)"
                name="refCode"
                autoComplete="refCode"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
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

  const onClickIndividualRegister = () => {
    var checkingValidation = formValidation([
      i_mobileNo,
      i_name,
      i_email,
      i_organisationName,
    ]);
    // var checkingValidation = formValidation([]);
    // alert(checkingValidation);
    if (checkingValidation) {
      // toggleOrgState();
      Axios.post("https://wallet.sabpaisa.in/sabMeets/signup", {
        organisationName: i_organisationName.value,
        registererName: i_name.value,
        emailId: i_email.value,
        mobileNumber: i_mobileNo.value,
        userType: "user",
      })
        .then((response) => {
          if (response.data.msg == "Information is saved") {
            notify("OTP is sent for verification on your mobile number");
            toggleIndiState();
          } else if (response.data.msg == "Given mail id already exist") {
            notify("Given Mail Id already exist");
          }
        })
        .catch((error) => {
          notify(error.message);
        });
    }
  };

  const onClickIndividualSubmit = () => {
    // toggleOrgState();
    Axios.post("https://wallet.sabpaisa.in/sabMeets/updateSignup", {
      employeeId: i_employeeId.value,
      referalCode: i_referral.value,
      emailId: i_email.value,
      mobileNumber: i_mobileNo.value,
      userType: "user",
      password: i_password.value,
      otp: i_otp.value,
    })
      .then((response) => {
        if (response.data.msg == "Information is updated") {
          notify("You have been registered Successfully");
          setTimeout(() => {
            props.history.replace("/signin");
          }, 1000);
        } else if (response.data.msg == "Wrong Otp or Email id") {
          notify(
            "Please enter a correct OTP or Do not change the email ID mentioned in the first step"
          );
        }
      })
      .catch((error) => {
        notify(error.message);
      });
  };

  function IndividualForm(props) {
    if (props.page == false) {
      return (
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                {...i_mobileNo}
                autoComplete="number"
                name="number"
                variant="outlined"
                required
                fullWidth
                id="i_mobile"
                label="Mobile Number"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...i_name}
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
                {...i_email}
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
              <Paper elevation={0}>
                <Typography variant="h7">
                  What is your Organization Name?
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...i_organisationName}
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
                control={<Checkbox value="allowExtraEmails" color="primary" />}
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
            onClick={onClickIndividualRegister}
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
              <TextField
                {...i_otp}
                variant="outlined"
                required
                fullWidth
                id="OTP"
                label="OTP"
                name="OTP"
                autoComplete="OTP"
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
                  Please enter your Employee ID
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...i_employeeId}
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
                {...i_password}
                variant="outlined"
                required
                fullWidth
                type="password"
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...i_referral}
                variant="outlined"
                fullWidth
                id="refCode"
                label="Referral Code (Optional)"
                name="refCode"
                autoComplete="refCode"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
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
            onClick={onClickIndividualSubmit}
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
      </Tabs>
      {/* </AppBar> */}
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {OrganizaionForm({ page: orgState, signUpType: "Organisation" })}

          <Box mt={8}>
            <SabpaisaCopyRight />
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {IndividualForm({ page: indiState, signUpType: "Individual" })}

          <Box mt={8}>
            <SabpaisaCopyRight />
          </Box>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

// **************************************************************************************************

function SignUp(props) {
  const classes = useStyles();
  const [getOtp, setOtp] = React.useState(false);

  const listenOtp = (otp) => {
    setOtp(otp);
    console.log(getOtp);
  };

  const changeOpt = () => {
    setOtp(false);
  };

  const override = css`
    position: fixed;
    top: 50%;
    left: 61%;

    margin-top: -9em;
    margin-left: -15em;
  `;
  console.log(props);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div>
          <img src={SabMeetsLogo} width="100" height="100" />
        </div>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <FullWidthTabs listen={listenOtp} {...props} />
        <OtpWindow show={getOtp} closed={changeOpt} />
        <Backdrop show={getOtp} />
        <RingLoader
          css={override}
          size={80}
          margin={2}
          color={"#123abc"}
          loading={props.apiLoader}
        />
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    apiLoader: state.signUp.apiLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpStep1: (data) => {
      dispatch(signUpStep1(data));
    },
    // signUpStep2:(data)=>{
    //   dispatch((signUpStep2(data)))
    // }
    // auth: (data) => {
    //   dispatch(auth(data));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
