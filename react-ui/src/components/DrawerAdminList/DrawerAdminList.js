import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";

//Core Imports
import {Divider,Avatar, Grid,List,ListItem,ListItemText,Collapse }from "@material-ui/core";

//Icons Import
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ExpandLess from "@material-ui/icons/ExpandMore";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CheckIcon from '@material-ui/icons/Check';

//Component Imports
import ProfileWindow from "../../components/ProfileWindow/ProfileWindow";
import OrganizationWindow from "../../components/OrganizationWindow/OrganizationWindow";
import SubgroupWindow from "../../components/SubgroupWindow/SubgroupWindow";
import RequestWindow from '../../components/RequestWindow/RequestWindow'

import DMWindow from '../../components/DirectMessageWindow/DirectMessageWindow'
import Backdrop from "../../components/Backdrop/Backdrop";
import { red } from '@material-ui/core/colors';



const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(5)
        },
    profileInfo: {
        marginLeft: "15px"
        // width:"50px"
    }
}));


export default function DrawerAdminList(props){
    const classes = useStyles();
    const theme = useTheme();
    const [openProfile, setProfile] = React.useState(false);
    const [openOrganization, setOrganization] = React.useState(false);
    const [openSubgroup, setSubgroup] = React.useState(false);
    const [openDM, setDM] = React.useState(false);
    const [openRequest, setRequest] = React.useState(false);

    const [openOrganizationTab, setOrganizationTab] = React.useState(false);
    const [openSubgroupTab, setSubgroupTab] = React.useState(false);
    const [openDMTab, setDMTab] = React.useState(false);
    const [openProfileTab, setProfileTab] = React.useState(true);
    const [openRequestTab, setRequestTab] = React.useState(false);
    const [openAdminGroupTab, setAdminGroupTab] = React.useState(false);
    const [openPrivateGroupTab, setPrivateGroupTab] = React.useState(false);


    const profileWindowOpen = () => {
        setProfile(true);
        console.log(openProfile);
      };
    
      const profileWindowClose = () => {
        setProfile(false);
        console.log(openProfile);
      };

      const requestWindowOpen = () => {
        setRequest(true);
        console.log(openRequest);
      };
    
      const requestWindowClose = () => {
        setRequest(false);
        console.log(openRequest);
      };
    
      const organizationWindowOpen = () => {
        setOrganization(true);
        console.log(openOrganization);
      };
    
      const organizationWindowClose = () => {
        setOrganization(false);
        console.log(openOrganization);
      };


      const dmWindowOpen = () => {
        setDM(true);
        console.log(openDM);
      };
    
      const dmWindowClose = () => {
        setDM(false);
        console.log(openDM);
      };

    
      const subgroupWindowOpen = () => {
        setSubgroup(true);
        console.log(openSubgroup);
      };
    
      const subgroupWindowClose = () => {
        setSubgroup(false);
        console.log(openSubgroup);
      };
    
      const handleOrganizationTab = () => {
        setOrganizationTab(!openOrganizationTab);
      };
    
      const handleSubgroupTab = () => {
        setSubgroupTab(!openSubgroupTab);
      };
    
      const handleDMTab = () => {
        setDMTab(!openDMTab);
      };
    
      const handleProfileTab = () => {
        setProfileTab(!openProfileTab);
      };

      const handleRequestTab = () => {
        setRequestTab(!openRequestTab);
      };

      const handleAdminGrouptTab = () => {
        setAdminGroupTab(!openAdminGroupTab);
      };

      const handlePrivateGroupTab = () => {
        setPrivateGroupTab(!openPrivateGroupTab);
      };
    return(
      // Profile Tab

        <div>
        <List>
          <ListItem button onClick={handleProfileTab}>
            <Grid container xs={12}>
              <Grid item xs={1}>
                {/* {openProfileTab ? <ExpandLess /> : <ExpandMore />} */}
              </Grid>
              <Grid item xs={10}>
                <ListItemText
                  primary="Profile"
                  style={{ textAlign: "center" }}

                />
              </Grid>
              <Grid item xs={1}>
                <AccountCircleIcon onClick={props.openprofile} />
                <ProfileWindow show={openProfile} closed={profileWindowClose} />
                <Backdrop show={openProfile} />
              </Grid>
            </Grid>
          </ListItem>
          <Collapse in={openProfileTab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              <ListItem button className={classes.nested} >

                <Grid container xs={12} 
                style={{ alignItems:'center'}}
                justify='flex-start' >
                  <Grid item xs={2} 
                  >
                    <Avatar
                      className={classes.small}
                      />

                  </Grid>
                  <Grid item xs={10}>
                    <div className={classes.profileInfo}>
                      <p>Utkarsh</p>
                      <p>utkarshsingh363@gmail.com</p>
                      <FiberManualRecordIcon style={{ color: "green" }} />
                    </div>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Collapse>
        </List>

      {/* Organization Tab */}

        <Divider />
        <List>
          <ListItem button onClick={handleOrganizationTab}>
            <Grid container xs={12}>
              <Grid item xs={1}>
                {/* {openOrganizationTab ? <ExpandLess /> : <ExpandMore />} */}
                {/* {true ? <ExpandLess /> : <ExpandMore />} */}
              </Grid>
              <Grid item xs={10} style={{ textAlign: "center" }}>
                <ListItemText primary="Organization" />
              </Grid>
              <Grid item xs={1}>
                <AddIcon onClick={organizationWindowOpen}/>
                <OrganizationWindow
                show={openOrganization}
                closed={organizationWindowClose}
                />
                <Backdrop show={openOrganization} />
              </Grid>
            </Grid>
          </ListItem>
          <Collapse in={openOrganizationTab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>

                <ListItemText primary="SabPaisa" />
              </ListItem>
              <ListItem button className={classes.nested}>

                <ListItemText primary="SabLends" />
              </ListItem>
            </List>
          </Collapse>
        </List>
   
        <Divider />


        {/* Admin Group Tab */}

        <List>
          <ListItem button onClick={handleAdminGrouptTab}>

            <Grid container xs={12}>
              <Grid item xs={1}>
                {/* {openSubgroupTab ? <ExpandLess /> : <ExpandMore />} */}
              </Grid>
              <Grid item xs={10}>
                <ListItemText

                  primary="Admin Groups"
                  style={{ textAlign: "center" }}
                />
              </Grid>
              {/* <Grid item xs={1}>
                <AddIcon onClick={subgroupWindowOpen}/>
                <SubgroupWindow
                show={openSubgroup}
                closed={subgroupWindowClose}
                />
                <Backdrop show={openSubgroup} />
              </Grid> */}
            </Grid>
          </ListItem>
          <Collapse in={openAdminGroupTab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Technology" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Product' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Support' />
              </ListItem>
            </List>
            </Collapse>
          </List>

        <Divider />

        {/* // Private Group Tab */}

        <List>
          <ListItem button onClick={handlePrivateGroupTab}>
            <Grid container xs={12}>
              <Grid item xs={1}>
                {/* {openSubgroupTab ? <ExpandLess /> : <ExpandMore />} */}
              </Grid>
              <Grid item xs={10}>
                <ListItemText
                  primary="Private Groups"

                  style={{ textAlign: "center" }}
                />
              </Grid>
              <Grid item xs={1}>
                <AddIcon onClick={subgroupWindowOpen}/>
                <SubgroupWindow
                show={openSubgroup}
                closed={subgroupWindowClose}
                />
                <Backdrop show={openSubgroup} />
              </Grid>
            </Grid>
          </ListItem>

          <Collapse in={openPrivateGroupTab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Task Force: Sabmeets" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Tech Team Daily Repts' />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary='Masha AI' />
              </ListItem>
            </List>
            </Collapse>
          </List>


        <Divider />

       {/* Drirect Message Tab */}
        <List>
          <ListItem button onClick={handleDMTab}>
            <Grid container xs={12}>
              <Grid item xs={1}>
                {/* {openDMTab ? <ExpandLess /> : <ExpandMore />} */}
              </Grid>
              <Grid item xs={10} style={{ textAlign: "center" }}>
                <ListItemText primary="Direct Messages" />
              </Grid>
              <Grid item xs={1}>

                <AddIcon onClick={dmWindowOpen}/>
                <DMWindow show={openDM} closed={dmWindowClose} />
                <Backdrop show={openDM} />

              </Grid>
            </Grid>
          </ListItem>
          <Collapse in={openDMTab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <Grid
                  container
                  xs={12}
                  justify="space-around"
                  style={{ alignItems: "center", textAlign: "center" }}
                >
                  <Grid item xs={2}>
                    <Avatar className={classes.small} />
                  </Grid>
                  <Grid item xs={1}>
                    <FiberManualRecordIcon style={{ color: "yellow" }} />
                  </Grid>
                  <Grid item xs={8}>
                    <ListItemText primary="Ayush Rawat" />
                  </Grid>
                  <Grid item xs={1}>
                    <CloseIcon />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Grid
                  container
                  xs={12}
                  justify="space-around"
                  style={{ alignItems: "center", textAlign: "center" }}
                >
                  <Grid item xs={2}>
                    <Avatar className={classes.small} />
                  </Grid>
                  <Grid item xs={1}>
                    <FiberManualRecordIcon style={{ color: "red" }} />
                  </Grid>
                  <Grid item xs={8}>
                    <ListItemText primary="Ramya Jena" />
                  </Grid>
                  <Grid item xs={1}>
                    <CloseIcon />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Grid
                  container
                  xs={12}
                  justify="space-around"
                  style={{ alignItems: "center", textAlign: "center" }}
                >
                  <Grid item xs={2}>
                    <Avatar className={classes.small} />
                  </Grid>
                  <Grid item xs={1}>
                    <FiberManualRecordIcon style={{ color: "green" }} />
                  </Grid>
                  <Grid item xs={8}>
                    <ListItemText primary="Shreyansh" />
                  </Grid>
                  <Grid item xs={1}>
                    <CloseIcon />
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Collapse>
        </List>

        <Divider />

        {/* Request Tab */}
        <List>
          <ListItem button onClick={handleRequestTab}>
            <Grid container xs={12}>
              <Grid item xs={1}>
                {/* {openRequestTab ? <ExpandLess /> : <ExpandMore />} */}
              </Grid>
              <Grid item xs={10} style={{ textAlign: "center" }}>
                <ListItemText primary="Requests" />
              </Grid>
              <Grid item xs={1}>

              <AddIcon onClick={requestWindowOpen}/>
                <RequestWindow show={openRequest} closed={requestWindowClose} />
                <Backdrop show={openRequest} />

              </Grid>
            </Grid> 
          </ListItem>
          <Collapse in={openRequestTab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <Grid
                  container
                  xs={12}
                  justify="space-around"
                  style={{ alignItems: "center", textAlign: "center" }}
                >
                  <Grid item xs={2}>
                    <Avatar className={classes.small} />
                  </Grid>
                  <Grid item xs={1}>
                    <FiberManualRecordIcon style={{ color: "yellow" }} />
                  </Grid>
                  <Grid item xs={6}>
                    <ListItemText primary="Mukesh" />
                  </Grid>
                  <Grid item xs={2}>
                    <CheckIcon />
                  </Grid>
                  <Grid item xs={1}>
                    <CloseIcon />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Grid
                  container
                  xs={12}
                  justify="space-around"
                  style={{ alignItems: "center", textAlign: "center" }}
                >
                  <Grid item xs={2}>
                    <Avatar className={classes.small} />
                  </Grid>
                  <Grid item xs={1}>
                    <FiberManualRecordIcon style={{ color: "red" }} />
                  </Grid>
                  <Grid item xs={6}>
                    <ListItemText primary="Karan" />
                  </Grid>
                  <Grid item xs={2}>
                    <CheckIcon />
                  </Grid>
                  <Grid item xs={1}>
                    <CloseIcon />
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem button className={classes.nested}>
                <Grid
                  container
                  xs={12}
                  justify="space-around"
                  style={{ alignItems: "center", textAlign: "center" }}
                >
                  <Grid item xs={2}>
                    <Avatar className={classes.small} />
                  </Grid>
                  <Grid item xs={1}>
                    <FiberManualRecordIcon style={{ color: "green" }} />
                  </Grid>
                  <Grid item xs={6}>
                    <ListItemText primary="Vishal" />
                  </Grid>
                  <Grid item xs={2}>
                    <CheckIcon />
                  </Grid>
                  <Grid item xs={1}>
                    <CloseIcon />
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    )
}