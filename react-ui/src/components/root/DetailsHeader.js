import React from 'react';
import Paper from "@material-ui/core/Paper";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Typography, Grid,ButtonBase } from "@material-ui/core";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

const useStyles = makeStyles((theme) => ({
    SelectedInfoPaper: {
      gridArea: "dh",
      border: "solid",
    },
    grid: {
      width: "100%",
      margin: "0px",
    },
    groupActionsButton: {
      float: "right",
      padding: "20px",
    },
  }));

const DetailsHeader = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    return (
        <Paper className={classes.SelectedInfoPaper}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.grid}
        >
        <Grid sm={6} container direction="column">
          <Grid item style={{padding:"20px"}}>
          <Typography>Details</Typography>
          <Typography >Ayush Rawat</Typography>
          </Grid> 
        </Grid>

         <Grid sm={6} container direction="row" style={{padding:"20px"}}>
           <Grid item sm={12}>
              <div style={{float:"right"}}>
              <CancelRoundedIcon onClick={props.close}/>
              </div>
            </Grid>
         </Grid> 
        
        </Grid>
       
      </Paper>
    );
};

export default DetailsHeader;