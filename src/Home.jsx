import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import AppProvider, { AppContext } from "./context";
import Detail from "./Detail";

const StyledDiv = styled.div`
  background: ${props => `url("/img/${props.img}") no-repeat fixed center;`};
  object-fit: cover;
  object-position: center center;
`;

const StyledDivContainer = styled.div`
 /* background: ${props =>
   `url("/assets/img/img/${props.img}") no-repeat center;`};
  background-size: cover;
  background-position: center;
  background-color: black;
  background-size: cover; */
`;
const StyledItem = styled.div`
  text-align: center;
  height: 100%;
  background-color: white;
  img {
    width: 100%;
    max-height: 100%;
    padding-bottom: 2%;
  }
`;

function Home(props) {
  const context = useContext(AppContext);

  const [currentProyect, setCurrentProyect] = useState([]);
  const [imagenes, setImagenes] = useState([]);
  const [counter, setCounter] = useState(1);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
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

    console.log("direction", direction, selectedIndex);
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
        <div id="primary" className="content-area">
          <main id="main" className="site-main" role="main">
            <article
              id="post-2179"
              className="post-2179 post type-post status-publish format-standard hentry category-non-classNamee"
            >
              <div className="entry-content">
                <div className="row justify-content-center main-container">
                  <div className="col-sm-5 main-container_col-images">
                    <Carousel
                      indicators={false}
                      activeIndex={index}
                      direction={direction}
                      onSelect={handleSelect}
                      slide={false}
                      interval={10000000000000}
                    >
                      {imagenes &&
                        imagenes.map(imagen => {
                          return (
                            <Carousel.Item key={imagen.id}>
                              <StyledDiv
                                className="carousel-item active"
                                img={imagen.nombre}
                              ></StyledDiv>
                            </Carousel.Item>
                          );
                        })}
                    </Carousel>
                  </div>
                </div>
                <Detail imagenes={imagenes} showInfo={showInfo} currentProyect = {currentProyect}/>
              </div>
              <div className="button-container">
                <span className = "button-container_option-text-selector" onClick={openInfo}>Textos</span>
                <a
                  className="button-container_option-selector"
                  onClick={openInfo}
                > {console.log("curre", currentProyect)}
                  <span >{currentProyect[0].nombre}</span>
                </a>
                <div className="counter">
                  <span id="span-counter">
                    {counter}/{imagenes.length}
                  </span>
                </div>
              </div>
            </article>
            <div className="images-container">
              {imagenes &&
                imagenes.map(imagen => {
                  return (
                    <div className="images-sub-container" key={imagen.id}>
                      <StyledDivContainer className="row">
                        <StyledItem className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <img
                            src={`/assets/img/img/${imagen.nombre}`}
                            alt=""
                          />
                        </StyledItem>
                      </StyledDivContainer>
                    </div>
                  );
                })}
              <Detail imagenes={imagenes} showInfo={true} />
            </div>
          </main>
        </div>
      ) : null}
    </>
  );
}

export default Home;
