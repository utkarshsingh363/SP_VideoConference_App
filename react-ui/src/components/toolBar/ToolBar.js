import React from 'react'

import './ToolBar.css'

import AudioButton from '../components/Buttons/AudioButton/AudioButton'
import VideoButton from '../components/Buttons/VideoButton/VideoButton'
import RaisHandButton from '../components/Buttons/RaiseHandButton/RaiseHandButton'
import DisconnectButton from '../components/Buttons/DisconnectButton/DisconnectButton';
import ChatButton from '../components/Buttons/ChatButton/ChatButton'
import ScreenShareButton from '../components/Buttons/ScreenShareButton/ScreenShareButton'
// import ChatBox from '../components/ChatBox/ChatBox'

export default function ToolBar(){

    return(

        <div className='buttons'>
        <ChatButton chatOn = {this.state.chatOn} click={this.toggleChat} />
        <RaisHandButton raiseHand = {this.state.raiseHand} click={this.toggleHandRaise} />
        <AudioButton isMuted = {this.state.isMuted} click={this.toggleAudio} />
        <DisconnectButton isDisconnected = {this.state.isDisconnected} click={this.disconnectCall} />
        <VideoButton showVideo = {this.state.showVideo} click={this.toggleVideo} />
        <ScreenShareButton screenShared = {this.state.screenShared} click={this.screenShareHandler} />
      </div>
    )
}