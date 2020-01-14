import React from "react";
import {
  makeStyles,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  outer: {
    backgroundColor: "fafafa",
    //paddingTop: 50,
    paddingBottom: 50,
    height: "auto",
    width: "100%"
  },
  container: {
    margin: "50px auto",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
    },
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48",
    [theme.breakpoints.down("xs")]: {
      fontSize: "calc(0.5em + 10vw)",
      marginTop: 0,
    }
  },
  subtitle: {
    marginTop: 0,
    margin: "50px auto",
    textAlign: "center",
    color: "#9C9C9C"
  },
  span:{
    color: "#312750",
    fontWeight: "bold",
    fontSize: "1.2em",
  }
}));

const AboutIntro = () => {
  const classes = useStyles();

  return (
    <div className={classes.outer}>
      <Container className={classes.container}>
        <Typography gutterBottom className={classes.title} variant="h2">
          About
        </Typography>
        <Typography
          gutterBottom
          className={classes.subtitle}
          variant="subtitle2"
        >
          <span className={classes.span}>7io B.V. </span>is ran by a small team with extensive experience in
          compliance, finance, legal, and IT. We at <span className={classes.span}>7io </span> have handpicked premium
          products that meet our standards when it comes to improving these
          markets. By combining these products, we are able to create new custom
          fit solutions that have never been seen before. Our client base is
          diverse and consists of multinationals, financial institutions, data
          driven companies and other businesses that seek to improve their
          operations.
        </Typography>
      </Container>
    </div>
  );
};

export default AboutIntro;
