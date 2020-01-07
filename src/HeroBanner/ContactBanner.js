import React from "react";
import { makeStyles, Container, Button } from "@material-ui/core";
import BannerBackground4 from "../img/bannerBackground4.svg";
import PhoneIcon from "@material-ui/icons/Phone";
import { HashLink as Link } from 'react-router-hash-link';

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
    },
    [theme.breakpoints.down("sm")]: {
      display:'none',
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
      paddingTop: 50,
      textAlign: 'center',
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
  heroImage2: {
    height: '100%',
    width: 'auto',
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    },
    [theme.breakpoints.up("md")]: {
    }
  },
  heroBackground: {
    width: "",
    height: 600,
    backgroundColor: '#331D48',
    [theme.breakpoints.down("sm")]: {
      height: 300,
    }
  },
  imageContainer :{
    height: '100%',
    width: '50%',
    padding: 50,
    paddingRight: 50,
    [theme.breakpoints.up("me")]: { 
    }
  },
  
}));

const ContactBanner = () => {
  const classes = useStyles();
  //const imageUrl = useWindowWidth() <= 300 ? BannerBackground1 : null;

  return (
    <div className={classes.heroBackground} id="contactBanner">
      <Container className={classes.container}>
        <div className={classes.slogan}>
          <h1>Contact Us</h1>
          <p>For questions, quotes or other inquiries</p>
          
          <Link smooth to="#contactContainer" className={classes.link}>
            <Button className={classes.button} 
            variant="contained"
            startIcon={<PhoneIcon />}
            >
              Contact Us
            </Button>
          </Link>
          </div>
        <div className={classes.imageContainer}>
          <div className={classes.heroImage2} style={{backgroundImage :`url(${BannerBackground4})`}}></div>
        </div> 
      </Container>
    </div>
  );
};

export default ContactBanner;
