import React from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  Typography,
  Container,
  Grid
} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles(theme =>({
  outer: {
    backgroundColor: "",
    //paddingTop: 50,
    paddingBottom: 50,
    height: "auto",
    width: "100%"
  },
  container: {
    margin: "50px auto",
    [theme.breakpoints.down("xs")]: {
      //marginTop: 0,
    }
  },
  card: {
    boxShadow: "none",
    borderRadius: 10,
    textAlign: "center",
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down("xs")]: {
      height: 'auto',
    },
  },
  media: {
    height: 140
  },
  cardMedia: {
    
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48",
    [theme.breakpoints.down("xs")]: {
      fontSize: 'calc(0.5em + 10vw)',
      marginTop: 0,
    },
  },
  titleCloud: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48",
  },
  subtitle: {
    marginTop: 0,
    margin: "50px auto",
    textAlign: "center",
    color: "#9C9C9C"
  },
  subtitleCloud:{
    lineHeight: 2.5, 
    color:'#331D48', 
    margin: 0,
  }
}));


const DataStorage = () => {
  const classes = useStyles();

  const cardItems = [
    {
      img: require("../../img/dataStorage.svg"),
    },
  ];

  const cloudSubItems = [
    {
      subItem: 'NO EGRESS COSTS',
    },
    {
      subItem: 'NO API CHARGES',
    },
    {
      subItem: 'ONE TIER FITS ALL',
    },
    {
      subItem: 'FLAT FEE OF $5,99 TB/M',
    },
    {
      subItem: 'ENTERPRISE-CLASS SECURITY',
    },
    {
      subItem: 'S3 COMPLIANT',
    },
    {
      subItem: 'PRE-ESTIMATED SERVICE FEE',
    },
    {
      subItem: '11x9s OF DATA DURABILITY',
    },
    {
      subItem: 'FAST & SECURE DATA MIGRATION',
    },
    {
      subItem: 'UP TO 6X THE SPEED OF AMAZON',
    },
  ]

  const renderCardItems = cardItems => {
    return cardItems.map((cardItem, key) => {
      return (
        <Grid item xs={12} sm={6} md={4} key={key}>
          
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                component="img"
                //height="140"
                image={cardItem.img}
              />
            </Card>
          
        </Grid>
      );
    });
  };

  const renderSubItems = cloudSubItems => {
    return cloudSubItems.map((cloudSubItem, key)=> {
      return(
        <Grid container spacing={1} key={key}>
          <Grid item xs={2} sm={2} md={2}>
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <CheckIcon style={{color: '#39ca39', marginRight: 30}} />
          </Grid>
          <Grid item xs={8} sm={8} md={8}>
            <Typography
              gutterBottom
              className={classes.subtitleCloud}
              variant="subtitle2"
            >
            {cloudSubItem.subItem} <br/>
            </Typography>
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <div className={classes.outer} id="dataStorage">
      <Container className={classes.container} >
        <Typography
          gutterBottom
          className={classes.title}
          variant="h2"
        >
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
          <Grid item xs={12} sm={6} md={6}>
            <Typography
              gutterBottom
              className={classes.titleCloud}
              variant="h6"
            >
              Disruptive hot cloud storage
            </Typography>
            {renderSubItems(cloudSubItems)}
          </Grid>
          {renderCardItems(cardItems)}
        </Grid>
      </Container>
    </div>
  );
};

export default DataStorage;
