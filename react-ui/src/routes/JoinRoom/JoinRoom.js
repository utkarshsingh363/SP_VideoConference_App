import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './JoinRoom.css'


export default function JoinRoom(){
    return(
        <div className="create-room">
        <TextField required id="standard-required" label="Room Name" defaultValue="Room Name" placeholder="yooo"/>
        <TextField required id="standard-required" label="User Name" defaultValue="User Name" />
        <TextField required id="standard-required" label="Password" defaultValue="Password" />
        <Button variant="contained" color="primary" href='/launchconf'>Join Room</Button>
        </div>
    )
}
