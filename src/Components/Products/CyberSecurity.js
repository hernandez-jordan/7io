import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
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
  title: {
    margin: "50px auto",
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48"
  },
  subtitle: {
    marginTop: 0,
    margin: "50px auto",
    textAlign: "center",
    color: "#9C9C9C"
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

const items = [
    {
      icon: require("../../img/mainFOE1.svg"),
      title: "Finance",
      content:
        "Fundraising, exchange listings, banking software and tokenization of assets."
    },
    {
      img: require("../../img/mainFOE2.svg"),
    },
  ];


const CyberSecurity = () => {
  const classes = useStyles();

  
  const renderItems = cardItems => {
    return items.map((item, key) => {
      return (
        <Grid item xs={12} sm={6} md={3} key={key}>
          <CardActionArea className={classes.card}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                component="icon"
                height="140"
                image={cardItem.icon}
                alt={cardItem.title}
                title={cardItem.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {cardItem.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {cardItem.content}
                </Typography>
              </CardContent>
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
          className={classes.title}
          variant="h2"
        >
          CYBER SECURITY
        </Typography>
        <Typography
          gutterBottom
          className={classes.subtitle}
          variant="subtitle2"
        >
          In this rapidly digitizing world, protection of personal and company
          data is becoming more urgent than ever before. We can help prevent
          hacks or if it’s too late, help determine what went wrong and fix it.
        </Typography>
        <Grid container spacing={1}>
          {renderItems(items)}
        </Grid>
        <Button size="medium" className={classes.button}>
          Read More
        </Button>
      </Container>
    </div>
  );
};

export default CyberSecurity;
