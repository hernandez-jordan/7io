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
    height: "100vh",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 100,
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
  heroImage2: {
    //height: 'calc(300px + 25vh)',
    width: "calc(55vw - 5vw)",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    marginLeft: "40vw",
    //marginLeft: 'calc(20px + 5vh)',
    //marginTop: 'calc(40vh + 5vh)',
    [theme.breakpoints.down("xs")]: {
      //height: 'calc(150px + 25vh)',
      //paddingTop: 200,
      width: "90vw",
      backgroundPosition: "center",
      marginLeft: "20vw"
    }
  }
}));

const ProductBanner = () => {
  const classes = useStyles();
  //const imageUrl = useWindowWidth() <= 300 ? BannerBackground1 : null;

  return (
    <div
      className={classes.heroImage}
      style={{ backgroundImage: `url(${BannerBackground3})` }}
    >
      <Container className={classes.container}>
        <div className={classes.slogan}>
          <h1>DATA STORAGE</h1>
          <p>By combining a new S3 compatible cloud storage solution</p>
          <p>with a local drive for windows, accessing and using your</p>
          <p>data becomes affordable and effortless.</p>
          <Link to="/contact" className={classes.link}>
            <Button className={classes.button} 
            variant="contained"
            startIcon={<PhoneIcon />}
            >
              Contact Us
            </Button>
          </Link>
          </div>
        {/* <div style={{ width: '30vw'}}></div> */}
        {/* <div className={classes.heroImage2} style={{backgroundImage :`url(${BannerBackground2})`}}></div> */}
      </Container>
    </div>
  );
};

export default ProductBanner;
