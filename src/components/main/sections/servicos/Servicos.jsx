import React from 'react';
import styled from 'styled-components';
import {ButtonR2} from '../../../button';
import icon1 from '../../../../img/icon-1.png';
import icon2 from '../../../../img/icon-2.png';
import icon3 from '../../../../img/icon-3.png';

const Section = styled.div`
    background-color:#122A57;
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin-top:40px;
    padding-bottom:30px;
    height:500px;
`;
const Container = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`;
const Title = styled.h1`
color:white;
margin-right:4vw;  
padding-top:15px;
padding-bottom:40px;
display:flex;
justify-content:center;
align-self:center;
`
const H2 = styled.h2`
    color:white;
    @media(max-width: 800px) {
        font-size:11.6px;
        }
`

const Div = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
const Img = styled.img`
width:50%;
`;
const Img3 = styled.img`
width:62%;
`
const Img2 = styled.img`
width:35%;
`
export const Servicos = () =>{
    return(
        <Section>
            <Title>Serviços</Title>
            <Container id="servicos">
                <Div>
                    <Img src={icon1} alt="Pacote de viagens"/>
                    <H2>Pacote de Viagens</H2>
                    <ButtonR2/>
                </Div>
                <Div>
                    <Img3 src={icon2} alt="Hospedagens"/>
                    <H2>Hospedagens</H2>
                    <ButtonR2 />
                </Div>
                <Div>
                    <Img2 src={icon3} alt="Roteiros Personalizados"/>
                    <H2>Roteiros Personalizados</H2>
                    <ButtonR2/>
                </Div>

            </Container>
        </Section>
    )
}