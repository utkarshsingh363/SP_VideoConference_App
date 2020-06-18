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
import Merged from "./routes/merged/merged";

import axios from "axios";
import { createBrowserHistory } from 'history';
import { connect } from "react-redux";

import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoute'
import VideoConference from "./routes/VideoConference/VideoConference";
import Test from "./components/Test/Test";



// import StoreContext from "./contexts/storeContext";
class App extends Component {
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
          
            <ProtectedRoute path="/" exact component={Merged} isLoggedIn={true} /> 
            
            <Route path="/signin" exact component={SignIn} />

            <Route path="/signup" exact component={SignUp} />

            <ProtectedRoute path="/launchconf" exact component={MainWindow} isLoggedIn={isTokenPresent}/>
            <ProtectedRoute path="/createroom" exact component={CreateRoom} isLoggedIn={isTokenPresent}/>
            <Route path="/joinroom" exact component={JoinRoom} />
            <ProtectedRoute path="/schedulemeeting" exact component={ScheduleMeeting} isLoggedIn={isTokenPresent}/>

            <ProtectedRoute path="/conference/:id/:password"  component={VideoConference} isLoggedIn={true}/>

            <Route path="/test" exact component={Test} />


            <CreateRoom />
          </Switch>

        </div>

    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.auth.auth)
  return {
    currentUser: state.auth.auth,
  };
};

export default connect(mapStateToProps)(App);
