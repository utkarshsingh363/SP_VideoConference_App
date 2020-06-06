import React, { Component } from "react";
import "./App.css";
import BackToTop from "./containers/header/header";

import MainWindow from "./routes/LaunchConf/mainWindow";
import CreateRoom from "./routes/CreateRoom/CreateRoom";
import JoinRoom from "./routes/JoinRoom/JoinRoom";
import ScheduleMeeting from "./routes/Schedule/ScheduleMeeting";
import SignUp from "./routes/SignUpPage/SignUp";
import SignIn from "./routes/SignInPage/SignIn";

import { Route, Switch } from "react-router-dom";

// import Root from './routes/root/root'
import Merged from "./routes/merged/merged";

import axios from "axios";

class App extends Component {
  render() {
    var querystring = require("querystring");
    axios
      .post(
        "https://spl.sabpaisa.in/SabPaisaAppApi_v16/sign-in-user",
        querystring.stringify({ mobileNo: "9899660338", password: "8108" })
      )
      .then((response) => {
        console.log(response.data);
      });
    return (
      <div className="App">
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
          <Route path="/" exact component={Merged} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/launchconf" component={MainWindow} />
          <Route path="/createroom" exact component={CreateRoom} />
          <Route path="/joinroom" exact component={JoinRoom} />
          <Route path="/schedulemeeting" exact component={ScheduleMeeting} />
          <CreateRoom />
        </Switch>
      </div>
    );
  }
}

export default App;
