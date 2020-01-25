import React, { useState } from "react";
import {
  makeStyles,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import { HashLink as Link } from "react-router-hash-link";
import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import WorkIcon from "@material-ui/icons/Work";
import CloudCircleIcon from "@material-ui/icons/CloudCircle";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  }
});

const useOpen = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return { open, handleClick, setOpen };
};

const MobileMenu = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false
  });
  const dataStorageOpenMenu = useOpen();
  const newOpenMenu = useOpen();

  const menuItems = [
    {
      pathSuffix: "/#heroBanner",
      menu: "Home",
      icon: <HomeIcon />
    },
    {
      pathSuffix: "/products#productBanner",
      menu: "Products",
      icon: <CloudCircleIcon />,
      open: dataStorageOpenMenu.open,
      onClick: dataStorageOpenMenu.handleClick,
      subMenu: [
        {
          id: "- dataStorage",
          pathSuffix: "/products#dataStorage",
          menuProps: {
            //onClickFunction: e => handleClick
          }
        },
        {
          id: "- cyberSecurity",
          pathSuffix: "/products#cyberSecurity",
          menuProps: {
            //onClickFunction: e => handleClick
          }
        },
        {
          id: "- compliance",
          pathSuffix: "/products#compliances",
          menuProps: {
            //onClickFunction: e => handleClick
          }
        }
      ]
    },
    {
      pathSuffix: "/services#servicesBanner",
      menu: "Services",
      icon: <WorkIcon />
    },
    {
      pathSuffix: "/about#aboutBanner",
      menu: "About",
      icon: <GroupIcon />
    },
    {
      pathSuffix: "/contact#contactBanner",
      menu: "Contact",
      icon: <MailIcon />
    }
  ];

  const closeAllMenuItems = headerLabel => {
    if (headerLabel !== "Contact") newOpenMenu.setOpen(false);
    if (headerLabel !== "Products") dataStorageOpenMenu.setOpen(false);
  };

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  };
  const toggleDrawer = (side, open) => event => {
    if (
      event.target.dataset.menuType === "subMenu" ||
      event.target.parentNode.dataset.menuType === "subMenu"
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const renderSubMenu = (
    handleClickParam,
    openMenu,
    headerLabel,
    subMenu,
    key
  ) => {
    return (
      <div key={key}>
        <ListItem
          onClick={() => {
            handleClickParam();
            closeAllMenuItems(headerLabel);
          }}
          data-menu-type="subMenu"
        >
          <ListItemIcon data-menu-type="subMenu">
            <InboxIcon data-menu-type="subMenu" />
          </ListItemIcon>
          <ListItemText primary={headerLabel} data-menu-type="subMenu" />
          {openMenu ? (
            <ExpandLess data-menu-type="subMenu" />
          ) : (
            <ExpandMore data-menu-type="subMenu" />
          )}
        </ListItem>
        <Collapse in={openMenu} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subMenu.map((subMenuItem, j) => (
              <Link
                to={subMenuItem.pathSuffix}
                key={j}
                className={classes.link}
                scroll={el => scrollWithOffset(el, 0)}
              >
                <ListItem button className={classes.nested} key={j}>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={subMenuItem.id} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
      </div>
    );
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
    >
      <List>
        {menuItems.map((menuItem, key) => {
          const hasSubMenu = Boolean(
            menuItem.hasOwnProperty("subMenu") && menuItem.subMenu.length
          );
          return hasSubMenu ? (
            renderSubMenu(
              menuItem.onClick,
              menuItem.open,
              menuItem.menu,
              menuItem.subMenu,
              key
            )
          ) : (
            <Link
              to={menuItem.pathSuffix}
              key={key}
              className={classes.link}
              scroll={el => scrollWithOffset(el, 150)}
            >
              <ListItem button key={menuItem.menu} data-menu-type="menu">
                <ListItemIcon data-menu-type="menu">
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText primary={menuItem.menu} data-menu-type="menu" />
              </ListItem>
            </Link>
          );
        })}
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
        onClick={toggleDrawer("right", true)}
      >
        <MoreIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
};

export default MobileMenu;
