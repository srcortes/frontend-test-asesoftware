import React from "react";
import styled from "@emotion/styled";

const ContenedorHeader = styled.header`
  background: -webkit-linear-gradient(
    to left,
    #adbad4,
    #7a8cb2
  );
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  background: linear-gradient(to left, #adbad4, #7a8cb2);
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const Footer = () => {
  return (
    <ContenedorHeader>
      <div className="container">
        © 2021 Techical Test - Java Develop Asesoftware
        <a className="grey-text text-lighten-4 right" href="#!">
          
        </a>
      </div>
    </ContenedorHeader>
  );
};

export default Footer;