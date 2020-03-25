import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "./context";

const StyledLink = styled(Link)`
  /* position: relative; */
  margin: auto;
  background-size: 100%;
  text-indent: -9999px;
  height: 34px;
  width: 132px;
`;

const StyledImg = styled.img`
  width: 175px;
  height: 65px;
`;

function Navbar({ location }) {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    setLogo("logoMad");
  });

  return (
    <>
      <header className="site-header">
        <div className="site-branding">
          {location !== "/about" ? (
            <>
              <StyledLink to="/about">
                <StyledImg src={`assets/img/logo/${logo}.png`} alt="" />
              </StyledLink>
              <img className= "img-logo" src="/logo/marca.png" alt=""/>
              {/* <h2>Estudio de Arquitectos, Buenos Aires</h2> */}
            </>
          ) : (
            <>
              <StyledLink to="/proyect/1">
                <StyledImg src={`assets/img/logo/${logo}.png`} alt="" />
              </StyledLink>
              <h2>Estudio de Arquitectos, Buenos Aires</h2>
            </>
          )}
        </div>
      </header>

      <AppContext.Consumer>
        {(value) => {
          let {proyectos} = value
          return (
          // console.log("lalala", proyectos);
            // location !== "/about" ? (
              proyectos.length? 
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
              </div>:null
              
            // ) : null;    
        )}
        
        }
      </AppContext.Consumer>
    </>
  );
}

export default Navbar;
