import React from "react";
import styled from "styled-components";

const _container = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`;
const _project = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
background-color: #2c2c2c;
justify-content: start;
border: 1px solid #05da5c;
filter: drop-shadow(0 0 0.5rem #2c2c2c);
border-radius: 2px;
`;
const _project_title = styled.p`
color: #fff;
font-size: 1.5rem;
font-family: 'Roboto', sans-serif;
margin-bottom: 0.5rem;
`;
const _project_description = styled.p`
color: #bbbbbb;
font-size: 1rem;
font-family: 'Roboto', sans-serif;
min-width: 15rem;
`;
const _iconCheck = styled.svg`
margin-bottom: 1rem;
`;
const _title = styled.p`
  font-size: 24px;
  color: #05da5c;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 3rem;
`;
const _container_Projects = styled.div`
display: flex;
align-items: center;
min-width: 100%;
justify-content: space-around;
border-bottom: 1px solid #242424;
padding-bottom: 7rem;
@media (max-width: 968px) {
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
`;

const Projects = () => {
    return (
        <_container>
            <_title>Projetos</_title>
            <_container_Projects>
                <_project>
                    <_iconCheck width="32" height="32" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 17.865V1H11V17.865L6.96028 14.4985C6.40401 14.035 5.59599 14.035 5.03972 14.4985L1 17.865Z" stroke="#05DA5C" stroke-width="2" />
                        <path d="M4.5 9.5L5.76788 11.0175C5.8583 11.1257 6.02931 11.1089 6.09689 10.9851L8 7.5" stroke="#05DA5C" stroke-linecap="round" />
                    </_iconCheck>
                    <_project_title>Ar-condiconado</_project_title>
                    <_project_description>Sistema para controlar Ar-condicionados</_project_description>
                </_project>

                <_project>
                    <_iconCheck width="32" height="32" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 17.865V1H11V17.865L6.96028 14.4985C6.40401 14.035 5.59599 14.035 5.03972 14.4985L1 17.865Z" stroke="#05DA5C" stroke-width="2" />
                        <path d="M4.5 9.5L5.76788 11.0175C5.8583 11.1257 6.02931 11.1089 6.09689 10.9851L8 7.5" stroke="#05DA5C" stroke-linecap="round" />
                    </_iconCheck>
                    <_project_title>Smu800</_project_title>
                    <_project_description>Sistema para monitoramento de dataCenter</_project_description>
                </_project>

                <_project>
                    <_iconCheck width="32" height="32" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 17.865V1H11V17.865L6.96028 14.4985C6.40401 14.035 5.59599 14.035 5.03972 14.4985L1 17.865Z" stroke="#05DA5C" stroke-width="2" />
                        <path d="M4.5 9.5L5.76788 11.0175C5.8583 11.1257 6.02931 11.1089 6.09689 10.9851L8 7.5" stroke="#05DA5C" stroke-linecap="round" />
                    </_iconCheck>
                    <_project_title>BrndSolucoes</_project_title>
                    <_project_description>Landing Page da empresa BrndSolucoes</_project_description>
                </_project>
            </_container_Projects>
        </_container>
    )
}


export default Projects;