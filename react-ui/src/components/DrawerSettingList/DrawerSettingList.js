import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";

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


export default function DrawerSettingList(){
    const classes = useStyles();
    const theme = useTheme();
    const [openSettingTab, setSettingTab] = React.useState(true);
    const [openSetting, setSetting] = React.useState(false);

      
    const handleSettingTab = () => {
        setSettingTab(!openSettingTab);
      };

      const settingWindowOpen = () => {
        setSetting(true);
        console.log(openSetting);
      };
    
      const settingWindowClose = () => {
        setSetting(false);
        console.log(openSetting);
      };
    return(
        <div>
        <List>
          <ListItem button onClick={handleSettingTab}>
            <Grid container xs={12}>
              <Grid item xs={1}>  
                {/* {openSettingTab ? <ExpandLess /> : <ExpandMore />} */}
              </Grid>
              <Grid item xs={10}>
                <ListItemText
                  primary="Admin Settings"
                  style={{ textAlign: "center" }}
                />
              </Grid>
              <Grid item xs={1}>
                <AddIcon onClick={settingWindowOpen}/>
                <SettingWindow
                  show={openSetting}
                  closed={settingWindowClose}
                />
                <Backdrop show={openSetting} />
              </Grid>
            </Grid>
          </ListItem>
          <Collapse in={openSettingTab} timeout="auto" unmountOnExit>
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






