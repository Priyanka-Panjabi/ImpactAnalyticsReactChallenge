import React from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import {Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider,
       IconButton, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ClearIcon from '@material-ui/icons/Clear';
import { fade , withStyles} from '@material-ui/core/styles';
const drawerWidth = 240;
const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:'#744798',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
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
      marginLeft: theme.spacing(140),
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
  } 
});

class MainDrawer extends React.Component { 
    state={
      open : false,
      openLogin :true
    }

    handleDrawerOpen = () => {
      this.setState({ open: true})
    };
  
    handleDrawerClose = () => {
      this.setState({ open: false})
    };

    onLoginClick = () =>{
      this.setState({openLogin:true});
    }
    onLoginClose = () =>{
      this.setState({openLogin:false});
    }
    render(){
      const { classes } = this.props;
      var display ="";
      return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: this.state.open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label=" drawer"
                onClick={this.handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, this.state.open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography style={{fontSize:"16px"}} >
                JOB PORTAL 
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={this.state.open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>             
                <Link to="/">
                  <ListItem>
                    <ListItemIcon><HomeIcon  color={"primary"}/></ListItemIcon>
                    <ListItemText primary={"Home"} />
                  </ListItem>
                </Link>
                <Link to="/shortlisted">
                  <ListItem>
                    <ListItemIcon><DoneOutlineIcon color={"primary"}/></ListItemIcon>
                    <ListItemText primary={"Shortlisted"} />
                  </ListItem>
                </Link>
                <Link to="/rejected">
                  <ListItem>
                    <ListItemIcon><ClearIcon color={"primary"} /></ListItemIcon>
                    <ListItemText primary={"Rejected"} />
                  </ListItem>
                </Link>
            </List>
          
          </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: this.state.open,
            })}
          >
          <div className={classes.drawerHeader} />
          {
            this.props.children
          }
          </main>
        </div>
      );
    }
}
  
export default withStyles(useStyles)(MainDrawer); 
