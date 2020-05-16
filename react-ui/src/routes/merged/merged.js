import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Button from '@material-ui/core/Button';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Avatar from "@material-ui/core/Avatar";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ProfileWindow from "C:/Users/Utkarsh/Desktop/SP_VideoConf_JITSI_CORE/react-ui/src/components/ProfileWindow/ProfileWindow";
import OrganizationWindow from "C:/Users/Utkarsh/Desktop/SP_VideoConf_JITSI_CORE/react-ui/src/components/OrganizationWindow/OrganizationWindow";
import SubgroupWindow from "C:/Users/Utkarsh/Desktop/SP_VideoConf_JITSI_CORE/react-ui/src/components/SubgroupWindow/SubgroupWindow";
import Backdrop from "C:/Users/Utkarsh/Desktop/SP_VideoConf_JITSI_CORE/react-ui/src/components/Backdrop/Backdrop";
import Root from '../root/root';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    backgroundColor: "rgb(255,105,0)",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  heading:{
    marginRight: theme.spacing(110)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
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
  profileInfo: {
    marginLeft: "15px"
    // width:"50px"
  },
  organizationItem: {
    display: "grid",
    gridTemplateColumns: "auto 30px",
    alignItems: "center",
    margin: "5px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: "grey",
      color: "black"
    }
  },
  directmessageItems: {
    display: "grid",
    gridTemplateColumns: "40px 45px auto 30px",
    alignItems: "center",
    margin: "5px",
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: "grey",
      color: "black"
    }
  },
  vertIcon: {
    color: "black",
    "&:hover": {
      color: "orange"
    }
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openProfile, setProfile] = React.useState(false);
  const [openOrganization, setOrganization] = React.useState(false);
  const [openSubgroup, setSubgroup] = React.useState(false);

  const profileWindowOpen = () => {
    setProfile(true);
    console.log(openProfile);
  };

  const profileWindowClose = () => {
    setProfile(false);
    console.log(openProfile);
  };

  const organizationWindowOpen = () => {
    setOrganization(true);
    console.log(openOrganization);
  };

  const organizationWindowClose = () => {
    setOrganization(false);
    console.log(openOrganization);
  };

  const subgroupWindowOpen = () => {
    setSubgroup(true);
    console.log(openSubgroup);
  };

  const subgroupWindowClose = () => {
    setSubgroup(false);
    console.log(openSubgroup);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
          <Typography className={classes.heading} variant="h6" noWrap>
            SPApp
          </Typography>
          <Button color="inherit" href='/schedulemeeting' >SCHEDULE MEETING</Button>
          <Button color="inherit" href='/joinroom'>JOIN ROOM</Button>
          <Button color="inherit" href='/createroom'>CREATE ROOM</Button>
          <Button color="inherit">LOGIN</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
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
        <div className={classes.profileBox}>
          <Avatar className={classes.large} onClick={profileWindowOpen} />
          <ProfileWindow show={openProfile} closed={profileWindowClose} />
          <Backdrop show={openProfile} />
          <div className={classes.profileInfo}>
            <p>Utkarsh</p>
            <p>utkarshsingh363@gmail.com</p>
            <FiberManualRecordIcon style={{ color: "green" }} />
          </div>
        </div>
        <Divider />
        <div className={classes.organizationBox}>
          <h4 style={{ marginLeft: "15px" }}>Organizations</h4>
          <div className={classes.organizationItem}>
            <Grid item xm={6} xm={6}>
              <Paper
                className={classes.paper}
                style={{ marginLeft: "15px" }}
                onClick={organizationWindowOpen}
              >
                SabPaisa
              </Paper>
              <OrganizationWindow
                show={openOrganization}
                closed={organizationWindowClose}
              />
              <Backdrop show={openOrganization} />
            </Grid>
            <MoreVertIcon className={classes.vertIcon} />
          </div>
          <div className={classes.organizationItem}>
            <Grid item xm={6} xm={6}>
              <Paper
                className={classes.paper}
                style={{ marginLeft: "15px" }}
                onClick={organizationWindowOpen}
              >
                SabLends
              </Paper>
              <OrganizationWindow
                show={openOrganization}
                closed={organizationWindowClose}
              />
              <Backdrop show={openOrganization} />
            </Grid>
            <MoreVertIcon className={classes.vertIcon} />
          </div>
          <Divider />
          <div className={classes.subgroupBox}>
            <h4 style={{ marginLeft: "15px" }}>Subgroups</h4>
          </div>
          <div className={classes.organizationItem}>
            <Grid item xm={6} xm={6}>
              <Paper
                className={classes.paper}
                style={{ marginLeft: "15px" }}
                onClick={subgroupWindowOpen}
              >
                Technology
              </Paper>
              <SubgroupWindow
                show={openSubgroup}
                closed={subgroupWindowClose}
              />
              <Backdrop show={openSubgroup} />
            </Grid>
            <MoreVertIcon className={classes.vertIcon} />
          </div>
          <div className={classes.organizationItem}>
            <Grid item xm={6} xm={6}>
              <Paper
                className={classes.paper}
                style={{ marginLeft: "15px" }}
                onClick={subgroupWindowOpen}
              >
                Product
              </Paper>
              <SubgroupWindow
                show={openSubgroup}
                closed={subgroupWindowClose}
              />
              <Backdrop show={openSubgroup} />
            </Grid>
            <MoreVertIcon className={classes.vertIcon} />
          </div>
          <div className={classes.organizationItem}>
            <Grid item xm={6} xm={6}>
              <Paper
                className={classes.paper}
                style={{ marginLeft: "15px" }}
                onClick={subgroupWindowOpen}
              >
                Support
              </Paper>
              <SubgroupWindow
                show={openSubgroup}
                closed={subgroupWindowClose}
              />
              <Backdrop show={openSubgroup} />
            </Grid>
            <MoreVertIcon className={classes.vertIcon} />
          </div>
          <Divider />
          <div className={classes.directmessageBox}>
            <h4 style={{ marginLeft: "15px" }}>Direct Messages</h4>
          </div>
          <div className={classes.directmessageItems}>
            <Avatar className={classes.small} />
            <FiberManualRecordIcon style={{ color: "yellow" }} />
            <p>Ayush Rawat</p>
            <MoreVertIcon className={classes.vertIcon} />
          </div>
          <div className={classes.directmessageItems}>
            <Avatar className={classes.small} />
            <FiberManualRecordIcon style={{ color: "red" }} />
            <p>Ramya Jena</p>
            <MoreVertIcon className={classes.vertIcon} />
          </div>
          <div className={classes.directmessageItems}>
            <Avatar className={classes.small} />
            <FiberManualRecordIcon style={{ color: "yellow" }} />
            <p>Shreyansh</p>
            <MoreVertIcon className={classes.vertIcon} />
          </div>
        </div>
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
