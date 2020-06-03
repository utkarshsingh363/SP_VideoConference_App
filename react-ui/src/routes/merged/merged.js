import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import '../merged/merged.css'

//Core Imports
import {Drawer, CssBaseline, AppBar,Button,Toolbar,Typography,Divider,IconButton, Grid,ButtonGroup }from "@material-ui/core";

//Icon Import
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

//Component Import
import Root from "../root/root";
import DrawerView from '../../components/DrawerView/DrawerView'

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    backgroundColor: "primary",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    height:'64px',
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  heading: {
    marginRight: theme.spacing(110)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },

  // drawerPaper: {
  //   width: drawerWidth,
  //   overflowY:'scroll'
  // },
  // "&:-webkitScrollbar":{
  //   display:'none'
  // },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    height:'64px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  large: {
    // width: theme.spacing(7),
    width: "60px",
    height: theme.spacing(7),
    padding: theme.spacing(0, 1),
    marginLeft: "10px",
    margin: "30%"
  },
  profileBox: {
    height: "120px",
    display: "grid",
    gridTemplateColumns: "80px auto"
  },
  top:{
    height: '35px',

    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: "grey",
      color: "black"

    },
    toolButtons: {
      display: "inline-block",
      float: "right",
    },
    appBarGrid: {},

    }

}));



export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [drawerView, setDrawerView] = React.useState('admin');

  const selectDrawerAdminView=()=>{
    setDrawerView('admin')
    console.log(drawerView)
  }

  const selectDrawerSettingView=()=>{
    setDrawerView('setting')
    console.log(drawerView)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      {/* // AppBar  */}

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
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
                  href="/schedulemeeting"
                  
                >
                  Schedule{" "}
                </Button>
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
        // className='drawer'
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: 'drawerPaper'
          // paper: classes.drawerPaper
        }}
      >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
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
              <Button onClick={selectDrawerAdminView}>Admin</Button>
              <Button onClick={selectDrawerSettingView}>Settings</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>

        <Divider />

        <DrawerView drawerview={drawerView} />
        {/* </div> */}
        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Root />
      </main>
    </div>
  );
}