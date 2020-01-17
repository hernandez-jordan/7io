import React, { Fragment } from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Container,
  Grid
} from "@material-ui/core";
import Carousel from "nuka-carousel";
import useWindowWidth from "../../utils/hooks/WindowWidth";

const useStyles = makeStyles(theme => ({
  outer: {
    backgroundColor: "#F2AE51",
    paddingTop: 50,
    paddingBottom: 50,
    height: "auto",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingBottom: 20,
    }
  },
  container: {
    margin: "50px auto"
  },
  card: {
    boxShadow: "none",
    height: "100%",
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#F2AE51"
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
    [theme.breakpoints.down("md")]: {
      width: "75%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  cardMedia: {
    objectFit: "none"
  },
  title: {
    marginTop: 50,
    marginBottom: 50,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "calc(0.5em + 10vw)",
    }
  },
  subtitle: {
    marginTop: 0,
    margin: "50px auto",
    textAlign: "center",
    color: "#9C9C9C"
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
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    margin: "auto",
    marginTop: 20
  },
  grid: {
    margin: "auto"
  },
}));

const items = [
  {
    icon: require("../../img/Baby-Yoda-2.jpg"),
    title: "Tribeca",
    img: require("../../img/partner1.svg"),
    link: "www.linkedin.com/in/peter-engelberg-2978105/"
  },
  {
    icon: require("../../img/Baby-Yoda-2.jpg"),
    title: "Wasabi",
    img: require("../../img/partner2.svg"),
    link: "www.linkedin.com/in/suresync/"
  },
  {
    icon: require("../../img/Baby-Yoda-2.jpg"),
    title: "Tribeca",
    img: require("../../img/partner1.svg"),
    link: "www.linkedin.com/in/peter-engelberg-2978105/"
  },
  {
    icon: require("../../img/Baby-Yoda-2.jpg"),
    title: "Wasabi",
    img: require("../../img/partner2.svg"),
    link: "www.linkedin.com/in/suresync/"
  },
  
];

const PartnersSlider = () => {
  const classes = useStyles();

  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 960;
  const renderItems = items => {
    return items.map((item, key) => {
      return (
        <Fragment key={key}>
          <Grid item>
            <Card className={classes.card}>
              <CardContent>
                <img alt={item.title} src={item.img} className={classes.media} />
              </CardContent>
            </Card>
          </Grid>
        </Fragment>
      );
    });
  };

  return (
    <div className={classes.outer}>
      <Container className={classes.container}>
        <Typography gutterBottom className={classes.title} variant="h2">
          Our Partners
        </Typography>
        <Carousel
          dragging={true}
          swiping={true}
          autoplay={true}
          cellAlign="center"
          slidesToShow={ isDesktop ? 3 : 1  }
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          enableKeyboardControls={true}
          renderBottomCenterControls={null}
          wrapAround = {true}
        >
          {renderItems(items)}
        </Carousel>
      </Container>
    </div>
  );
};

export default PartnersSlider;
