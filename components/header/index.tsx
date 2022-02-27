import React, { useState, Ref, useRef } from 'react';
import styled from 'styled-components';

const _Header = styled.div`
  background-color: #101010;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
`;
const _title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #cccccc;
  background-color: transparent;
  margin-left: 5rem;
  font-family: 'Courier New', Courier, monospace;
  `;

const _containerlinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  gap: 2rem;
  background-color: transparent;
  margin-right: 5rem;`;

  const _link = styled.a`
  color: #cccccc;
  text-decoration: none;
  background-color: transparent;
  font-family: 'Rubik', sans-serif;
  transition: ease-in-out 0.2s;
  &:hover {
    color: #05da5c;
  }
  `;




function Header(): JSX.Element {

  const [color, setColor] = useState(false);

      window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
         setColor(true);
        } else {
        setColor(false);
        }
        }); 

  return (
    <_Header style={{backgroundColor: color? 'transparent' :'#101010' }}>
      <_title>Portifolio</_title>
      <_containerlinks>
        <_link href="#home">Inicio</_link>
        <_link href="#about">Sobre mim</_link>
        <_link href="#contacts">Habilidades</_link>
      </_containerlinks>
    </_Header>
  );
}


export default Header;