import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AppProvider from "./context";
import NavBar from "./Navbar";
import Home from "./Home";
import About from "./About";

const Main = props => {
  

  return (
    <>
      <AppProvider>
        <div id="page" className="site">
          <Route component={NavBar} />
          <Redirect from="/:proyects/:id" to="/" component={Home} />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home}/>
            <Route path="/:proyects/:id" component={Home}/>
          </Switch>
        </div>
      </AppProvider>
    </>
  );
};

export default Main;
