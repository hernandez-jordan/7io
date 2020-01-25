import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>7io</title>
          <link rel="canonical" href="https://7io.eu" />
        </Helmet>
        <Switch>
          <Route exact path="/">
            <Home
            />
          </Route>
          <Route path="/products">
            <Products
            />
          </Route>
          <Route path="/services">
            <Services
            />
          </Route>
          <Route path="/about">
            <About
            />
          </Route>
          <Route path="/contact">
            <Contact
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
