import React from "react";
import styled from "styled-components";

const _container = styled.div`
min-height: 50px;
width: 100%;
background-color: #2f2f2f; 
display:flex;
align-items: center;
justify-content: space-between;
`;
const _text = styled.p`
margin-left: 1rem;
font-family: 'Courier New', Courier, monospace;
font-size: 1rem;
margin-right: 1rem;
font-weight: bold;
    color: #fff;
`;

const Footer = ()=>{
    return(
     <_container> 
         <_text>
         Design by Keidson Roby
         </_text>
         <_text>
         Created by Cosme Franca
         </_text>
     </_container>          
    )
}

export default Footer;