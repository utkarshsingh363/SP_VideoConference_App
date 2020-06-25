import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import { Jutsu } from "react-jutsu"; // Component
import Axios from "axios";

class VideoConference extends Component {
  state = {
    roomId: "",
    password: "",
    name: "",
    loaderDisplay: false,
    status: "Allowed",
  };

  componentWillMount() {
    localStorage.setItem("name", "your logged in user name");
    const roomId = this.props.match.params.id;
    const password = this.props.match.params.password;
    this.setState({
      roomId: roomId,
      password: password,
      loaderDisplay: true,
    });

    Axios.post("https://wallet.sabpaisa.in/sabMeets/checkMeetingStatus", {
      meetingId: roomId,
      password: password,
    })
      .then((response) => {
        if (response.data.msg == "Allow") {
          this.setState({
            status: response.data.msg,
            loaderDisplay: false,
          });
        }
      })
      .catch((error) => {
        this.setState({
          status: error.message,
          loaderDisplay: false,
        });
      });
  }

  render() {
    {
      console.log(this.state.password, this.state.roomId);
    }
    return (
      <React.Fragment>
        {this.state.status == "Allow" ? (
          <Jutsu
            roomName={this.state.roomId}
            displayName={localStorage.getItem("name")}
            password={this.state.password}
            loadingComponent={<p>loading ...</p>}
            containerStyles={{ width: "100wh", height: "100vh" }}
            // domain={"jitsi.spchatapp.tk"}
          />
        ) : (
          <h1 style={{ color: "black" }}>"Meeting has not started yet"</h1>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default VideoConference;
