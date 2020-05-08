import React,{Component} from 'react';
import './App.css';
import AudioButton from '../components/Buttons/AudioButton/AudioButton'
import VideoButton from '../components/Buttons/VideoButton/VideoButton'
import RaisHandButton from '../components/Buttons/RaiseHandButton/RaiseHandButton'
import DisconnectButton from '../components/Buttons/DisconnectButton/DisconnectButton';
import ChatButton from '../components/Buttons/ChatButton/ChatButton'
import ScreenShareButton from '../components/Buttons/ScreenShareButton/ScreenShareButton'
import ChatBox from '../components/ChatBox/ChatBox'



class App extends Component{
  state={
    isMuted:false,
    showVideo:true,
    raiseHand:false,
    isDisconnected:false,
    chatOn:false,
    screenShared:false
  }

  toggleAudio = () => {
    var muteState=this.state.isMuted
    this.setState({isMuted : !muteState}) 
    console.log(this.state.isMuted)
  }

  toggleVideo = () => {
    var videoState=this.state.showVideo
    this.setState({showVideo : !videoState}) 
    console.log(this.state.showVideo)
  }

  toggleHandRaise = () => {
    var raiseHandState=this.state.raiseHand
    this.setState({raiseHand : !raiseHandState}) 
    console.log(this.state.raiseHand)
  }

  disconnectCall =() =>{
    var callState=this.state.isDisconnected
    this.setState({isDisconnected: !callState})
    console.log(this.state.isDisconnected)
  }

  toggleChat =() =>{
    var chatState=this.state.chatOn
    this.setState({chatOn: !chatState})
    console.log(this.state.chatOn)
  }

  screenShareHandler =() =>{
    var screenShareState=this.state.screenShared
    this.setState({screenShared: !screenShareState})
    console.log(this.state.screenShared)
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h2>Let's Start</h2>
        </header>
        <div className='App-body'>
          {(this.state.chatOn===true)?
          <div className='withChat'>
            <ChatBox />
            <div class='videoBox'>
              <p>This Window for Video</p>
            </div>
          </div> :
          <div class='videoBox'>
            <p>This Window for Video</p>
          </div>
          }
        </div>
        <footer className="App-footer">
          <div className='buttons'>
            <ChatButton chatOn = {this.state.chatOn} click={this.toggleChat} />
            <RaisHandButton raiseHand = {this.state.raiseHand} click={this.toggleHandRaise} />
            <AudioButton isMuted = {this.state.isMuted} click={this.toggleAudio} />
            <DisconnectButton isDisconnected = {this.state.isDisconnected} click={this.disconnectCall} />
            <VideoButton showVideo = {this.state.showVideo} click={this.toggleVideo} />
            <ScreenShareButton screenShared = {this.state.screenShared} click={this.screenShareHandler} />
          </div>
        </footer>
      </div>
    )
  }
} 


export default App;
