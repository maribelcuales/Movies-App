import React from 'react';

import styled from "styled-components"; 

const Container = styled.div`
  display: flex;
  flex-direction: column; 
  box-sizing: border-box; 
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%; 
  background-image: url("/media/popcorn.png");
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;   
`;

const Landing = () => {
  return (
    <Container>
      <h1>Meta Movie Reviews</h1> 
      <BackgroundImage src="/media/popcorn.png" alt="Popcorn" class="landing-page-image"/> 
    </Container>
  )
}

export default Landing; 