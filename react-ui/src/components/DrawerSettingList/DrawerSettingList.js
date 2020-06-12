import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";

//Redux exports
import { connect } from 'react-redux'

//Core Imports
import {Grid,List,ListItem,ListItemText,Collapse }from "@material-ui/core";

//Icons Import
import ExpandLess from "@material-ui/icons/ExpandMore";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";

//Component Imports
import SettingWindow from "../../components/SettingWindow/SettingWindow";
import Backdrop from "../../components/Backdrop/Backdrop";

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(5)
        }
}));


function DrawerSettingList(props){
    const classes = useStyles();
    const theme = useTheme();

    return(
        <div>
        <List>
          <ListItem button onClick={props.handleSettingTab}>
            <Grid container xs={12}>
              <Grid item xs={1}>  
                {/* {openSettingTab ? <ExpandLess /> : <ExpandMore />} */}
              </Grid>
              <Grid item xs={10}>
                <ListItemText

                  primary="Settings"

                  style={{ textAlign: "center" }}
                />
              </Grid>
              <Grid item xs={1}>
                <AddIcon onClick={props.settingWindowOpen}/>
                <SettingWindow
                  show={props.openSetting}
                  closed={props.settingWindowClose}
                />
                <Backdrop show={props.openSetting} />
              </Grid>
            </Grid>
          </ListItem>
          <Collapse in={props.openSettingTab} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Option 1" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Option 2" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    )
}

const mapStateToProps= state=>{
  return{
    openSettingTab: state.drawerSet.openSettingTab,
    openSetting: state.drawerSet.openSetting
  }
}


const mapDispatchToProps = dispatch =>{
  return{
    handleSettingTab: ()=>dispatch({type:'HANDLE_SETTING_TAB'}),
    settingWindowOpen: ()=>dispatch({type:'OPEN_SETTING_WINDOW'}),
    settingWindowClose: ()=>dispatch({type:'CLOSE_SETTING_WINDOW'})
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DrawerSettingList);



