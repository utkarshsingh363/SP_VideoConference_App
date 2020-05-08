import React from 'react';
import CallEndIcon from '@material-ui/icons/CallEnd';

const DisconnectButton = (props) =>{
    if (props.isDisconnected === true) {
        return (
          <CallEndIcon color="secondary" onClick={props.click}/>
        )
    }
    return( 
      <CallEndIcon color="secondary" onClick={props.click}/>
    )
}


export default DisconnectButton;