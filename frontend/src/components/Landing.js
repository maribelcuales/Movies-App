import React from "react";
import { Link } from "react-router-dom"; 
import styled from "styled-components";

import "./styles.css";
import Popcorn from "./popcorn.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
`;

const Background = styled.img`    
  width: 100%
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  text-align: center;
  position: absolute;
  top: 40%;
  left: 35%;
  transform: translate(-50%, -50%);
  color: #3C3A4C;
  text-shadow: 4px 4px white;   
  font-size: 70px;
  font: roboto;
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 15px;
  background-color: #ffe8d6;
  box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 1);
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: bold;
  color: #013a63;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.3s;
  text-transform: uppercase;

  top: 48%;
  left: 27.5%;
  text-align: center;
  position: absolute;
  width: 250px;
`;

const Landing = () => {
  return (
    <Container>
      <Background src={Popcorn} alt="Popcorn Background"/> 
        <div>
          <Title>Meta Movie Reviews</Title>
          <Link to="/movies" exact>  
            <Button>Curate List</Button> 
          </Link>
        </div>
    </Container>
  );
};

export default Landing;
