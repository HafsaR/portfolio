import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Landing from "./components/Landing";
import Portfolio from './components/Portfolio';


function Hello() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio}/>
      </BrowserRouter>
    </div>
  );
}

export default Hello;
