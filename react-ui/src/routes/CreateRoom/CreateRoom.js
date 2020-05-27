import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './CreateRoom.css'
import { v1 as uuid } from "uuid";



const CreateRoom = (props)=>{
    function create() {
        const id = uuid();
        props.history.push(`/launchconf/${id}`);
    }

    return(
        <div className="create-room">
        <TextField required id="standard-required" label="Room Name" defaultValue="Room Name" placeholder="yooo"/>
        <TextField required id="standard-required" label="User Name" defaultValue="User Name" />
        <TextField required id="standard-required" label="Password" defaultValue="Password" />
        <Button variant="contained" color="primary" onClick={create}>Create Room</Button>
        </div>
    )
}

export default CreateRoom;