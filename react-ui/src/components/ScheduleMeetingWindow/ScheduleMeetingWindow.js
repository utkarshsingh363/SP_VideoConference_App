import React from "react";
import "./ScheduleMeetingWindow.css";

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
    import CancelIcon from '@material-ui/icons/Cancel';
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
//Core Imports
import { Typography, Grid, responsiveFontSizes } from "@material-ui/core";
import MaterialTable from 'material-table';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {produce} from 'immer'


const api=axios.create({
    baseURL:'https://wallet.sabpaisa.in/sabMeets'
  })


const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

  //************************************************************************** */

class MaterialTableDemo extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            activeUser:"7259649794",
            meetingList:null,
            state:{
                columns: [
                    { title: 'ID', field: 'meetingId' },
                    { title: 'Title', field: 'meetingTitle' },
                    { title: 'Name', field: 'meetingName' },
                    { title: 'Start Time', field: 'scheduledTime', type: 'datetime' },
                    { title: 'End Time', field: 'scheduleEndTime', type: 'datetime' },
                ],
                data: [],
            }
        }
    }
    componentWillMount(){
        var addtoList=[]   
        api.post(`/fetchMeetingByUser?user=${this.state.activeUser}`)
        .then((response)=>{
            response.data.fetchMeetingResponse.map((res)=>{
                addtoList.push({
                    "meetingId":res.meetingId,
                    "meetingName":res.meetingName,
                    "meetingTitle":res.meetingTitle,
                    "scheduledTime":res.scheduledTime,
                    "scheduleEndTime":res.scheduleEndTime
                })
                // console.log(addtoList)
            })
            this.setState({...this.state.state,data:addtoList})
            // console.log(this.state.state.data)
        })
        .catch((error)=>console.log(error))
    }

    componentDidMount(){
        console.log(this.state.state.data)
        console.log("*****************")
    }

    // React.useEffect(()=>{
    //     api.post(`/fetchMeetingByUser?user=${activeUser}`)
    //         .then((response)=>{
    //             response.data.fetchMeetingResponse.map((res)=>{
    //                 setState({
    //                     data: [...state.data,
    //                         {
    //                             "meetingId":res.meetingId,
    //                             "meetingName":res.meetingName,
    //                             "meetingTitle":res.meetingTitle,
    //                             "scheduledTime":res.scheduledTime,
    //                             "scheduleEndTime":res.scheduleEndTime
    //                         }
    //                     ]
    //                 }
    //                 )
    //                 console.log(state.data)
    //             })
    //         })
    //         .catch((error)=>console.log(error))
    // },state.data)
  
    render(){
    return (
      <MaterialTable
        title="All your Meetings"
        columns={this.state.columns}
        data={this.state.data}
        editable={{
        //   onRowAdd: (newData) =>
        //     new Promise((resolve) => {
        //       setTimeout(() => {
        //         resolve();
        //         setState((prevState) => {
        //           const data = [...prevState.data];
        //           data.push(newData);
        //           return { ...prevState, data };
        //         });
        //       }, 600);
        //     }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  this.setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
        //   onRowDelete: (oldData) =>
        //     new Promise((resolve) => {
        //       setTimeout(() => {
        //         resolve();
        //         setState((prevState) => {
        //           const data = [...prevState.data];
        //           data.splice(data.indexOf(oldData), 1);
        //           return { ...prevState, data };
        //         });
        //       }, 600);
        //     }),
        }}
      />
    );
  }}


  //************************************************************************** */


export default function ScheduleWindowWindow(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [tab , setTab]= React.useState(1)

    const handleTab =(index)=>{
        setTab(index)
        console.log(index)
    }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    //*********************************************** */

    const ScheduleMeetingForm=()=>{
        if(tab===2){
            return(
                <Grid container xs={12} spacing={5} justify='center'>
                    <Grid item xs={6}>
                        <TextField
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
                            <TextField
                                id="date"
                                label="Meeting Date"
                                type="date"
                                defaultValue="2020-06-12"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </form>
                    </Grid>
                    <Grid item xs={6}>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="time"
                                label="Meeting Time"
                                type="time"
                                defaultValue="07:30"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                                inputProps={{
                                step: 300, // 5 min
                                }}
                            />
                        </form>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="contained" color="primary">
                            Generate Link
                        </Button>
                    </Grid>
            </Grid>
            )
        }else if(tab===1){
            return(
                <Grid container xs={12} spacing={5} justify='center'>
                    <Grid item xs={6}>
                        <TextField
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
                    <Grid item xs={4}>
                        <Button variant="contained" color="primary">
                            Create Room
                        </Button>
                    </Grid>
            </Grid>
            )
        }else if(tab===3){
            return(
                <Grid container xs justify='center'>
                <Grid item xs>
                    <MaterialTableDemo />
                </Grid>
            </Grid>
            )
        }
    }
    




    //*************************************************** */
  

  const cssClasses = [
    "scheduleWindow",
    props.show ? "scheduleWindowOpen" : "scheduleClosed"
  ];

  return (
    <div className={cssClasses.join(" ")}>
      <Grid container xs={12} spacing={5}>
          <Grid item container xs={12} spacing={5}>
              <Grid item xs={11}>
                <Typography variant='h4' color='textPrimary'>Schedule Meeting</Typography>
              </Grid>
              <Grid item xs={1} style={{textAlign:'right', alignItems:'center'}}>
                <CancelIcon className="Button" onClick={props.closed} color="action"/>
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
                    <Tab label="Create" onClick={()=>handleTab(1)}/>
                    <Tab label="Schedule Meeting" onClick={()=>handleTab(2)}/>
                    <Tab label="All Meetings" onClick={()=>handleTab(3)}/>
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
