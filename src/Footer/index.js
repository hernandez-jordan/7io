import React from "react";
import {
  makeStyles,
  Typography,
  Container,
  Grid
} from "@material-ui/core";

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
  componentTitle: {
    margin: "50px auto",
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48"
  },
  grid : {
    display: 'flex',
    [theme.breakpoints.down("xs")]: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      },
  },  
  gridItem : {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 0',
    paddingRight: '20px'
  },  
}));



const Footer = () => {
    const classes = useStyles();

    return(
      <div className={classes.outer}>
        <Container className={classes.container}>
              <Grid className={classes.grid}>
                  <Grid item className={classes.gridItem} xs={12} sm={6} md={6}>
                    <Typography variant="h3" component="h3" style={{display: 'inline-block', color: 'white'}}>
                        7io <br/>
                    </Typography>
                    <Typography variant="subtitle1" component="h3" style={{display: 'inline-block', color: 'white', paddingBottom:'20px'}}>
                        Combining the Best 
                    </Typography>
                    <Typography variant="body2" component="h3" style={{display: 'inline-block', color: 'white'}}>
                      Copyright © 2019 7io, Powered by <em>We Visualize It</em>
                    </Typography>
                  </Grid> 
                  
                  <Grid item className={classes.gridItem}  xs={12} sm={3} md={3}>
                    <Typography variant="h5" component="h3" style={{display: 'inline-block', color: 'white', paddingBottom: '20px'}}>
                        Company <br/>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{display: 'inline-block', color: 'white'}}>
                        KVK: 75374390 <br/>
                        BTW-Number: NL860257411B01 <br/>
                        Phone: +31106690867  <br/>
                    </Typography>
                  </Grid> 
                  <Grid item className={classes.gridItem}  xs={12} sm={3} md={3}>
                    <Typography variant="h5" component="h3" style={{display: 'inline-block', color: 'white', paddingBottom: '20px'}}>
                        Contact Us <br/>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{display: 'inline-block', color: 'white'}}>
                        E-mail: contact@7io.net <br/>
                        Address: Wijnhaven 3 D, <br/>
                        3011WG Rotterdam  <br/>
                    </Typography>
                  </Grid> 
              </Grid>
          </Container>
      </div>
       
    );
};

export default Footer;
