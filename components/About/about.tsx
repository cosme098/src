import React from "react";
import styled from "styled-components";

const _container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 7rem;
margin-bottom: 7rem;
border-bottom: 1px solid #242424;
padding-bottom: 7rem;
`;

const _title = styled.h1`
  font-size: 24px;
  color: #05da5c;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1rem;
  `;

const _text = styled.p`
    font-size: 15px;
    color: #fff;
    text-align: center;
   font-family: 'Roboto', sans-serif;
   max-width: 80vw;
   letter-spacing: 1px;
`;

const About = () => {
    return (
        <_container id="about">
            <_title>Sobre mim</_title>
            <_text>
                👏Olá, meu nome é Cosme silva, e eu comecei essa jornada de programação web no final de 2019.
                Sempre gostei da area da tecnologia e no inicio eu programava
                para area sistemas embarcados (até hoje eu ainda programa para sistemas embarcados),
                mas ao longo da minha carreira eu decidi me especializar em programação web, e hoje eu sou um desenvolvedor front-end.
                com os frameWorks React e Angular vejo que com ele da extrair muito do Javascript e typeScript.
            </_text>
            <_text>
                e tambem deixando o codigo mais clean e legivel.
                Sempre que tenho tempo eu estou aprendendo novas tecnologias e frameworks, no momento estou estudando nestJs e vendo o quanto ele pode ajudar no futuro de novos projetos.
            </_text>
        </_container>
    )
}

export default About;