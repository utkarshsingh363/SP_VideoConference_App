import React from 'react';

import { makeStyles, useTheme } from "@material-ui/core/styles";

import Ayush from "../../static/img/profileTest/Ayush.jpg";

import { Typography, Grid, ButtonBase, Divider, List, ListItem, ListItemIcon, Collapse, ListItemText } from "@material-ui/core";

import VideocamTwoToneIcon from '@material-ui/icons/VideocamTwoTone';
import MoreHorizTwoToneIcon from '@material-ui/icons/MoreHorizTwoTone';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  divclass: {
    gridArea: "d",
    border: "solid",
    overflowX: "scroll"

  },
  grid: {
    width: "100%",
    margin: "0px",
  },
  groupActionsButton: {
    float: "right",
    padding: "20px",
  },
  profilePic: {
    height: "50vh",

  },
  profilePicButton: {
    height: "100%",
    width: "100%"
  }
}));

const Details = () => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={classes.divclass}>
      <Grid
        container
        direction="column"
        justify="space-evenly"
        alignItems="stretch "
        className={classes.grid}

      >
        <Grid item className={classes.profilePic} >
          <ButtonBase className={classes.profilePicButton}>
            <img src={Ayush} width="100%" height="100%" />
          </ButtonBase>
        </Grid>

        <Grid item>
          <Typography align='center'>Ayush Rawat</Typography>
        </Grid>

        <Grid item container direction="row" justify='center' align='center'>
          <Grid item style={{ padding: "20px" }}>
            <ButtonBase >
              <VideocamTwoToneIcon fontSize='large' />
            </ButtonBase>
            <Typography align='center'>Call</Typography>
          </Grid>
          <Grid item style={{ padding: "20px" }}>
            <ButtonBase >
              <MoreHorizTwoToneIcon fontSize='large' />
            </ButtonBase>
            <Typography align='center'>More</Typography>
          </Grid>
        </Grid>

        <Divider />

        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.AboutList}
        >
          <ListItem button onClick={() => { setOpen(!open); }}>
            <ListItemText primary="About" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Grid style={{padding:'20px'}} container spacing={3} direction="column" alignItems="stretch " justify="space-evenly" > 
                <Grid item>
                  <Typography display="block" >Display Name</Typography>
                  <Typography display="block">Ayush Rawat</Typography>
                </Grid>
                <Grid item>
                  <Typography display="block" >Location</Typography>
                  <Typography display="block">New Delhi</Typography>
                </Grid>
                <Grid item>
                  <Typography display="block" >Email</Typography>
                  <Typography display="block">rawatayush007@yahoo.com</Typography>
                </Grid>
                <Grid item>
                  <Typography display="block" >Phone</Typography>
                  <Typography display="block">7042786517</Typography>
                </Grid>
              </Grid>
            </List>
          </Collapse>


        </List>



      </Grid>
    </div>
  );
};

export default Details;