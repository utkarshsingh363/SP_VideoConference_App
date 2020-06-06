import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./root.css";
import { render } from "react-dom";

import MessagageList from "../../components/root/MessageList";
import SendMessageForm from "../../components/root/SendMessageForm";
import RoomList from "../../components/root/RoomList";
import NewRoomForm from "../../components/root/NewRoomForm";
import SelectedGroupOrPersonInfo from "../../components/root/SelectedInfo";
import DetailsHeader from "../../components/root/DetailsHeader";
import Details from "../../components/root/Details";

export default (props) => {
  if (props.profdetails) {
    return (
      <div className="root-page-info-shift">
        {/* <RoomList/> */}
        <SelectedGroupOrPersonInfo onClickInfoButton={props.openprofile} />
        <MessagageList />
        <SendMessageForm />
        {/* <div className="selected-group-person-page" style={{backgroundColor:'red'}}> */}
        <DetailsHeader close={props.click} />
        <Details />
      </div>
    );
  } else {
    return (
      <div className="root-page">
        {/* <RoomList/> */}
        <SelectedGroupOrPersonInfo onClickInfoButton={props.openprofile} />
        <MessagageList />
        <SendMessageForm />
        {/* <div className="selected-group-person-page" style={{backgroundColor:'red'}}> */}
        {/* <DetailsHeader close={props.click}/>
          <Details/> */}
      </div>
    );
  }
};
