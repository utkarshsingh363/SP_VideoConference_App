import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import OtpInput from "react-otp-input";
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const api=axios.create({
  baseURL:'https://wallet.sabpaisa.in/sabMeets'
})

const userTypeOption = [
  {
    value: 'user',
    label: 'Individual',
  },
  {
    value: 'organisation',
    label: 'Organisation',
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


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

//****************************************************************************************** */
toast.configure()
function ForgotPasswordForm(){
  const [currentPage, setPage]=useState('forgotPass')
  const[mobileNumber, setMobileNumber]=useState('')
  const[emailID, setEmailID]=useState('')
  const[otp, setOtp]=useState('')
  const[password, setPassword]=useState('')
  const[userType, setUserType]=useState('user')
  const classes = useStyles();

  const notify = (message) => {
    toast(message,{position:toast.POSITION.TOP_CENTER})
  };  

  const getOTP=()=>{
    const data=()=>{
    if(userType==='organisation'){
      return {
        'emailId':emailID,
        'mobileNumber':null,
        "otpType": "Forgot Password",
        "userType":"organisation"
        }
        // return data
    }else{
      return {
        'emailId':null,
        'mobileNumber':mobileNumber,
        "otpType": "Forgot Password",
        "userType":"user"
      }
    }
  }
    api.post('/sendOtp',data())
      .then((response)=>{
        console.log(response.data)
        if(response.data.msg==="Provided emailId or Contact Number Does not exist"){
          return(
            notify("Contact Number does not exist. Please check the details")
          )
        }
        else if(response.data.msg==="Given Organisation is not present in system"){
          return(
            notify(response.data.msg)
          )
        }
        else if(response.data.msg==='Otp has been sent'){
          goToVerification()
          return(
            notify(response.data.msg)
          )
        }
        
      })
      .catch((error)=> {
        console.log(error)
        return(
          notify("Request Failed!")
        )
      });

    }
    

    const getValidated=()=>{
      const validationData=()=>{
        if(userType==='organisation'){
          return {
            "otp":otp,
            "userType": userType,
            "emailId":emailID,
            "password":password
          }
            // return data
        }else{
          return {
            "otp":otp,
            "userType": userType,
            "mobileNumber":mobileNumber,
            "password":password
          }
        }
      }
    
        // console.log(otpData)
      api.post('/verifyOtp',validationData())
        .then((response)=>{
          console.log(response.data)
          if(response.data.msg==="OTP Verified"){
            console.log(response.data)
            window.location.replace('/signin')
            return(
              notify(response.data.msg," and Password has been Updated")
            )

          }else{
            console.log("Wrong Otp")
            return(
              notify(response.data.msg,". Please Enter the correct OTP")
            )
          }
          // goToVerification()
          
        })
        .catch((error)=> {
          console.log(error)
          return(
            notify("Request Failed!")
          )
        });
  
    
      }

  const goToVerification=()=>{
    setPage('verification')
  }

  const goToChangePassword=()=>{
    setPage('changePass')
  }

  const goToForgotPassword=()=>{
    setPage('forgotPass')
  }


  if(currentPage==='changePass'){
    return(
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SearchIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change Password
        </Typography>
        <form className={classes.form} noValidate style={{marginTop:'30px'}}>
          <Grid container spacing={2} direction='column'style={{textAlign:'center'}}>
            <Grid item xs>
              <Typography variant="h7">Please enter the new Password</Typography>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                autoFocus
              />  
            </Grid>
            <Grid item xs>
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // onClick={goToVerification}
              >
                Change Password
              </Button>
            </Grid>
          </Grid>
          <Grid container style={{textAlign:'center'}}>
            <Grid item xs>
              <Link href="/signin" variant="body2">
                Back to login?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }else if(currentPage==='verification'){
    return(
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SearchIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Verification Code
        </Typography>
        <form className={classes.form} noValidate style={{marginTop:'30px'}}>
          <Grid container spacing={2} direction='column' justify='center' style={{textAlign:'center'}}>
            <Grid item xs>
              <Typography variant="h7">Please enter the Recieved OTP</Typography>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="otp"
                label="OTP"
                value={otp}
                name="otp"
                autoComplete="otp"
                onChange={(e)=>setOtp(e.target.value)}
              />  
            </Grid>
            <Grid item xs>
              <Typography variant="h7">Please enter the new Password</Typography>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                autoFocus
                onChange={(e)=>setPassword(e.target.value)}

              />  
            </Grid>
            <Grid item xs>
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // onClick={goToChangePassword}
                onClick={getValidated}
              >
                Validate
              </Button>
            </Grid>
          </Grid>
          <Grid container style={{textAlign:'center'}}>
            <Grid item xs>
              <Link href="/signin" variant="body2">
                Back to login?
              </Link>
            </Grid>
            <Grid item xs>
              <Link href="/forgotpassword">
                Entered wrong number?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }else{
    return(
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SearchIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password ?
        </Typography>
        <form className={classes.form} noValidate style={{marginTop:'30px'}}>
          <Grid container spacing={2} direction='column' style={{textAlign:'center'}}>
            <Grid item xs>
              <Typography variant="h7">Please enter your mobile number</Typography>
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                margin="normal"x
                required
                fullWidth
                id="mobile"
                label="Mobile"
                name="mobile"
                autoComplete="mobile"
                autoFocus
                disabled={(userType==='organisation')?true:false}
                // value={mobileNumber}
                value={(userType==='organisation')?'':mobileNumber}
                onChange={(e)=>setMobileNumber(e.target.value)}
              />  
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                margin="normal"x
                required
                fullWidth
                id="email"
                label="Email"
                disabled
                name="email"
                autoComplete="email"
                disabled={(userType==='user')?true:false}
                // value={emailID}
                value={(userType==='user')?'':emailID}
                onChange={(e)=>setEmailID(e.target.value)}
              />  
            </Grid>
            <Grid item xs>
            <TextField
              id="userType"
              name="userType"
              autoComplete="userType"
              select
              label="Account Type"
              required
              fullWidth
              value={userType}
              onChange={e=>setUserType(e.target.value)}
              helperText="Please select your Account Type"
              variant="filled"
            >
              {userTypeOption.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
            <Grid item xs>
              <Button
                // type="submit"  
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                // onClick={goToVerification}
                onClick={getOTP}
                // onClick={()=>{
                //   console.log({
                //     'email':emailID,
                //     'number':mobileNumber
                //   })
                // }}
              >
                Get OTP
              </Button>
            </Grid>
          </Grid>
          <Grid container style={{textAlign:'center'}}>
            <Grid item xs>
              <Link href="/signin" variant="body2">
                Back to login?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}


//****************************************************************************************** */

export default function ForgotPassword() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
          
      <ForgotPasswordForm />

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}


