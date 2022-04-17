import React from 'react';
import styled from 'styled-components';
import {ButtonR3} from '../../../button//'

const Title = styled.h1`
    
    display:flex;
    justify-content:center;
    font-family:'Open Sans', sans-serif;
    font-weight:bold;
    font-size:36px;
    
    
`;

const Section = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:120px;
    
`;
const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:end;
    @media(max-width: 700px) {
        flex-direction:column;
        }
    
`;
const Plano = styled.div`
padding-top:10px;
padding-right:10px;
margin-right:20px;
border: solid 5px #122A57;
height:300px;
width:300px;
font-size:20px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
font-family:'Open Sans', sans-serif;
@media(max-width: 800px) {
    font-size:12px;
    margin-top:10px;
    margin-right:5px;
    height:200px;
    width:200px;
    }
    @media(max-width: 700px) {
      
        }
`;

const Container2 = styled.div`
display:flex;
justify-content:center;
border-bottom:solid 4px #122A57;
font-family:'Open Sans', sans-serif;
width:80%;



`;


export const Planos = () =>{
    return(
        <Section>
            <Title>Planos</Title>
          <Container id="planos">
            <Plano>
            <Container2>Plano 1</Container2>
            <ul>
                <li>Suporte 24h</li>
                <li>Serviços De Quarto</li>
                <li>Guia Turístico</li>
            </ul>
            <ButtonR3/>
            </Plano>
            <Plano>
            <Container2>Plano 2</Container2>
            <ul>
                <li>Suporte 24h</li>
                <li>Serviços De Quarto</li>
                <li>Guia Turístico</li>
                <li>Roteiros de Trilhas</li>
                <li>Serviço Personalizado</li>
            </ul>
            <ButtonR3/>
            </Plano>
            <Plano>
            <Container2>Plano 3</Container2>
            <ul>
                <li>Suporte 24h</li>
                <li>Serviços De Quarto</li>
                <li>Guia Turístico</li>
                <li>Roteiros de Trilhas</li>
                <li>Serviço Personalizado</li>
                <li>Área VIP</li>
            </ul>
            <ButtonR3/>
            </Plano>

        </Container>
        </Section>
    )
}