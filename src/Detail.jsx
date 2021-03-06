import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';


const TextInfoContainer = styled.div`
  display: flex;
  position: ${props => props.mobile?null: "absolute"};
  top: ${props => props.mobile? null: "1%"};
  visibility: ${props => props.visibility};
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 65vh;
  @media (max-width: 1199px) {
    height: 50%;
  }
`;

export default function Detail({ showInfo, currentProyect, mobile} ) {

  return (
    <>
    {currentProyect && currentProyect.length ?
      <TextInfoContainer visibility={showInfo ? "visible" : "hidden"} mobile = {mobile}>
        <div className="text-button-container_hidden-text">
          <div className="text-button-container_text-content" id="text-content">
            <p>
              <strong>{currentProyect[0].nombre}</strong>
              <br />
              <br />
              {currentProyect[0].descripcion}
            </p>
          </div>
          <div
            className="text-button-container_colum-options"
            id="colum-options"
          >
            <ul>
            <br />
              <li>
              <strong>OBRA</strong> &#8211; <em><strong>{currentProyect[0].nombre}</strong></em>
                <br />
              </li>
              <li>
                <strong>AUTORES</strong> currentProyect[0].autores
              </li>
              <li>
                <strong>UBICACION </strong> {currentProyect[0].ubicacion}&amp;
              </li>
              <li>
                <strong>PROGRAMA</strong> {currentProyect[0].programa}
              </li>
              <li>
                <strong>SUPERFICIE</strong> {currentProyect[0].superficie}
              </li>
              <li>
                <strong>AÑO</strong> {currentProyect[0].año}
              </li>
              <li>
                <strong>ASESORES</strong> {currentProyect[0].asesores}
              </li>
              <li>
                <strong>COLABORADORES</strong> {currentProyect[0].colaboradores}
              </li>
              <li>
                <strong>CONSTRUCTOR</strong> {currentProyect[0].constructor}
              </li>
              <li>
                <strong>FOTOGRAFIAS</strong> {currentProyect[0].fotografias}
              </li>
            </ul>
          </div>
        </div>
      </TextInfoContainer>:null
}
    </>
  );
}

Detail.defaultProps = {
images:[]

}

Detail.propTypes = {

  imagenes:PropTypes.array,
  showInfo:PropTypes.bool.isRequired
}


