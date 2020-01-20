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
import img from "../../img/webSecurity.svg";
import img2 from "../../img/security.svg";

const useStyles = makeStyles(theme =>({
  outer: {
    backgroundColor: "#F5F5F9",
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
    backgroundColor: "#F5F5F9",
    paddingBottom: 20,
  },
  cardImage: {
    objectFit: "none",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#F5F5F9",
    backgroundImage: `url(${img})`,
    backgroundSize: "contain",
    backgroundPosition: "top",
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    },
  },
  cardImage2: {
    objectFit: "none",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#F5F5F9",
    backgroundImage: `url(${img2})`,
    backgroundSize: "contain",
    backgroundPosition: "top",
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    },
  },
  media: {
    height: 140
  },
  cardMedia: {
    objectFit: "none",
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48",
    [theme.breakpoints.down("xs")]: {
      fontSize: 'calc(0.5em + 10vw)',
    },
  },
  subtitle: {
    marginTop: 0,
    margin: "50px auto",
    textAlign: "center",
    color: "#9C9C9C",
    [theme.breakpoints.up("md")]: {
      width: "80%",
    }
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
}));

const items = [
  {
    icon: require("../../img/security2.svg"),
    title: "Web Security Map",
    content: "",
    img: require("../../img/dataStorage.svg")
  }
];

const itemsTwo = [
  {
    icon: require("../../img/security3.svg"),
    title: "Security audits",
    content: "",
    img: require("../../img/dataStorage.svg")
  }
];

const CyberSecurity = () => {
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
                <Typography gutterBottom variant="h5">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Our team has participated in making the internet a cleaner and
                  safer place. The open sourced non-profit project of the
                  internet cleanup foundation has shown governmental
                  institutions that their websites aren’t secure. <br/> <br/>
                  After three years of development, and seeing the government
                  actively use the product, we noticed that there is great value
                  for the private sector as well. Multinationals and businesses
                  with a large collection of domains and subdomains should check
                  if their data and the data of their clients is managed
                  properly.<br/><br/>
                  To show the rest of the company how your websites perform, we
                  have plotted the risk of your websites on a map that is
                  visible and understandable by all departments. This way your
                  complete company will sense the urge of improving your
                  security.<br/>
                  
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} className={classes.cardImage}>
          </Grid>
        </Fragment>
      );
    });
  };

  const renderItemsTwo = itemsTwo => {
    return itemsTwo.map((item, key) => {
      return (
        <Fragment key={key}>
          <Grid item xs={12} sm={12} md={6} className={classes.cardImage2} title={item.title}>
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
                <Typography gutterBottom variant="h5">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Our extensive experience in the field of cybersecurity enables
                  us to analyze, break, fix and improve your company’s security.
                  We are able to pen test your code to prevent attacks or if
                  it’s too late, we can show you what went wrong and make it
                  better. <br /> <br />
                  Interested in making your company safe?
                </Typography>
                <Link
                  smooth to="contact#contactContainer"
                  className={classes.link}
                  scroll={el => scrollWithOffset(el, 0)}
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
    <div className={classes.outer} id="cyberSecurity">
      <Container className={classes.container} >
        <Typography gutterBottom className={classes.title} variant="h2">
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
        <Grid container spacing={2}>
          {renderItems(items)}
          {renderItemsTwo(itemsTwo)}
        </Grid>
      </Container>
    </div>
  );
};

export default CyberSecurity;
