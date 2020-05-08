import React from 'react';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import StopScreenShareIcon from '@material-ui/icons/StopScreenShare';

const ScreenShareButton = (props) =>{
    if (props.screenShared === true) {
        return (
          <ScreenShareIcon onClick={props.click}/>
        )
    }
    return( 
      <StopScreenShareIcon onClick={props.click}/>
    )
}


export default ScreenShareButton;