import React from "react";
import "./../styles/global.css";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import PricingPage from "./pricing";
import LegalPage from "./legal";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import "./../util/analytics";
import Chat from "./../components/Chat";

function App(props) {
  return (
    <>
      <Chat />
      <Router>
        <>
          <Navbar bgColor="bg-white" />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/legal/:section" component={LegalPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            size="md"
            bgColor="bg-white"
            bgImage=""
            bgImageOpacity={1}
            textColor=""
            sticky={true}
          />
        </>
      </Router>
    </>
  );
}

export default App;
