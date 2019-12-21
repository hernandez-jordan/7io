import React from "react";
import { makeStyles, GridList, GridListTile, Container } from "@material-ui/core";
//import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles(theme => ({
    outer: {
        backgroundColor: "#F2AE51",
        height: "auto",
        width: "100%",
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    root: {
        //display: "flex",
        //flexWrap: "wrap",
        //justifyContent: "space-around",
        overflow: "hidden",
    },
    gridList: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
        [theme.breakpoints.up("md")]: {
            paddingRight: 50,
            paddingLeft: 50,
        },
    },
    gridListItem:{
        margin: 'auto 20px',
    },
    title: {
        color: 'white'
    },
    titleBar: {
        background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    },
    img:{
        width: '100%',
        height: '100%',
        [theme.breakpoints.up("md")]: {
            width: '300px',
        },
    },
}));



const PartnersSlide = () => {
  const classes = useStyles();
  
  const tileData = [
  {
    img: require("../../img/partner1.svg"),
    title: "Tribeca",
    author: "Tribeca"
  },
  {
    img: require("../../img/partner2.svg"),
    title: "Wasabi",
    author: "Wasabi"
  },
  {
    img: require("../../img/partner3.svg"),
    title: "Tribeca",
    author: "Tribeca"
  },
  {
    img: require("../../img/partner4.svg"),
    title: "Wasabi",
    author: "Wasabi"
  }
];

  return (
    <div className={classes.outer}>
        <Container>
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map(tile => (
                    <GridListTile key={tile.img} className={classes.gridListItem}>
                        <img src={tile.img} alt={tile.title} className={classes.img}/>
                        {/* <GridListTileBar
                        title={tile.title}
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,

                        }} */}
                    />
                    </GridListTile>
                    ))}
                </GridList>
            </div>
        </Container>
    </div>  
  );
};

export default PartnersSlide;
