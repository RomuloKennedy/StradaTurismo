import React from "react";
import styled from "styled-components";

const Button = styled.button`
color:#122A57;
border-radius:15px;
font-size:15px;
border:none;
font-family:'Open Sans', sans-serif;
margin-top:25px;

@media(max-width: 800px) {
        font-size:11px;
        }
  

`;

export const ButtonR2 = () => {
    return(
        <Button>Comprar Agora</Button>
    )
}