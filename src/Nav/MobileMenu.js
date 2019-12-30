import React, { useState } from 'react';
import { 
  makeStyles, 
  IconButton, 
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from "@material-ui/icons/MoreVert";
import { HashLink as Link } from "react-router-hash-link";
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';
import CloudCircleIcon from '@material-ui/icons/CloudCircle';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link:{
    color: "black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    },
  }
});

const menuItems = [
  {
    pathSuffix: '/',
    menu: 'Home',
    icon: <HomeIcon />,
  },
  {
    pathSuffix: '/products',
    menu: 'Products',
    icon: <CloudCircleIcon />,
  },
  {
    pathSuffix: '/services',
    menu: 'Services',
    icon: <WorkIcon />,
  },
  {
    pathSuffix: '/about',
    menu: 'About',
    icon: <GroupIcon />,
  },
  {
    pathSuffix: '/contact',
    menu: 'Contact',
    icon: <MailIcon />,
  }
]

const MobileMenu = () =>  {
const classes = useStyles();
const [state, setState] = useState({
  right: false,
});

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        { menuItems.map((menuItem, key) => (
          <Link to={menuItem.pathSuffix} key={key} className={classes.link}>
            <ListItem button key={menuItem.menu}>
              <ListItemIcon > 
                {menuItem.icon} 
              </ListItemIcon>
              <ListItemText primary={menuItem.menu} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
     <IconButton
        aria-label="show more"
        aria-haspopup="true"
        color="inherit"
        variant="contained"
        onClick={toggleDrawer('right', true)}
      >
        <MoreIcon />
      </IconButton>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

export default MobileMenu;