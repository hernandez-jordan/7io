import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Slide,
  Container
} from "@material-ui/core";
import TriggerMenu from "./menu";
import { HashLink as Link } from "react-router-hash-link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolBar: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between"
  },
  appBar: {
    backgroundColor: "#331d48"
  },
  menu: {
    display: "flex",
    justifyContent: "rows"
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  }
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Nav = props => {
  const classes = useStyles();

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Container>
            <Toolbar className={classes.toolBar}>
              <Link
                to="/#heroBanner"
                className={classes.link}
                scroll={el => scrollWithOffset(el, 150)}
              >
                <Typography variant="h3">7io</Typography>
              </Link>
              <div className={classes.menu}>
                <TriggerMenu />
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </div>
  );
};

export default Nav;
