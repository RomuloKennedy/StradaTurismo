import React from "react";
import styled from "styled-components";

const Title = styled.a`
  color:white;
  text-decoration:none;
  cursor:default;
  font-size:32px;
  font-family:'Open Sans', sans-serif;
  font-weight:bold;
  &&:hover {
    color:white;
    cursor:default;
  }
  @media(max-width: 800px) {
  font-size:20px;
  }
`;
const NavbarBrand = styled.a`
  color:white;
  text-decoration:none;
  margin-left:1vw;
  font-size:18px;
  justify-content:center;
  &&:hover {
    color:white;

  }
  @media(max-width: 800px) {
    font-size:12px;
    }
`;

const Navbar = styled.div`
background-color:#122A57;
display:flex;
justify-content:space-evenly;
align-items:center;
height:10vh;
max-width:100%;
`;




export const Header=()=>{
    return(
        <header>
        <Navbar>
          
          <Title style={{backgroundColor:'transparent'}}className="" href="#">StradaTurismos</Title> 
              <div style={{display:'flex',alignItems:'center' ,justifyContent:'space-evenly'}} className=" ">      
                  <NavbarBrand style={{marginLeft:''}}className="" href="#quem-somos">Quem Somos</NavbarBrand>
                  <NavbarBrand className="" href="#servicos">Serviços</NavbarBrand>
                  <NavbarBrand className="" href="#planos">Planos</NavbarBrand>

              </div>
          
        </Navbar>
         
        </header>
    )
}