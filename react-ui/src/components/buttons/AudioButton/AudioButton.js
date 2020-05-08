import React from 'react';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';

const AudioButton = (props) =>{
    if (props.isMuted === true) {
        return (
          <MicIcon onClick={props.click}/>
        )
    }
    return( 
      <MicOffIcon onClick={props.click}/>
    )
}


export default AudioButton;


