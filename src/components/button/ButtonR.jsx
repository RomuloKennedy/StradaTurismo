import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
background-color:#122A57;
color:white;
width:90%;
border-radius:25px;
height:50px;
font-size:15px;
margin-top:15px;
border:none;

@media(max-width: 700px) {
   
    width:70%;
    height:30px;
    font-size:12px;
}
`;

export const ButtonR = () =>{
    return(
        <div>
            <Button>Saiba Mais!</Button>
        </div>
    );
}