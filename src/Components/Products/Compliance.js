import React, { Fragment } from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Grid
} from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  outer: {
    backgroundColor: "#331D48",
    paddingTop: 50,
    paddingBottom: 50,
    height: "auto",
    width: "100%"
  },
  container: {
    margin: "50px auto"
  },
  card: {
    boxShadow: "none",
    height: "100%",
    borderRadius: 10,
    textAlign: "center",
    backgroundColor: "#331D48"
  },
  cardImage: {
    boxShadow: "none",
    height: "100%",
    borderRadius: 10,
    textAlign: "center",
    //backgroundColor: "#F5F5F9",
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
    margin: "50px auto",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 'calc(0.5em + 10vw)',
    },
  },
  subtitle: {
    marginTop: 0,
    margin: "50px auto",
    textAlign: "center",
    color: "white"
  },
  button: {
    color: "white",
    display: "inherit",
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
  text: {
    color: "white",
  }
}));

const items = [
  {
    icon: require("../../img/mainFOE1.svg"),
    title: "A KYC Solution that is made to last",
    content: "",
    img: require("../../img/dataStorage.svg")
  }
];

const itemsTwo = [
  {
    icon: require("../../img/mainFOE1.svg"),
    title: "The new framework for Cryptocurrency companies",
    content: "",
    img: require("../../img/dataStorage.svg")
  }
];

const Compliance = () => {
  const classes = useStyles();

  const renderItems = items => {
    return items.map((item, key) => {
      return (
        <Fragment key={key}>
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                component="img"
                height="140"
                image={item.icon}
                alt={item.title}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" className={classes.text}>
                  {item.title}
                </Typography>
                <Typography variant="body2" className={classes.text} component="p">
                  Nowadays client onboarding can be done quickly, but has it
                  been done properly? Blanco’s new KYC platform enables
                  financial institutions to onboard clients beyond the level of
                  expertise that the regulator requires.<br/><br/>
                  Banks, Asset managers,Cryptocurrency brokers, Custodians and
                  other financial institutions each have their own requirements
                  when it comes to their KYC and AML procedures. Blanco’s
                  platform enables each type of financial institution to
                  customize their client intake, client file and monitoring
                  frequency exactly as they require. This saves costs for the
                  business and time for the clients.<br/><br/>
                  Combined with our expertise of structuring internal procedures
                  that have proven to be sufficient by the Regulator in several
                  European countries, we can assure that any business’s
                  compliance department will be ready for what comes next.
                  <br/>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.cardImage}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                //height="140"
                image={item.img}
              />
            </Card>
          </Grid>
        </Fragment>
      );
    });
  };
  const renderItemsTwo = itemsTwo => {
    return itemsTwo.map((item, key) => {
      return (
        <Fragment key={key}>
          <Grid item xs={12} sm={12} md={6} className={classes.cardImage}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                //height="140"
                image={item.img}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                height="140"
                image={item.icon}
                alt={item.title}
                title={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" className={classes.text}>
                  {item.title}
                </Typography>
                <Typography variant="body2" className={classes.text} component="p">
                  AMLD5 will have a serious impact on crypto brokers, custodians
                  and other financial institutions in Europe. By structuring
                  internal procedures combined with Blanco’s KYC platform and
                  blockchain forensic software, cryptocurrency companies will be
                  future proof and covered for anything their banks or
                  regulators require.
                  <br/><br/>
                  Contact us for more information or to schedule a demo.
                </Typography>
                <Link
                  to="contact#contactBanner"
                  className={classes.link}
                  scroll={el =>
                    el.scrollIntoView({ behavior: "instant", block: "end" })
                  }
                >
                  <Button className={classes.button} variant="contained">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Fragment>
      );
    });
  };

  return (
    <div className={classes.outer}>
      <Container className={classes.container} id="compliances">
        <Typography gutterBottom className={classes.title} variant="h2">
          COMPLIANCE
        </Typography>
        <Typography
          gutterBottom
          className={classes.subtitle}
          variant="subtitle2"
        >
          Before the birth of 7io, compliance made several of our activities
          more complex. But with the knowledge and products we have today, we
          see compliance as an opportunity instead of a blockade.
        </Typography>
        <Grid container spacing={2}>
          {renderItems(items)? renderItems(items) : <Skeleton variant="rect" width={210} height={118}/> }
          {renderItemsTwo(itemsTwo)? renderItemsTwo(itemsTwo) : <Skeleton variant="rect" width={210} height={118}/> }
        </Grid>
      </Container>
    </div>
  );
};

export default Compliance;
