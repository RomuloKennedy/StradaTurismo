import React from 'react';
import styled from 'styled-components';
import Image from '../../../../img/1-quem-somos.png'

const Section = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-top:60px;

@media(max-width: 800px) {
    flex-direction:column;
    align-items:start;
    }
`;
const Text = styled.p`
display:flex;
justify-content:center;
align-items:center;
width:80%;
color:black;
font-family: 'Open Sans', sans-serif;
@media(max-width: 800px) {
    width:320%;

    }
`
const Container = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
width:30%;
`;
const H1 = styled.h1`
color:#122A57;
padding-left:8px;
border-left:solid 5px #122A57;

`;
const Img = styled.img`
max-width:70%;
`

export const QuemSomos = () => {
    return(
        <Section>
            <Img src={Image} alt="balcão de atendimento"/>
            <Container id="quem-somos">
                <H1>Quem Somos</H1>
                <div>
                    <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
                    
                    <Text>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
                </div>
            </Container>
        </Section>
    )
}