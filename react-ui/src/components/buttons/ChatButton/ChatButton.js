import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';

const ChatButton = (props) =>{
    if (props.chatOn === true) {
        return (
          <ChatIcon color="primary" onClick={props.click}/>
        )
    }
    return( 
      <ChatIcon onClick={props.click}/>
    )
}


export default ChatButton;