import React from "react";
import { makeStyles, Container, Button } from "@material-ui/core";
import BannerBackground3 from "../img/bannerBackground3.png";
import PhoneIcon from "@material-ui/icons/Phone";

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
  container: {
    display: "flex",
    height: "100vh",
    width: "100%",
    position: "relative"
  },
  slogan: {
    position: "absolute",
    top: "120px",
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "1.2em",
    [theme.breakpoints.down("xs")]: {
      top: "100px",
      fontSize: "0.9em"
    }
  },
  heroImage: {
    height: "auto",
    width: "100vw",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginBottom: 20,
    [theme.breakpoints.up("sm")]: {
      height: "800px"
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

const HeroBanner = () => {
  const classes = useStyles();
  //const imageUrl = useWindowWidth() <= 300 ? BannerBackground1 : null;

  return (
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
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<PhoneIcon />}
          >
            Contact Us
          </Button>
        </div>
        {/* <div style={{ width: '30vw'}}></div> */}
        {/* <div className={classes.heroImage2} style={{backgroundImage :`url(${BannerBackground2})`}}></div> */}
      </Container>
    </div>
  );
};

export default HeroBanner;
