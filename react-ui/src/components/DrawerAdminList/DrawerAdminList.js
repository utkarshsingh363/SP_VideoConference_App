import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";

//Redux exports
import { connect } from 'react-redux'

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
import * as actionCreators from '../../store/components/drawer_admin_reducer'



const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(5)
        },
    profileInfo: {
        marginLeft: "15px"
        // width:"50px"
    }
}));

const availabilityColor=(status)=>{
  switch(status){
    case 'online':
      return 'green'
    case 'busy':
      return 'yellow'
    default: 
      return 'red'
  }
}


function DrawerAdminList(props){
    const classes = useStyles();
    const theme = useTheme();
    return(
      // Profile Tab

        <div>
        <List>
          <ListItem button onClick={props.handleProfileTab}>
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
                <ProfileWindow show={props.openProfile} closed={props.profileWindowClose} />
                <Backdrop show={props.openProfile} />
              </Grid>
            </Grid>
          </ListItem>
          <Collapse in={props.openProfileTab} timeout="auto" unmountOnExit>
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
          <ListItem button onClick={props.handleOrganizationTab}>
            <Grid container xs={12}>
              <Grid item xs={1}>
                {/* {openOrganizationTab ? <ExpandLess /> : <ExpandMore />} */}
                {/* {true ? <ExpandLess /> : <ExpandMore />} */}
              </Grid>
              <Grid item xs={10} style={{ textAlign: "center" }}>
                <ListItemText primary="Organization" />
              </Grid>
              <Grid item xs={1}>
                <AddIcon onClick={props.organizationWindowOpen}/>
                <OrganizationWindow
                show={props.openOrganization}
                closed={props.organizationWindowClose}
                />
                <Backdrop show={props.openOrganization} />
              </Grid>
            </Grid>
          </ListItem>
          <Collapse in={props.openOrganizationTab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            {props.organizationList.map(
              (listItem)=>(
                  <ListItem button className={classes.nested}>
                    <ListItemText primary={listItem.OrgName} />
                  </ListItem>
              )
            )
            }
            </List>
            
          </Collapse>
        </List>
   
        <Divider />


        {/* Admin Group Tab */}

        <List>
          <ListItem button onClick={props.handleAdminGrouptTab}>

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
          <Collapse in={props.openAdminGroupTab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {props.adminGroupList.map(
                (listItem)=>(
                    <ListItem button className={classes.nested}>
                      <ListItemText primary={listItem.AdminGroupName} />
                    </ListItem>
                )
              )
              }
              </List>
            </Collapse>
          </List>

        <Divider />

        {/* // Private Group Tab */}

        <List>
          <ListItem button onClick={props.handlePrivateGroupTab}>
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
                <AddIcon onClick={props.subgroupWindowOpen}/>
                <SubgroupWindow
                show={props.openSubgroup}
                closed={props.subgroupWindowClose}
                />
                <Backdrop show={props.openSubgroup} />
              </Grid>
            </Grid>
          </ListItem>

          <Collapse in={props.openPrivateGroupTab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {props.privateGroupList.map(
                  (listItem)=>(
                      <ListItem button className={classes.nested}>
                        <ListItemText primary={listItem.PrivateGroupName} />
                      </ListItem>
                  )
                )
                }
                </List>
            </Collapse>
          </List>


        <Divider />

       {/* Drirect Message Tab */}
        <List>
          <ListItem button onClick={props.handleDMTab}>
            <Grid container xs={12}>
              <Grid item xs={1}>
                {/* {openDMTab ? <ExpandLess /> : <ExpandMore />} */}
              </Grid>
              <Grid item xs={10} style={{ textAlign: "center" }}>
                <ListItemText primary="Direct Messages" />
              </Grid>
              <Grid item xs={1}>

                <AddIcon onClick={props.dmWindowOpen}/>
                <DMWindow show={props.openDM} closed={props.dmWindowClose} />
                <Backdrop show={props.openDM} />

              </Grid>
            </Grid>
          </ListItem>
          <Collapse in={props.openDMTab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {props.organizationUsers.map(
                (user)=>{
                  return(
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
                          <FiberManualRecordIcon style={{ color: availabilityColor(user.availability) }} />
                        </Grid>
                        <Grid item xs={8}>
                          <ListItemText primary={user.UserName} />
                        </Grid>
                        <Grid item xs={1}>
                          <CloseIcon />
                        </Grid>
                      </Grid>
                    </ListItem>
                  )
                }
              )}
            </List>
          </Collapse>
        </List>

        <Divider />

        {/* Request Tab */}
        <List>
          <ListItem button onClick={props.handleRequestTab}>
            <Grid container xs={12}>
              <Grid item xs={1}>
                {/* {openRequestTab ? <ExpandLess /> : <ExpandMore />} */}
              </Grid>
              <Grid item xs={10} style={{ textAlign: "center" }}>
                <ListItemText primary="Requests" />
              </Grid>
              <Grid item xs={1}>

              <AddIcon onClick={props.requestWindowOpen}/>
                <RequestWindow show={props.openRequest} closed={props.requestWindowClose} />
                <Backdrop show={props.openRequest} />

              </Grid>
            </Grid> 
          </ListItem>
          <Collapse in={props.openRequestTab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {props.requestedUsers.map(
                (user)=>{
                  return(
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
                        <Grid item xs={7}>
                          <ListItemText primary={user.UserName} />
                        </Grid>
                        <Grid item xs={2}>
                          <CheckIcon />
                        </Grid>
                        <Grid item xs={1}>
                          <CloseIcon />
                        </Grid>
                      </Grid>
                    </ListItem>
                  )
                }
              )}
            </List>
          </Collapse>
        </List>
      </div>
    )
}

const mapStateToProps= state=>{
  return{
    openProfile: state.drawerAd.openProfile,
    openOrganization: state.drawerAd.openOrganization,
    openSubgroup: state.drawerAd.openSubgroup,
    openDM: state.drawerAd.openDM,
    openRequest: state.drawerAd.openRequest,
    openOrganizationTab: state.drawerAd.openOrganizationTab,
    openSubgroupTab: state.drawerAd.openSubgroupTab,
    openDMTab: state.drawerAd.openDMTab,
    openProfileTab: state.drawerAd.openProfileTab,
    openRequestTab: state.drawerAd.openRequestTab,
    openAdminGroupTab: state.drawerAd.openAdminGroupTab,
    openPrivateGroupTab: state.drawerAd.openPrivateGroupTab,
    organizationList:state.drawerAd.organizationList,
    adminGroupList:state.drawerAd.adminGroupList,
    privateGroupList:state.drawerAd.privateGroupList,
    organizationUsers:state.drawerAd.organizationUsers,
    requestedUsers:state.drawerAd.requestedUsers
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    profileWindowOpen: ()=>dispatch(actionCreators.profileWindowOpen()),
    profileWindowClose: ()=>dispatch(actionCreators.profileWindowClose()),
    requestWindowOpen: ()=>dispatch(actionCreators.requestWindowOpen()),
    requestWindowClose: ()=>dispatch(actionCreators.requestWindowClose()),
    organizationWindowOpen: ()=>dispatch(actionCreators.organizationWindowOpen()),
    organizationWindowClose: ()=>dispatch(actionCreators.organizationWindowClose()),
    dmWindowOpen: ()=>dispatch(actionCreators.dmWindowOpen()),
    dmWindowClose: ()=>dispatch(actionCreators.dmWindowClose()),
    subgroupWindowOpen: ()=>dispatch(actionCreators.subgroupWindowOpen()),
    subgroupWindowClose: ()=>dispatch(actionCreators.subgroupWindowClose()),
    handleOrganizationTab: ()=>dispatch(actionCreators.handleOrganizationTab()),
    handleSubgroupTab: ()=>dispatch(actionCreators.handleSubgroupTab()),
    handleDMTab: ()=>dispatch(actionCreators.handleDMTab()),
    handleProfileTab: ()=>dispatch(actionCreators.handleProfileTab()),
    handleRequestTab: ()=>dispatch(actionCreators.handleRequestTab()),
    handleAdminGrouptTab: ()=>dispatch(actionCreators.handleAdminGrouptTab()),
    handlePrivateGroupTab: ()=>dispatch(actionCreators.handlePrivateGroupTab()),
    getOrganizationList: ()=>dispatch(actionCreators.getOrganizationList()),
    getAdminGroupList: ()=>dispatch(actionCreators.getAdminGroupList()),
    getPrivateGroupList: ()=>dispatch(actionCreators.getPrivateGroupList()),
    getOrgUsersList: ()=>dispatch(actionCreators.getOrgUsersList()),
    getRequestedUsersList: ()=>dispatch(actionCreators.getRequestedUsersList())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(DrawerAdminList);