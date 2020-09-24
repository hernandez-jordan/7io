import React from "react";
import { makeStyles, Typography, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  outer: {
    backgroundColor: "#331D48",
    paddingTop: 50,
    paddingBottom: 50,
    height: "auto",
    width: "100%",
  },
  container: {
    margin: "50px auto",
  },
  componentTitle: {
    margin: "50px auto",
    textAlign: "center",
    fontWeight: "bold",
    color: "#331D48",
  },
  grid: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
    },
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    margin: "20px 0",
    paddingRight: "20px",
  },
}));

const grids = [
  {
    xs: 12,
    sm: 6,
    md: 6,

    contents: [
      {
        variant: "h3",
        component:"h1",
        texts: [{ text: `7io` }],
        style: [
          {
            display: "inline-block",
            color: "white",
            paddingBottom: null,
          },
        ],
      },
      {
        variant: null,
        component: "h3",
        texts: [{ text: `Combining the Best` }],
        style: [
          {
            display: "inline-block",
            color: "white",
            paddingBottom: "20px",
          },
        ],
      },
      {
        variant: null,
        component: "subtitle1",
        texts: [{ text: `Copyright © 2019 7io, Powered by We Visualize It` }],
        style: [
          {
            display: "inline-block",
            color: "white",
            paddingBottom: null,
          },
        ],
      },
    ],
  },
  {
    xs: 12,
    sm: 3,
    md: 3,

    contents: [
      {
        variant: "h5",
        component: "h2",
        texts: [{ text: `Company` }],
        style: [
          {
            display: "inline-block",
            color: "white",
            paddingBottom: "20px",
          },
        ],
      },
      {
        variant: "body1",
        component: "p",
        texts: [
          { text: `KVK: 75374390` },
          { text: `BTW-Number: NL860257411B01` },
          { text: `Phone: +31106690867` },
        ],
        style: [
          {
            display: "inline-block",
            color: "white",
            paddingBottom: null,
          },
        ],
      },
    ],
  },
  {
    xs: 12,
    sm: 3,
    md: 3,

    contents: [
      {
        variant: "h5",
        component: "h2",
        texts: [{ text: `Contact us` }],
        style: [
          {
            display: "inline-block",
            color: "white",
            paddingBottom: "20px",
          },
        ],
      },
      {
        variant: "body1",
        component: "p",
        texts: [
          { text: `E-mail: contact@7io.net` },
          { text: `Address: Wijnhaven 3 D` },
          { text: `3011WG Rotterdam` },
        ],
        style: [
          {
            display: "inline-block",
            color: "white",
            paddingBottom: null,
          },
        ],
      },
    ],
  },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.outer}>
      <Container className={classes.container}>
        <Grid className={classes.grid}>
          {grids.map((grid, key) => (
            <Grid
              key={key}
              item
              className={classes.gridItem}
              xs={grid.xs}
              sm={grid.sm}
              md={grid.m}
            >
              {grid.contents.map((content, keyI) => (
                <Typography
                  key={keyI}
                  variant={content.variant}
                  component={content.component}
                  style={content.style[0]}
                >
                  {content.texts.map((text) => (
                    <>
                      {text.text} <br />
                    </>
                  ))}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
