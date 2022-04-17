import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color:#122A57;
margin-top:80px;
height:60px;
color:white;

display:flex;
justify-content:center;
align-items:center;
padding-top:20px;
`


export const Footer = () => {
    return(
        <Container>
            <p>Desenvolvido Por Rômulo Kennedy</p>
        </Container>
    )
}

