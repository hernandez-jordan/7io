import React, { Fragment } from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Button,
  Typography,
  Container,
  Grid
} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Avatar from "@material-ui/core/Avatar";
import Carousel from "nuka-carousel";

const useStyles = makeStyles(theme => ({
  outer: {
    backgroundColor: "#fafafa",
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
    backgroundColor: "#Fafafa"
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
    color: "#9C9C9C",
    [theme.breakpoints.up("md")]: {
      width: "80%",
    }
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
    margin: "auto",
    paddingTop:20,
    paddingBottom: 20,
  }
}));

const items = [
  {
    icon: require("../../img/peter.png"),
    title: "Peter Engelberg",
    content: `Peter Engelberg has strong managerial expertise as CEO of a Luxembourg Bank 
      and from running International Asset Management & Private Equity firms. 
      The solid experience of Peter builds on knowledge of the international 
      Financial Markets, strategic acumen and experience of Corporate Finance deals. 
      He has an extensive work experience as a business and legal advisor through Board 
      memberships as well as general counsel positions to both major corporations and startups.
      Peter holds a Master’s degree in Law from Lund University, Sweden, and a diploma of studies 
      in International Management from IMD in Lausanne, Switzerland.`,
    img: require("../../img/dataStorage.svg"),
    link: "https://www.linkedin.com/in/peter-engelberg-2978105/"
  },
  {
    icon: require("../../img/eelko.png"),
    title: "Eelko Neven",
    content: `In 2001 Eelko kickstarted his promising career as a SoftwareEngineer
      at Fintrans where he became an expert in digitizing the insurance industry. 
      When the company was bought by Centriche joined there Dataxchange department 
      where he worked on several software projects like customs declarations software,
      subsidy software and telepresence solutions. Eelko’s everlasting urge to increase 
      his technological knowledge and skill enabled him to solve countless problems for 
      a wide array of companies as a young entrepreneur. Becoming a Master of Digital Security,
      Eelko discovered multiple leaks for big name enterprises like Google and Twitter. 
      Nowadays Eelko focuses on providing revolutionary solutions for businesses that 
      seek to improve their IT department.`,
    img: require("../../img/dataStorage.svg"),
    link: "https://www.linkedin.com/in/suresync/"
  },
  {
    icon: require("../../img/alex.png"),
    title: "Alexander Metz",
    content: `Alexander has been doing sales in a diverse set of markets in the US
      and The Netherlands since 2012. During college in 2016 he became a 
      successful trader and investor in the cryptocurrency market. In 2017
      he decided to go full time andopened a company focused on blockchain
      and cryptocurrencies. Shortly after, he merged his company with 
      a cryptocurrencybroker specializing in Token use cases, regulation
      and the bridge between the world of finance and cryptocurrencies.
      During his time in the Blockchain space, Alex joined several fintech
      startups in which he did sales and operations. Today,Alex can be 
      found in the field doing sales and consultancy in the IT and Fintech sector.`,
    img: require("../../img/dataStorage.svg"),
    link: "https://www.linkedin.com/in/alex-metz-a07582156/"
  }
];

const Team = () => {
  const classes = useStyles();

  const renderItems = items => {
    return items.map((item, key) => {
      return (
        <Fragment key={key}>
          <Grid item xs={12} sm={12} md={8} lg={8} className={classes.grid}>
            <Card className={classes.card}>
              <Avatar alt={item.title} src={item.icon} className={classes.large} />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.content}
                </Typography>
                <a href={item.link} className={classes.link}>
                  <Button
                    className={classes.button}
                    variant="contained"
                    startIcon={<LinkedInIcon />}
                  >
                    Contact Me
                  </Button>
                </a>
              </CardContent>
            </Card>
          </Grid>
        </Fragment>
      );
    });
  };

  return (
    <div className={classes.outer} id="cyberSecurity">
      <Container className={classes.container}>
        <Typography gutterBottom className={classes.title} variant="h2">
          OUR TEAM
        </Typography>
        <Typography
          gutterBottom
          className={classes.subtitle}
          variant="subtitle2"
        >
          7io B.V. is ran by a small team with extensive experience in
          compliance, finance, legal, and IT. Besides 7io’s three founders, the
          team consists of hundreds of worldwide employees that participate in
          making the offered solutions unique.   By working with our partners
          and their teams, we are able to create new custom fit solutions that
          have never been seen before. Our client base is diverse and consists
          of multinationals, financial institutions, data driven companies and
          other businesses that seek to improve their operations.
        </Typography>
        <Carousel
          dragging={true}
          swiping={true}
          cellAlign="center"
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          enableKeyboardControls={true}
          wrapAround={true}
          autoplay={true}
          pauseOnHover={true}
          autoplayInterval={10000}
          heightMode="max"
          //vertical={true}
        >
          {renderItems(items)}
        </Carousel>
      </Container>
    </div>
  );
};

export default Team;
