import React from "react";
import { useEffect } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Architecture from "./pages/Architecture";
import Contact from "./pages/Contacts";

const App = () => {
  return (
    <div id="page" className="glassmorph">
      <div class="gtco-loader"></div>
      <BrowserRouter forceRefresh={true}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/architecture" component={Architecture} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
        <BackToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
