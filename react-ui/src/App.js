import React,{Component} from 'react';
import './App.css';
import BackToTop from './containers/header/header'

import MainWindow from './routes/LaunchConf/mainWindow'
import CreateRoom from './routes/CreateRoom/CreateRoom'
import JoinRoom from './routes/JoinRoom/JoinRoom'
import ScheduleMeeting from './routes/Schedule/ScheduleMeeting'

import {Route,Switch} from 'react-router-dom'
import Root from './routes/root/root'



class App extends Component {
  render(){
  return (
    <div className="App">
      <div className="layout-header">
        <BackToTop/>
      </div>

      <div className="layout-center">
        <Switch>
          <Route path ='/' exact component={Root}/>
          <Route path ='/launchconf/:roomID'  component={MainWindow}/>
          <Route path ='/createroom' exact component={CreateRoom}/>
          <Route path ='/joinroom' exact component={JoinRoom}/>
          <Route path ='/schedulemeeting' exact component={ScheduleMeeting}/>
          <CreateRoom/>
        </Switch>
      </div>

      
    </div>
  );
  }
  
}

export default App;
