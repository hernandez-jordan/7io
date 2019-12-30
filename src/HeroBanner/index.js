import React from "react";
import { makeStyles, Container, Button } from "@material-ui/core";
import BannerBackground3 from "../img/bannerBackground3.png";
import PhoneIcon from "@material-ui/icons/Phone";
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
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
    height: 'auto',
    width: "100%",
    position: "relative",[theme.breakpoints.down("sm")]: {
      textAlign: 'center',
      paddingTop: 100,
    }
  },
  slogan: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "1.2em",
    paddingTop: 120,
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
      paddingTop: 10,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 10,
    }
  },
  heroImage: {
    height: 800,
    width: "100%",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    [theme.breakpoints.down("xs")]: {
      height: 550,
    }
  },
  heroContainer: {
    height: 700,
    width: '100%',
    overflow: 'auto',
  },
}));

const HeroBanner = () => {
  const classes = useStyles();
  //const imageUrl = useWindowWidth() <= 300 ? BannerBackground1 : null;

  return (
  <div>
    <div id="heroBanner">
        <div
            className={classes.heroImage}
            style={{ backgroundImage: `url(${BannerBackground3})` }}
          >
          <Container className={classes.container}>
            <div className={classes.slogan}>
              <h1>COMBINING THE BEST</h1>
              <p>Specialized in combining Legal, Finance and IT</p>
              <p>Reseller of unique and effective products</p>
              <p>Custom solutions that are made to last</p>
              <Link to="/contact" className={classes.link}>
                <Button className={classes.button} 
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
