import React from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';

const VideoButton = (props) =>{
    if (props.showVideo === true) {
        return (
          <VideocamIcon onClick={props.click}/>
        )
    }
    return( 
      <VideocamOffIcon onClick={props.click}/>
    )
}


export default VideoButton;
