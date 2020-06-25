import React, { Component } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "../merged/merged.css";

//Redux exports
import { connect } from 'react-redux'

//Core Imports
import {
  Drawer,
  CssBaseline,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Grid,
  ButtonGroup,
} from "@material-ui/core";

//Icon Import
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

//Component Import
import Root from "../root/root";

import DrawerView from '../../components/DrawerView/DrawerView'
import ScheduleMeetingWindow from '../../components/ScheduleMeetingWindow/ScheduleMeetingWindow'
import Backdrop from '../../components/Backdrop/Backdrop'
import * as actionCreators from '../../store/components/main_reducer'


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "primary",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    height: "64px",
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  heading: {
    marginRight: theme.spacing(110),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    height: "64px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  large: {
    width: "60px",
    height: theme.spacing(7),
    padding: theme.spacing(0, 1),
    marginLeft: "10px",
    margin: "30%",
  },
  profileBox: {
    height: "120px",
    display: "grid",
    gridTemplateColumns: "80px auto",
  },
  top: {
    height: "35px",

    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: "grey",

    }



      color: "black",
    },
  },

}));



function PersistentDrawerLeft(props){
    const classes = useStyles();
    const theme = useTheme();

    return (
      <div className={classes.root}>
        <CssBaseline />
  
        {/* // AppBar  */}
  
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: props.open
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={props.handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, props.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              className={classes.appBarGrid}
            >
              <Grid item xs={2}>
                <Typography className={classes.heading} variant="h6">
                  SabMeets
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <div style={{float:"right", display:"block-inline"}}>
                  <Button
                    color="inherit"
                    // href="/schedulemeeting"
                    onClick={props.scheduleMeetingWindowOpen}
                  >
                    Schedule{" "}
                  </Button>
                  <ScheduleMeetingWindow show={props.openScheduleMeeting} closed={props.scheduleMeetingWindowClose}/>
                  <Backdrop show={props.openScheduleMeeting}/>
                  <Button color="inherit" href="/joinroom">
                    Join
                  </Button>
                  <Button color="inherit" href="/createroom">
                    Create
                  </Button>
                  <Button color="inherit">Logout</Button>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
  
        {/* Drawer (Split into 2 Views ADMIN and SETTINGS) inside DrawerView */}
  
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={props.open}
          classes={{
            paper: 'drawerPaper'
          }}
        >
            <div className={classes.drawerHeader}>
              <IconButton onClick={props.handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
          <Divider />
  
        <div className={classes.top}>

          <Grid
            container
            xs={12}
            style={{ textAlign: "center" }}
            alignItems="center"


            height='64px'
            >
            
            <Grid item xs={12}>
              <ButtonGroup 
              disableElevation 
              variant="contained" 
              color="primary"
  
              fullWidth='true'
  
              >
                <Button onClick={props.selectDrawerAdminView}>Admin</Button>
                <Button onClick={props.selectDrawerSettingView}>Settings</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </div>
  
          <Divider />
  
          <DrawerView drawerview={props.drawerView} openprofile={props.openProfileDetails}/>
          {/* </div> */}
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: props.open
          })}
        >
          <div className={classes.drawerHeader} />
          <Root profdetails={props.profileDetails} click={props.closeProfileDetails}/>
        </main>
      </div>
    );


}

const mapStateToProps= state=>{
  return{
    open: state.main.open,
    drawerView: state.main.drawerView,
    profileDetails: state.main.profileDetails,
    openScheduleMeeting: state.main.openScheduleMeeting
  }
}


const mapDispatchToProps = dispatch =>{
  return{
    handleDrawerOpen: ()=>dispatch(actionCreators.handleDrawerOpen()),
    handleDrawerClose: ()=>dispatch(actionCreators.handleDrawerClose()),
    selectDrawerAdminView: ()=>dispatch(actionCreators.selectDrawerAdminView()),
    selectDrawerSettingView: ()=>dispatch(actionCreators.selectDrawerSettingView()),
    openProfileDetails: ()=>dispatch(actionCreators.openProfileDetails()),
    closeProfileDetails: ()=>dispatch(actionCreators.closeProfileDetails()),
    scheduleMeetingWindowOpen: ()=>dispatch(actionCreators.scheduleMeetingWindowOpen()),
    scheduleMeetingWindowClose: ()=>dispatch(actionCreators.scheduleMeetingWindowClose())
  }
}

<<<<<<< HEAD
=======

>>>>>>> 279d5030f8d61c2664762ef010dfc1b2f2e8063a
export default connect(mapStateToProps,mapDispatchToProps)(PersistentDrawerLeft);

