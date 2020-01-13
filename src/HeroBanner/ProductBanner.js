import React from "react";
import { makeStyles, Container, Button, Typography } from "@material-ui/core";
import BannerBackground from "../img/bannerBackground11.svg";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from "react-router-dom";

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
    color: "white",
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
    }
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },
  container: {
    height: "100vh",
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
    height: 900,
    width: "100%",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "fafafa",
    [theme.breakpoints.down("xs")]: {
      //height: 550
    }
  },
  heroImage2: {
    width: "calc(55vw - 5vw)",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    marginLeft: "40vw",
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      backgroundPosition: "center",
      marginLeft: "20vw"
    }
  }
}));

const ProductBanner = () => {
  const classes = useStyles();

  return (
    <div
      id="productBanner"
      className={classes.heroImage}
      style={{ backgroundImage: `url(${BannerBackground})` }}
    >
      <Container className={classes.container}>
        <div className={classes.slogan}>
          <Typography gutterBottom className={classes.title} variant="h1">
            7io
          </Typography>
          <Typography gutterBottom className={classes.title} variant="h2">
            DATA STORAGE
          </Typography>
          <Typography
            gutterBottom
            className={classes.subTitle}
            variant="subtitle1"
          >
            By combining a new S3 compatible cloud storage solution <br />
            with a local drive for windows, accessing and using your <br />
            data becomes affordable and effortless <br />
          </Typography>
          <Link to="/contact" className={classes.link}>
            <Button
              className={classes.button}
              variant="contained"
              startIcon={<PhoneIcon />}
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ProductBanner;
