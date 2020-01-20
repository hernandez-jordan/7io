import React, { Fragment } from "react";
import { 
  makeStyles, 
  Typography, 
  Container, 
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
 } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import img from "../../img/dataStorage-part.svg";
import { HashLink as Link } from "react-router-hash-link";

const useStyles = makeStyles(theme => ({
  outer: {
    paddingBottom: 50,
    height: "auto",
    width: "100%"
  },
  container: {
    margin: "50px auto"
  },
  card: {
    boxShadow: "none",
    borderRadius: 10,
    textAlign: "center",
    height: "100%",
    alignItems: "center",
    paddingBottom: 20,
    [theme.breakpoints.down("xs")]: {
      height: "auto"
    }
  },
  media: {
    height: 140
  },
  cardMedia: {
    objectFit: "none",
  },
  cardImage: {
    objectFit: "none",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#fafafa",
    backgroundImage: `url(${img})`,
    backgroundSize: "contain",
    backgroundPosition: "top",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48",
    [theme.breakpoints.down("xs")]: {
      fontSize: "calc(0.5em + 10vw)",
      marginTop: 0
    }
  },
  titleCloud: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48"
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
  subtitleCloud: {
    lineHeight: 2.5,
    color: "#331D48",
    margin: 0
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
    margin: "auto",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none"
    }
  },
  grid:{
    marginBottom: 50
  },
}));

const DataStorage = () => {
  const classes = useStyles();
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  };

  const items = [
    {
      icon: require("../../img/cloud-DS.svg"),
      title: "TntDrive",
      content: `
        TntDrive is a new S3 Client for Windows. With TntDrive you can 
        easily mount a Wasabi Bucket as a Network or Removable Drive under Windows. 
        Which enables you to work with your Wasabi files as easily as if they were on your local drive`,
      img: require("../../img/dataStorage-part.svg")
    },
    {
      icon: require("../../img/drive-DS.svg"),
      title: "Fast and secure data migration",
      content: `
        Data migration can be done by a simple internet connection, a direct connection or by migration pods. 
        Clients that currently have their data stored with an S3 compatible storage provider can even use AWS 
        Direct connect to migrate the data. Based on the amount of data, the current storage method and the 
        strength of the internet connection we can help you determine which method is most suitable for your business.`,
      img: require("../../img/dataStorage.svg")
    }
  ];
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
                  {item.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Fragment>
      );
    });
  };

  const cloudSubItems = [
    {
      subItem: "NO EGRESS COSTS"
    },
    {
      subItem: "NO API CHARGES"
    },
    {
      subItem: "ONE TIER FITS ALL"
    },
    {
      subItem: "FLAT FEE OF $5,99 TB/M"
    },
    {
      subItem: "ENTERPRISE-CLASS SECURITY"
    },
    {
      subItem: "S3 COMPLIANT"
    },
    {
      subItem: "PRE-ESTIMATED SERVICE FEE"
    },
    {
      subItem: "11x9s OF DATA DURABILITY"
    },
    {
      subItem: "FAST & SECURE DATA MIGRATION"
    },
    {
      subItem: "UP TO 6X THE SPEED OF AMAZON"
    }
  ];

  const renderSubItems = cloudSubItems => {
    return cloudSubItems.map((cloudSubItem, key) => {
      return (
        <Grid container spacing={1} key={key}>
          <Grid item xs={2} sm={2} md={2}></Grid>
          <Grid item xs={2} sm={2} md={2}>
            <CheckIcon style={{ color: "#39ca39", marginRight: 30 }} />
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography
              gutterBottom
              className={classes.subtitleCloud}
              variant="subtitle2"
            >
              {cloudSubItem.subItem} <br />
            </Typography>
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.outer} id="dataStorage">
      <Container className={classes.container}>
        <Typography gutterBottom className={classes.title} variant="h2">
          DATA STORAGE
        </Typography>
        <Typography
          gutterBottom
          className={classes.subtitle}
          variant="subtitle2"
        >
          By combining a new S3 compatible cloud storage solution with a local
          drive for windows, accessing and using your data becomes affordable
          and effortless. 7io is a proud partner of Wasabi and offers their
          services at the same price with an extra layer of support. Wasabi
          offers cloud storage that is simply better and mostly cheaper than
          most data storage services on the market.
        </Typography>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6} className={classes.grid}>
            <Typography
              gutterBottom
              className={classes.titleCloud}
              variant="h6"
            >
              Disruptive Hot Cloud Storage
            </Typography>
            {renderSubItems(cloudSubItems)}
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.cardImage}></Grid>
          {renderItems(items)}  
          <Link
            smooth
            to="contact#contactContainer"
            className={classes.link}
            scroll={el => scrollWithOffset(el, 0)}
          >
            <Button className={classes.button} variant="contained">
              Contact Us
            </Button>
          </Link>
        </Grid>
      </Container>
    </div>
  );
};

export default DataStorage;
