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


const exactPaths = [
  {
    path: "/",
    component: (() => <Home />), 
  },
  {
    path: "/products",
    component: (() => <Products />), 
  },
  {
    path: "/services",
    component: (() => <Services />), 
  },
  {
    path: "/about",
    component: (() => <About />), 
  },
  {
    path: "/contact",
    component: (() => <Contact />), 
  },
  {
    path: "/404",
    component: (() => <PageNotFound />), 
  },
];

function App() {
  return (
    <Router>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="Description"
            content="Deals with Corporate Governance, IT Services, Compliance and Financing"
          />
          <link rel="canonical" href="https://7io.eu" />
          <title>7io - Combining the best</title>
        </Helmet>
        <Switch>
          {exactPaths.map((path, key) => 
            <Route key={key} exact path={path.path}>
              {path.component}
            </Route>
          )}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
