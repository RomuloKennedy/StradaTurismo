import React from "react";
import imagem from "../../../img/0-main.png"
import styled from "styled-components";
import {ButtonR} from "../../button"

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:10vh;


`;

const Img = styled.img`
max-width:70%;
`
const H1 = styled.h1`
color:#122A57;
font-weight:bold;
@media(max-width: 700px) {
   font-size:24px;
}
`
const Content = styled.div`
@media(max-width: 700px) {
    font-size:12px;
}
`


export const Article = () => {
    return( 
            <Container>
                <div>
                    <H1>Strada<br/>Turismos</H1>
                    <Content>O melhor serviço para você!</Content>
                    <ButtonR/>
                </div>
                
                <Img src={imagem} alt="viajens"/>
            </Container>
    )
}
