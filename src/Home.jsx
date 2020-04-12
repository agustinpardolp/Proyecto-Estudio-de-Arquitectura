/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import { AppContext } from "./context";
import Detail from "./Detail";

const StyledDiv = styled.div`
  background: ${props => `url("/img/${props.img}") no-repeat fixed center;`};
  background-position: center;
  object-fit: cover;
  object-position: center center;
`;

const StyledDivContainer = styled.div`
    /* height:100%; */
`;
const StyledItem = styled.div`
  text-align: center;
  /* height: 62vh; */
  width: 1200px;
  background-color: white;
  img {
     /* width: 100%;  */
    height: -webkit-fill-available; 
    object-fit: contain;
    /* padding-bottom: 2%; */
    /* height:100%; */
  }
  @media (max-width: 1199px) {

    img {
      width: 100%;
    /* max-height: 100%; */
    padding-bottom: 2%;
    height:100%;
  }
  }
`;

const StyledCarousele = styled(Carousel)`
visibility:${props => props.showInfo? "hidden":"visible"};
&& a{
  width:50%;
  && span{
    visibility:hidden;
  }
}
`;

const StyledArticle = styled.article`
display: contents;
height: 78vh;
`;

function Home(props) {
  const context = useContext(AppContext);

  const [currentProyect, setCurrentProyect] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [counter, setCounter] = useState(1);
  const [index, setIndex] = useState(0);
  const [direction] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const {
    location: { pathname: pathname }
  } = props;

  useEffect(() => {
    let id = pathname.split("/")[2];
    id ? (id = id) : (id = 1);

    let { proyectos } = context;

    let proyecto = proyectos.filter(proyecto => {
      return proyecto.id == id;
    });
    setCurrentProyect(proyecto);
    setImagenes(proyecto[0].imagenes);
  }, [pathname]);

  const handleSelect = (selectedIndex, e, direction) => {
    setIndex(selectedIndex);

    if (counter !== imagenes.length) {
      setCounter(selectedIndex + 1);
    } else if (counter === imagenes.length) {
      setCounter(1);
    }
  };

  const openInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      {imagenes && imagenes.length ? (
        <main id="main" className="site-main" role="main">
            <StyledArticle
              id="article"
              className=""
            >
              <div className="entry-content">
                {/* <div className="row justify-content-center main-container">
                  <div className="col-sm-5 col-md-5 col-lg-5 main-container_col-images"> */}
                    <StyledCarousele
                      id = "carousele"
                      indicators={false}
                      activeIndex={index}
                      direction={direction}
                      onSelect={handleSelect}
                      slide={false}
                      interval={10000000000000}
                      showInfo = {showInfo}
                    >
                      {imagenes &&
                        imagenes.map(imagen => {
                          return (
                            <Carousel.Item key={imagen.id}>
                               <StyledDivContainer>
                                  <StyledItem >
                                    <img src={`/img/${imagen.nombre}`} alt="" />
                                </StyledItem>
                                </StyledDivContainer>
                              {/* <StyledDiv
                                className="carousel-item active"
                                img={imagen.nombre}
                              ></StyledDiv> */}
                            </Carousel.Item>
                          );
                        })}
                    </StyledCarousele>
                  {/* </div>
                </div> */}
                <Detail
                  imagenes={imagenes}
                  showInfo={showInfo}
                  currentProyect={currentProyect}
                />
              </div>
              
            </StyledArticle>
            <div className="button-container">
                <span
                  className="button-container_option-text-selector"
                  onClick={openInfo}
                >
                  Textos
                </span>
                <a
                  className="button-container_option-selector"
                  onClick={openInfo}
                >
                  {" "}
                  <span>{currentProyect[0].nombre}</span>
                </a>
                <div className="counter">
                  <span id="span-counter">
                    {counter}/{imagenes.length}
                  </span>
                </div>
              </div>
            <div className="images-container">
              {imagenes &&
                imagenes.map(imagen => {
                  return (
                    <div className="images-sub-container" key={imagen.id}>
                      <StyledDivContainer className="row">
                        <StyledItem className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <img src={`/img/${imagen.nombre}`} alt="" />
                        </StyledItem>
                      </StyledDivContainer>
                    </div>
                  );
                })}
              <Detail
                mobile
                imagenes={imagenes}
                showInfo={true}
                currentProyect={currentProyect}
              />
            </div>
          </main>
      ) : null}
    </>
  );
}

export default Home;
// className="col-xs-12 col-sm-12 col-md-12 col-lg-12"