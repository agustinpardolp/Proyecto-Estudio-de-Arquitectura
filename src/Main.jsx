import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import AppProvider from "./context";
import styled from "styled-components";
import NavBar from "./Navbar";
import Home from "./Home";
import About from "./About";

const Main = props => {

  const StyledSpinner = styled(Spinner)`
    top: 400px;
    display: inline-block;
    position: relative;
    left: 600px;
  `;

  return (
    <>
      <AppProvider>
        <div id="page" className="site">
          <NavBar />
          <Redirect from="/:proyects/:id" to="/" component={Home} />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home}/>
            <Route exact path="/:proyects/:id" component={Home}/>
          </Switch>
        </div>

        {/* <StyledSpinner animation="grow" variant="secondary" /> */}
      </AppProvider>
    </>
  );
};

export default Main;
