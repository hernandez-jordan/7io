import React from "react";
import { makeStyles, Container, Button, Typography } from "@material-ui/core";
import pageNotFound from "../img/404.svg";
import { HashLink as Link } from "react-router-hash-link";
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "calc(0.5em + 10vw)"
    }
  },
  subTitle: {
    color: "white"
  },
  button: {
    color: "white",
    borderRadius: "50px",
    backgroundColor: "#A765E6",
    width: "15em",
    height: "3em",
    marginTop: "20px",
    "&:hover": {
      backgroundColor: "#331D48",
      border: "2px solid white"
    },
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },
  container: {
    height: "auto",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 100,
      textAlign: "center"
    }
  },
  slogan: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "1.2em",
    paddingTop: 120,
    lineHeight: "2em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
      paddingTop: 10
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 10
    }
  },
  heroImage: {
    height: "100vh",
    width: "100%",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#331D48",
    backgroundImage: `url(${pageNotFound})`,
  },
}));

const PageNotFoundBanner = () => {
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
    <div
      className={classes.heroImage}
    >
      <Container className={classes.container}>
        <div className={classes.slogan}>
            <Typography gutterBottom className={classes.title} variant="h2">
              404 Page not found
            </Typography>
            <Typography
              gutterBottom
              className={classes.subTitle}
              variant="subtitle1"
            >
              UH oh...
            </Typography>
            <Link
              smooth
              to="/"
              className={classes.link}
              scroll={el => scrollWithOffset(el, 0)}
            >
              <Button
                className={classes.button}
                variant="contained"
                startIcon={<HomeIcon />}
              >
                Back to Home
              </Button>
            </Link>
        </div>
      </Container>
    </div>
  );
};

export default PageNotFoundBanner;
