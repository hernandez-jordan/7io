import React from "react";
import {
  makeStyles,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  outer: {
    backgroundColor: "#F2AE51",
    paddingTop: 50,
    paddingBottom: 50,
    height: "auto",
    width: "100%"
  },
  container: {
    margin: "50px auto"
  },
  title: {
    margin: "50px auto",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 'calc(0.5em + 10vw)',
    },
  },
}));

const FooterBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.outer}>
      <Container className={classes.container}>
        <Typography gutterBottom className={classes.title} variant="h2">
          COMBINING THE BEST
        </Typography>
      </Container>
    </div>
  );
};

export default FooterBanner;
