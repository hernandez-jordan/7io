import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PageNotFound from "./Pages/404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

const pageError = () => <PageNotFound />;

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="Description" content="Deals with Corporate Governance, IT Services, Compliance and Financing"/>
          <link rel="canonical" href="https://7io.eu"/>
          <title>7io - Combining the best</title>
          
        </Helmet>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route component={pageError} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
