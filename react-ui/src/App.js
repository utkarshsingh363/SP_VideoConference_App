import React, { Component } from "react";
import "./App.css";
import BackToTop from "./containers/header/header";

import MainWindow from "./routes/LaunchConf/mainWindow";
import CreateRoom from "./routes/CreateRoom/CreateRoom";
import JoinRoom from "./routes/JoinRoom/JoinRoom";
import ScheduleMeeting from "./routes/Schedule/ScheduleMeeting";
import SignUp from "./routes/SignUpPage/SignUp";
import SignIn from "./routes/SignInPage/SignIn";

import { Route, Switch ,Redirect } from "react-router-dom";

// import Root from './routes/root/root'
<<<<<<< HEAD
import Merged from './routes/merged/merged'
import ForgotPasswordWindow from './components/ForgotPasswordWindow/ForgotPasswordWindow'
=======
import Merged from "./routes/merged/merged";

import axios from "axios";
import { createBrowserHistory } from 'history';
import { connect } from "react-redux";

import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoute'





// import StoreContext from "./contexts/storeContext";




>>>>>>> 279d5030f8d61c2664762ef010dfc1b2f2e8063a



class App extends Component {
<<<<<<< HEAD
  render(){
  return (
    <div className="App" style={{backgroundColor:'white'}}>
      {/* <Merged /> */}
      {/* <div className="layout-header">
        <BackToTop/>
      </div>

      <div className="layout-center">
        <Switch>
          <Route path ='/' exact component={Root}/>
          <Route path ='/' exact component={Merged}/>
          <Route path ='/launchconf' exact component={MainWindow}/>
          <Route path ='/createroom' exact component={CreateRoom}/>
          <Route path ='/joinroom' exact component={JoinRoom}/>
          <Route path ='/schedulemeeting' exact component={ScheduleMeeting}/>
          <CreateRoom/>
        </Switch>
      </div> */}
      
      <Switch>
          {/* <Route path ='/' exact component={Root}/> */}
          <Route path ='/' exact component={Merged}/>
          <Route path ='/signin' exact component={SignIn}/>
          <Route path ='/signup' exact component={SignUp}/>
          <Route path ='/forgotpassword' exact component={ForgotPasswordWindow}/>
          <Route path ='/launchconf'  component={MainWindow}/>
          <Route path ='/createroom' exact component={CreateRoom}/>
          <Route path ='/joinroom' exact component={JoinRoom}/>
          <Route path ='/schedulemeeting' exact component={ScheduleMeeting}/>
          <CreateRoom/>
        </Switch>

      
    </div>
  );
=======

   
  render() {
    
    // console.log("loggedIn User",this.props.currentUser)

    const isLoggedIn=(this.props.currentUser.currentUser===undefined)?false:((this.props.currentUser.currentUser.status==="Success")?true:false)

    const isTokenPresent=localStorage.getItem('token')
    
    console.log("Logged in hai ya nai ",isLoggedIn)
    return (
        

        <div className="App">
          <Switch>
            {/* <Route path ='/' exact component={Root}/> */}
            {/* <ProtectedRoute  /> */}
          
            <ProtectedRoute path="/" exact component={Merged} isLoggedIn={isTokenPresent} /> 
            
            <Route path="/signin" exact component={SignIn} />

            <Route path="/signup" exact component={SignUp} />

            <ProtectedRoute path="/launchconf" exact component={MainWindow} isLoggedIn={isTokenPresent}/>
            <ProtectedRoute path="/createroom" exact component={CreateRoom} isLoggedIn={isTokenPresent}/>
            <Route path="/joinroom" exact component={JoinRoom} />
            <ProtectedRoute path="/schedulemeeting" exact component={ScheduleMeeting} isLoggedIn={isTokenPresent}/>

            <CreateRoom />
          </Switch>

        </div>

    );
>>>>>>> 279d5030f8d61c2664762ef010dfc1b2f2e8063a
  }
}

const mapStateToProps = (state) => {
  console.log(state.auth.auth)
  return {
    currentUser: state.auth.auth,
  };
};

export default connect(mapStateToProps)(App);
