import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  Button,
  Typography,
  Container,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles({
  outer: {
    backgroundColor: "",
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
    textAlign: "center"
  },
  media: {
    height: 140
  },
  cardMedia: {
    objectFit: "none"
  },
  componentTitle: {
    margin: "50px auto",
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48"
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
  }
});

const DataStorage = () => {
  const classes = useStyles();

  const cardItems = [
    {
      img: require("../../img/mainFOE1.svg"),
      title: "Finance",
      content:
        "Fundraising, exchange listings, banking software and tokenization of assets."
    },
    {
      img: require("../../img/mainFOE2.svg"),
      title: "IT",
      content:
        "Cyber security audits, PoC architectures, data storage, DLT and complex problem solving."
    },
    {
      img: require("../../img/mainFOE1.svg"),
      title: "Legal",
      content:
        "Corporate governance, ESG, regulations, contract law and robust corporate structures."
    },
    {
      img: require("../../img/mainFOE3.svg"),
      title: "Compliance",
      content:
        "AML and KYC platform, Cryptocurrency forensic software, Consultancy in Cryptocurrency regulations, MIFIDii, AMLD5, GDPR."
    }
  ];

  const renderCardItems = cardItems => {
    return cardItems.map((cardItem, keyC) => {
      return (
        <Grid item xs={12} sm={6} md={3} key={keyC}>
          <CardActionArea className={classes.card}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                height="140"
                image={cardItem.img}
                alt={cardItem.title}
                title={cardItem.title}
              />
            </Card>
          </CardActionArea>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.outer}>
      <Container className={classes.container}>
        <Typography
          gutterBottom
          className={classes.componentTitle}
          variant="h2"
          component="h1"
        >
          DATA STORAGE
        </Typography>
        <Grid container spacing={1}>
          {renderCardItems(cardItems)}
        </Grid>
        <Button size="medium" className={classes.button}>
          Read More
        </Button>
      </Container>
    </div>
  );
};

export default DataStorage;