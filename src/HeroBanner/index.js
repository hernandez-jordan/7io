import React from "react";
import { makeStyles, Container, Button, Typography } from "@material-ui/core";
import landingBanner from "../img/landingBanner.svg";
import PhoneIcon from "@material-ui/icons/Phone";
import { HashLink as Link } from "react-router-hash-link";

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
    height: "auto",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingTop: 100
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
    backgroundImage: `url(${landingBanner})`,
    [theme.breakpoints.down("xs")]: {
      height: 750,
    }
  },
}));

const HeroBanner = () => {
  const classes = useStyles();
  //const imageUrl = useWindowWidth() <= 300 ? BannerBackground1 : null;

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
      <div id="heroBanner">
        <div
          className={classes.heroImage}
        >
          <Container className={classes.container}>
            <div className={classes.slogan}>
                <Typography gutterBottom className={classes.title} variant="h1">
                  7io
                </Typography>
                <Typography gutterBottom className={classes.title} variant="h3">
                  COMBINING THE BEST
                </Typography>
                <Typography
                  gutterBottom
                  className={classes.subTitle}
                  variant="subtitle1"
                >
                  - Specialized in combining Legal, Finance and IT <br />
                  - Reseller of unique and effective products <br />
                  - Custom solutions that are made to last <br />
                </Typography>
                <Link
                  smooth
                  to="/contact#contactContainer"
                  className={classes.link}
                  scroll={el => scrollWithOffset(el, 0)}
                >
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
      </div>
    </div>
  );
};

export default HeroBanner;
