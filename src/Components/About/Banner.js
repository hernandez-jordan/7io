import React from "react";
import { 
  makeStyles,
  Container,
 } from "@material-ui/core";
import Carousel from "nuka-carousel";
import image from "../../img/Baby-Yoda-2.jpg";


const useStyles = makeStyles(theme => ({
  outer: {
    backgroundColor: "#F5F5F9",
    paddingTop: 50,
    paddingBottom: 50,
    height: "auto",
    width: 600
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: "auto",
    marginTop: 20
  },
  button: {
    color: "white",
    borderRadius: "50px",
    backgroundColor: "#A765E6",
    width: "15em",
    height: "3em",
    margin: "50px auto",
    "&:hover": {
      backgroundColor: "#331D48",
      border: "2px solid white"
    }
  },
  link: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },card: {
    boxShadow: "none",
    height: "100%",
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#F5F5F9"
  },
  cardImage: {
    boxShadow: "none",
    height: "100%",
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#F5F5F9",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  media: {
    height: 140
  },
  cardMedia: {
    objectFit: "none"
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48",
    [theme.breakpoints.down("xs")]: {
      fontSize: "calc(0.5em + 10vw)"
    }
  },
  subtitle: {
    marginTop: 0,
    margin: "50px auto",
    textAlign: "center",
    color: "#9C9C9C"
  },
}));

const Banner = props => {
  const classes = useStyles();

  return (
    <Container className={classes.outer}>
      <Carousel
        dragging={true}
        swiping={true}
        initialSlidewidth={400}
      >
        <img alt="" src={image} />
        <img alt="" src={image} />
        <img alt="" src={image} />
        <img alt="" src={image} />
      </Carousel>
    </Container>
  );
};

export default Banner;

