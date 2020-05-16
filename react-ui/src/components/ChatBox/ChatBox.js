import React,{ Component } from 'react'
import { render } from 'react-dom'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Typography from '@material-ui/core/Typography';
import './ChatBox.css'
import Paper from '@material-ui/core/Paper';

class ChatBox extends Component{
    render(){
        return(
            <div className='chatBox'>
                <div className='chatHead'>
                    <Typography variant="h5" gutterBottom align='center'> 
                        Chat Window
                    </Typography>
                </div>
                <div className='chatMain'>
                    <Paper elevation={3} variant="outlined"/>
                </div>  
                <div className='chatFoot'>
                    <EmojiEmotionsIcon />
                    <TextField id="standard-basic" label="Let's chat" size='small'/>
                    <SendIcon />

                </div>
            </div>
        )
    }
}

export default ChatBox;