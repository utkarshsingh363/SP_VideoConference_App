import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './root.css'
import { render } from 'react-dom';

import MessagageList from '../../components/root/MessageList'
import SendMessageForm from '../../components/root/SendMessageForm'
import RoomList from '../../components/root/RoomList'
import NewRoomForm from '../../components/root/NewRoomForm'
import SelectedInfo from '../../components/root/SelectedInfo'


 class Root extends Component{
        render(){
            return(
                <div className="root-page">
                    {/* <RoomList/> */}
                    <SelectedInfo/>
                    <MessagageList/>
                    <SendMessageForm/>
                    
                </div>
            )
            }
}

export default Root