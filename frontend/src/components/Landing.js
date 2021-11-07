import React from "react";
import styled from "styled-components";

import "./styles.css";
import Popcorn from "./popcorn.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
`;

const Background = styled.img`    
  height: auto;
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
  color: white;
  font-size: 70px;
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 15px;
  background: white;
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: bold;
  color: #013a63;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.3s;
  text-transform: uppercase;

  top: 52%;
  left: 30%;
  text-align: center;
  position: absolute;
  width: 200px;
  background-color: white;
`;

const Landing = () => {
  return (
    <Container>
      <Background src={Popcorn} alkt="Popcorn Background"/> 
        <div>
          <Title>Meta Movie Reviews</Title>
          <Button>Add Review</Button> 
        </div>
    </Container>
  );
};

export default Landing;
