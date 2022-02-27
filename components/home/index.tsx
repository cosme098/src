import React from "react";
import styled from "styled-components";

const _about = styled.div`
padding-top: 60px;
width: 100%;
display: flex;
align-items: center;
min-height: 100vh;
background-color:#151515;
justify-content: center;
justify-content: space-around;
border-bottom: 1px solid #242424;
@media (max-width: 768px) {
    flex-direction: column;
  }
`;
const _text = styled.div`
color: #fff;
`;
const _title1 = styled.p`
font-family: 'Courier New', Courier, monospace;
margin-bottom: 5px;
color: #05da5c;
font-weight: bold;
`;
const _title2 = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 35px;
text-align: center;
`;
const _title3 = styled.p`
font-family: 'Courier New', Courier, monospace;
margin-top: 20px;
`;
const _containerBtn = styled.div`
display: flex;
gap: 1rem;
`;
const _btnLinkdin = styled.a`
background-color: ${props=>props.color};
color: #fff;
width: 9rem;
height: 2rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 3px;
font-family: 'Roboto', sans-serif;
border: 0.2px solid #646665;
margin-top: 1rem;
text-decoration: none;
`;
const _perfilImg = styled.img`
border-radius: 50%;
width: 250px;
filter: drop-shadow(2px 4px 6px black);
height: 250px;
`;


const Home = () => {
    return (
        <_about id="home">
               <_text>
                <_title1 >SEJA BEM VINDO!</_title1>
                <_title2 >Olá, Eu sou o desenvolvedor <br/> Cosme Franca :)</_title2>
                <_title3 >Desenvolvedor Front-End Angular e React!</_title3>
                <_containerBtn >
                    <_btnLinkdin color="#05da5c" href="https://www.linkedin.com/in/cosme-silva-150166213/" target="_blank">
                        Acessar Linkedin
                        </_btnLinkdin>
                        <_btnLinkdin color="transparent"  href="mailto:cosmeforeve@gmail.com" >
                        Entrar em contato
                        </_btnLinkdin>
                </_containerBtn>
                </_text> 
                <_perfilImg src="https://avatars.githubusercontent.com/u/67158139?s=400&u=27b2370219946659792d6e2cf26175fb096e3276&v=4"></_perfilImg>
        </_about>
    )
}

export default Home;