import React from 'react';
import PropTypes from 'prop-types';
import Media from "react-media";
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  navP:{
      float: 'left',
      padding: '25px'
  }
});

class Header extends React.Component {
  state = {
    open: false,
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const mainListItems = [{label:"Home"},{label:"Tasks"}, {label:"Leads"}, {label:"Collateral"}, {label:"Branch"}, {label:"Admin"}];
    return (
      <React.Fragment>
        <CssBaseline />
        <Media query={{ maxWidth: 599 }}>
          <div className={classes.root}>
            <AppBar
              position="absolute"
              className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
            >
              <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    this.state.open && classes.menuButtonHidden,
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" noWrap className={classes.title}>
                  {''}
                </Typography>
                <div>
                  <IconButton
                    aria-owns="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem>Mr. Max John</MenuItem>
                    <MenuItem>john@gmail.com</MenuItem>
                    <MenuItem>UserId</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logoff</MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
            <Drawer
              classes={{
                paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
              }}
              open={this.state.open}
            >
              <div className={classes.toolbarIcon}>
                <IconButton onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List component="nav">
                {
                  mainListItems.map((item,ind) => {
                    return (
                      <ListItem button component="a" href="#" key={ind}>
                        <ListItemText primary={item.label} />
                      </ListItem>
                    )
                  })
                }
              </List>
            </Drawer>
          </div>
        </Media>
        <Media query={{ minWidth: 600 }}>
          <div className={classes.root}>
            <AppBar
              position="absolute"
              className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
            >
              <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  className={classNames(
                    classes.menuButton,
                    this.state.open && classes.menuButtonHidden,
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <div className={classes.title}>
                    {
                        mainListItems.map((item,ind) => {
                            return (
                                <Typography key={ind} variant="title" color="inherit" noWrap className={classes.navP}>
                                    {item.label}
                                </Typography>
                            )
                        })
                    }
                </div>
                <div>
                  <IconButton
                    aria-owns="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem>Mr. Max John</MenuItem>
                    <MenuItem>john@gmail.com</MenuItem>
                    <MenuItem>UserId</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logoff</MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
          </div>
        </Media>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
