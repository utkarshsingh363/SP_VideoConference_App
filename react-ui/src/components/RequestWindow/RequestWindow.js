import React from "react";

//Core Imports
import { fade, makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputBase from '@material-ui/core/InputBase';
import { Typography, Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';

//Icon Imports
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';

//Content Import
import Ayush from "../../static/img/profileTest/Ayush.jpg";
import SP from '../../static/img/sabmeets.jpeg'
import "./RequestWindow.css";

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    }
  }
}));

export default function DirectMessageWindow(props) {
  const classes = useStyles();
  const cssClasses = [
    "requestWindow",
    props.show ? "requestWindowOpen" : "requestWindowClosed"
  ];

  return (
    <div className={cssClasses.join(" ")}>
      <Grid container xs={12} spacing={5}  >
        <Grid item xs={12}>
          <Grid container xs={12} >
            <Grid item xs={10}>
              <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
              </div>
            </Grid>
            <Grid item xs={2} style={{textAlign:'right'}} >
              <CancelIcon className="Button" onClick={props.closed}/>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container s={12} xs={12} spacing={3} style={{justifyContent:'space-around'}} >
            <Grid item s={6} xs={6}>
              <Card>
                <Grid container s={12} xs={12}>
                  <Grid item s={4} xs={12}>
                    <img src={SP} width="100%" height="100%" />
                  </Grid>
                  <Grid item s={8} xs={12}>
                    <CardContent>
                    <Typography>Utkarsh Singh</Typography>
                    <Typography>Trainee Data Science</Typography>
                    <Typography>utkarshsingh363@gmail.com</Typography>
                    </CardContent> 
                  </Grid> 
                  <Grid item xs={6}>
                    <Button variant="contained" size="small" color="primary" >
                      Accept
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" size="small" color="secondary" >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item s={6} xs={6}>
              <Card>
                <Grid container s={12} xs={12}>
                  <Grid item s={4} xs={12}>
                    <img src={Ayush} width="100%" height="100%" />
                  </Grid>
                  <Grid item s={8} xs={12}>
                    <CardContent>
                    <Typography>Ayush Rawat</Typography>
                    <Typography>Software Engineer</Typography>
                    <Typography>rawatayush007@gmail.com</Typography>
                    </CardContent> 
                  </Grid> 
                  <Grid item xs={6}>
                    <Button variant="contained" size="small" color="primary" >
                      Accept
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" size="small" color="secondary" >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            
            <Grid item s={6} xs={6}>
              <Card>
                <Grid container s={12} xs={12} style={{justifyContent:'center'}}>
                  <Grid item s={4} xs={12}>
                    <img src={SP} width="100%" height="100%" />
                  </Grid>
                  <Grid item s={8} xs={12}>
                    <CardContent>
                    <Typography>Mukesh Kumar</Typography>
                    <Typography>Software Engineer</Typography>
                    <Typography>mukeshKumar@gmail.com</Typography>
                    </CardContent> 
                  </Grid> 
                  <Grid item xs={6}>
                    <Button variant="contained" size="small" color="primary" >
                      Accept
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" size="small" color="secondary" >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item s={6} xs={6}>
              <Card>
                <Grid container s={12} xs={12}>
                  <Grid item s={4} xs={12}>
                    <img src={SP} width="100%" height="100%" />
                  </Grid>
                  <Grid item s={8} xs={12}>
                    <CardContent>
                    <Typography>Karan</Typography>
                    <Typography>Android Developer</Typography>
                    <Typography>karan123@gmail.com</Typography>
                    </CardContent> 
                  </Grid> 
                  <Grid item xs={6}>
                    <Button variant="contained" size="small" color="primary" >
                      Accept
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="contained" size="small" color="secondary" >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            


          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}
