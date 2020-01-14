import React from "react";
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

const useStyles = makeStyles(theme => ({
  outer: {
    backgroundColor: "#fafafa",
    //paddingTop: 50,
    paddingBottom: 50,
    height: "auto",
    width: "100%"
  },
  container: {
    margin: "50px auto",
    textAlign: "center",
  },
  card: {
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
  }
}));

const items = [
  {
    icon: require("../../img/mainFOE1.svg"),
    title: "Corporate Governance",
    content:
      "We will guide our clients in their search for the best law firm/legal team in their jurisdiction to obtain the solutions that work in today’s rapidly changing markets. Being one of 7io B.V. founding Partners, Tribeca S.A. has a large network of world-wide service providers, such as professional law firms and auditors. Tribeca S.A. is already an approved counterpart of these service providers, which will simplify access for 7io B.V.’s clients. Our team has a wide range of expertise and we specialize in Corporate Governance, ESG, Agreements and Corporate structures.",
    img: require("../../img/dataStorage.svg")
  },
  {
    icon: require("../../img/mainFOE1.svg"),
    title: "IT Services",
    content:
      "Our team has been around the IT industry for over 20 years focusing on any piece of code that needed to be battle tested or fixed. We have the knowledge to roll out proof of concepts effortlessly and have the network to put a team of experienced developers, hackers or system integrators on the job. Specializing in cyber security, PoC architectures, data storage, DLT and complex problem solving.",
    img: require("../../img/dataStorage.svg")
  },
  {
    icon: require("../../img/mainFOE1.svg"),
    title: "Compliance",
    content:
      "Our team has experienced compliance from many different angles. Dealing with complex matters such as cryptocurrencies, storing client data properly for GDPR or managing a full compliance department for a bank are just some examples of what our experience builds on. We are specialized in consultancy regarding Cryptocurrency regulations, MIFIDii, AML and GDPR.",
    img: require("../../img/dataStorage.svg")
  },
  {
    icon: require("../../img/mainFOE1.svg"),
    title: "Financing",
    content:
      "The 7io B.V. team has a broad network that enables us to raise capital through several methods in several countries. When provided with the proper documentation, we are able to connect clients with crowdfunding, private equity and venture capital firms for just about any amount required.",
    img: require("../../img/dataStorage.svg")
  }
];

const AllServices = () => {
  const classes = useStyles();
  
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  };


  const renderItems = items => {
    return items.map((item, key) => {
      return (
          <Grid item xs={12} sm={6} md={6} key={key}>
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
                <Typography gutterBottom variant="h5">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
      );
    });
  };

  return (
    <div className={classes.outer} id="services">
      <Container className={classes.container}>
        <Typography gutterBottom className={classes.title} variant="h2">
          SERVICES
        </Typography>
        <Typography
          gutterBottom
          className={classes.subtitle}
          variant="subtitle2"
        >
          Besides our solutions, we offer our services separately in which we
          consult and help clients achieve what they desire.
        </Typography>
        <Grid container spacing={2}>
          {renderItems(items)}
        </Grid>
        <Typography
          style={{marginTop: 50}}
          variant="subtitle2"
        >
          For any questions about our services please contact us.
        </Typography>
        <Link
          to="contact#contactContainer"
          className={classes.link}
          scroll={el => scrollWithOffset(el, 0)}
        >
          <Button className={classes.button} variant="contained">
            Contact Us
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default AllServices;
