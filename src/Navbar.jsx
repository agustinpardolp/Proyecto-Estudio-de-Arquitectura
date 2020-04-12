import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./context";

const StyledLink = styled(Link)`
  margin: auto;
  background-size: 100%;
  text-indent: -9999px;
  height: 34px;
  width: 132px;
`;

const StyledImg = styled.img`
 width: 280px;
 /* margin-top: 1%; */
`;
const StyledNavBar = styled.div`
  height: ${props => props.about?"6%":"19%"};
  margin-bottom: 3%;
  margin-top:1%;
  @media (max-width: 1199px) {
  height:auto;
  scroll-margin-bottom:1%;
}
`;

function Navbar({ location}, ) {

  const [logo, setLogo] = useState("");
  const {pathname} = location

  useEffect(() => {
    setLogo("marca");
  });

  return (
    <StyledNavBar about = {pathname === "/about"?true:false}>
      <header className="site-header">
        <div className="site-branding">
          {location.pathname !== "/about" ? (
            <>
              <StyledLink to="/about">
                <StyledImg src={`/logo/${logo}.png`} alt="" />
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/proyect/1">
                <StyledImg src={`/logo/${logo}.png`} alt="" />
              </StyledLink>
            </>
          )}
        </div>
      </header>

      <AppContext.Consumer>
        {value => {
          let { proyectos } = value;
          return (
            location.pathname !== "/about" ? (
              proyectos.length ? (
                <div id="content" className="site-content">
                  <div id="expand">
                    <ul>
                      {proyectos &&
                        proyectos.map(proyecto => {
                          return (
                            <li key={proyecto.id}>
                              <Link to={`/${proyecto.nombre}/${proyecto.id}`}>
                                {proyecto.nombre}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
              ) : null
            ) : null
          );
        }}
      </AppContext.Consumer>
    </StyledNavBar>
  );
}

export default Navbar;
