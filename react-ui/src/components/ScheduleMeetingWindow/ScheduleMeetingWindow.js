import React, { useState } from "react";
import "./ScheduleMeetingWindow.css";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CancelIcon from "@material-ui/icons/Cancel";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
//Core Imports
import { Typography, Grid } from "@material-ui/core";
import {
  TimePicker,
  MuiPickersUtilsProvider,
  DatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { connect, useDispatch } from "react-redux";

import Axios from "axios";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  container: {
    marginLeft: "10px",
  },
});

function ScheduleWindowWindow(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [tab, setTab] = React.useState(1);

  const handleTab = (index) => {
    setTab(index);
    console.log(index);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //*********************************************** */

  const ScheduleMeetingForm = () => {
    const classes = useStyles();
    const theme = useTheme();

    const [meetingName, setMeetingName] = useState("");
    const [password, setPassword] = useState("");
    const [meetingTitle, setMeetingTitle] = useState("");
    const [meetingStartDate, setMeetingStartDate] = useState(new Date());
    const [meetingEndDate, setMeetingEndDate] = useState(new Date());
    const [meetingStartTime, setMeetingStartTime] = useState(new Date());
    const [meetingEndTime, setMeetingEndTime] = useState(new Date());

    const [generatedLink, setGeneratedLink] = useState("");
    const [disableGenButton, setdisableGenButton] = useState(false);

    const getDateTimeFormatInput = (myDate, myTime) => {
      myDate = new Date(myDate);
      console.log(myTime.toTimeString().slice(0, 9));
      console.log(myDate.toISOString().slice(0, 9));
      return String(
        myDate.toISOString().slice(0, 10) +
          " " +
          myTime.toTimeString().slice(0, 9).trimEnd()
      );
    };

    const onClickGenerateLink = (meetingType) => {
      if (meetingType == "instant") {
        alert("instant");
        console.log(meetingType, meetingName, password, meetingTitle);
      } else if (meetingType == "scheduled") {
        var createdBy = "No user Case implement JWT";

        if (localStorage.getItem("userType") == "user") {
          createdBy = localStorage.getItem("userMobile");
        } else {
          createdBy = localStorage.getItem("userEmail");
        }
        // getDateTimeFormatInput(meetingStartDate, meetingStartTime);
        var data = {
          createdBy,
          meetingTitle: meetingTitle,
          meetingName: meetingName,
          password: password,
          scheduledTime: getDateTimeFormatInput(
            meetingStartDate,
            meetingStartTime
          ),
          scheduleEndTime: getDateTimeFormatInput(
            meetingEndDate,
            meetingEndTime
          ),
          meetingType: "Scheduled",
        };
        console.log(data);

        Axios.post("https://wallet.sabpaisa.in/sabMeets/createMeeting", {
          createdBy,
          meetingTitle: meetingTitle,
          meetingName: meetingName,
          password: password,
          scheduledTime: getDateTimeFormatInput(
            meetingStartDate,
            meetingStartTime
          ),
          scheduleEndTime: getDateTimeFormatInput(
            meetingEndDate,
            meetingEndTime
          ),
          meetingType: "Scheduled",
        })
          .then((response) => {
            const duplicate_password = password;
            if (response.data.msg == "Information is saved") {
              setGeneratedLink(
                "Meeting Link :\n" +
                  "http://localhost:3000/conference/" +
                  response.data.meetingId +
                  "/" +
                  duplicate_password +
                  "\nMeeting ID : " +
                  response.data.meetingId +
                  "\nPassword : " +
                  duplicate_password
              );
            }
            console.log(response.data);
          })
          .catch((error) => {});

        alert("scheduled");
        // console.log(
        //   meetingType,
        //   meetingName,
        //   password,
        //   meetingTitle,
        //   meetingStartDate,
        //   meetingEndDate,
        //   meetingStartTime,
        //   meetingEndTime
        // );
      }
    };

    if (tab === 2) {
      return (
        <Grid container xs={12} spacing={5} justify="center">
          <Grid item xs={6}>
            <TextField
              value={meetingName}
              onChange={(e) => {
                setMeetingName(e.target.value);
              }}
              inputProps={{
                maxLength: 50,
              }}
              autoComplete="meetingRoom"
              name="meetingRoom"
              variant="outlined"
              required
              fullWidth
              id="meetingRoom"
              label="Meeting Room"
              autoFocus
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              inputProps={{
                maxLength: 50,
              }}
              autoComplete="password"
              name="password"
              variant="outlined"
              required
              fullWidth
              id="password"
              label="Password(Optional)"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={meetingTitle}
              onChange={(e) => {
                setMeetingTitle(e.target.value);
              }}
              inputProps={{
                maxLength: 200,
              }}
              autoComplete="meetingTitle"
              name="meetingTitle"
              variant="outlined"
              required
              fullWidth
              id="meetingTitle"
              label="Meeting Title"
              autoFocus
            />
          </Grid>
          <Grid item xs={6}>
            <form className={classes.container} noValidate>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  value={meetingStartDate}
                  onChange={(e) => {
                    setMeetingStartDate(e);
                  }}
                  id="date"
                  label="Meeting Date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </MuiPickersUtilsProvider>
            </form>
          </Grid>
          <Grid item xs={6}>
            <form className={classes.container} noValidate>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                  value={meetingStartTime}
                  onChange={(e) => {
                    console.log(e);
                    setMeetingStartTime(e);
                  }}
                  ampm={false}
                  clearLabel
                  id="stime"
                  label="Start Time"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </MuiPickersUtilsProvider>
            </form>
          </Grid>
          <Grid item xs={6}>
            <form className={classes.container} noValidate>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  value={meetingEndDate}
                  onChange={(e) => {
                    setMeetingEndDate(e);
                  }}
                  id="e-date"
                  label="Meeting End Date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </MuiPickersUtilsProvider>
            </form>
          </Grid>
          <Grid item xs={6}>
            <form className={classes.container} noValidate>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TimePicker
                  value={meetingEndTime}
                  onChange={(e) => {
                    setMeetingEndTime(e);
                  }}
                  ampm={false}
                  id="etime"
                  label="End Time"
                  defaultValue="22:31"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </MuiPickersUtilsProvider>
            </form>
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={generatedLink}
              onChange={(e) => {
                setGeneratedLink(e);
              }}
              inputProps={{
                maxLength: 50,
              }}
              autoComplete="invite-link"
              name="invite-link"
              variant="outlined"
              disabled
              multiline
              rows={5}
              fullWidth
              id="invite-link"
              label="Invite Link"
              autoFocus
            />
          </Grid>

          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                onClickGenerateLink("scheduled");
              }}
            >
              Generate Link
            </Button>
          </Grid>
        </Grid>
      );
    } else if (tab === 1) {
      return (
        <Grid container xs={12} spacing={5} justify="center">
          <Grid item xs={6}>
            <TextField
              value={meetingName}
              onChange={(e) => {
                setMeetingName(e.target.value);
              }}
              inputProps={{
                maxLength: 50,
              }}
              autoComplete="meetingRoom"
              name="meetingRoom"
              variant="outlined"
              required
              fullWidth
              id="meetingRoom"
              label="Meeting Room"
              autoFocus
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              inputProps={{
                maxLength: 50,
              }}
              autoComplete="password"
              name="password"
              variant="outlined"
              required
              fullWidth
              id="password"
              label="Password(Optional)"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={meetingTitle}
              onChange={(e) => {
                setMeetingTitle(e.target.value);
              }}
              inputProps={{
                maxLength: 200,
              }}
              autoComplete="meetingTitle"
              name="meetingTitle"
              variant="outlined"
              required
              fullWidth
              id="meetingTitle"
              label="Meeting Title"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={generatedLink}
              onChange={(e) => {
                setGeneratedLink(e.target.value);
              }}
              inputProps={{
                maxLength: 50,
              }}
              autoComplete="invite-link"
              name="invite-link"
              variant="outlined"
              disabled
              multiline
              rows={3}
              fullWidth
              id="invite-link"
              label="Invite Link"
              autoFocus
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                onClickGenerateLink("instant");
              }}
            >
              Create Room
            </Button>
          </Grid>
        </Grid>
      );
    } else if (tab === 3) {
      return (
        <p style={{ color: "black" }}>Add meeting list</p>
        // <Grid container xs={12} spacing={5} justify="center">
        //   <Grid item xs={6}>
        //     <TextField
        //       autoComplete="meetingRoom"
        //       name="meetingRoom"
        //       variant="outlined"
        //       required
        //       fullWidth
        //       id="meetingRoom"
        //       label="Meeting Room"
        //       autoFocus
        //     />
        //   </Grid>
        //   <Grid item xs={6}>
        //     <TextField
        //       autoComplete="password"
        //       name="password"
        //       variant="outlined"
        //       required
        //       fullWidth
        //       id="password"
        //       label="Password(Optional)"
        //       autoFocus
        //     />
        //   </Grid>
        //   <Grid item xs={4}>
        //     <Button variant="contained" color="primary">
        //       Join Room
        //     </Button>
        //   </Grid>
        // </Grid>
      );
    }
  };

  //*************************************************** */

  const cssClasses = [
    "scheduleWindow",
    props.show ? "scheduleWindowOpen" : "scheduleClosed",
  ];

  return (
    <div className={cssClasses.join(" ")}>
      <Grid container xs={12} spacing={5} className={classes.container}>
        <Grid item container spacing={5}>
          <Grid item xs={11}>
            <Typography variant="h4" color="textPrimary">
              Schedule Meeting
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            style={{ textAlign: "right", alignItems: "center" }}
          >
            <CancelIcon
              className="Button"
              onClick={props.closed}
              color="action"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.root}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Create" onClick={() => handleTab(1)} />
              <Tab label="Schedule Meeting" onClick={() => handleTab(2)} />
              <Tab label="All Meetings" onClick={() => handleTab(3)} />
            </Tabs>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ScheduleMeetingForm />
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentUser: state.auth.auth,
  };
};

export default connect(mapStateToProps)(ScheduleWindowWindow);
