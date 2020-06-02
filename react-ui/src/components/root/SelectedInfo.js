import React from "react";
import Paper from "@material-ui/core/Paper";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import { Typography, Grid } from "@material-ui/core";

import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";

const useStyles = makeStyles((theme) => ({
  SelectedInfoPaper: {
    gridArea: "s",
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

function SelectedGroupOrPersonInfo(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Paper className={classes.SelectedInfoPaper}>
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className={classes.grid}
      >
        <Grid container xs={8}>
          <Grid item>
            <FiberManualRecordIcon
              style={{ color: "green", display: "inline" }}
            />
          </Grid>
          <Grid item>
            <Typography display="inline">Ayush Rawat</Typography>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          <div className={classes.groupActionsButton}>
            <VideocamRoundedIcon />
            <InfoRoundedIcon />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default SelectedGroupOrPersonInfo;