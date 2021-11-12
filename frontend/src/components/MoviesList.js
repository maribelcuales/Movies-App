import React, { useState, useEffect } from "react";
import styled from "styled-components";

import "../App.css";
import Cinema from "./cinemaFrontage.jpg";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
`;

const Background = styled.img`
  max-width: 100%;
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const SectionDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 4rem;
`;

const MoviesList = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setApiData(data);
      });
  }, []);
  return (
    <Container>
      <SectionDiv>
        <div
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        >
          <h1>Curated Meta Movie Reviews</h1>
          <Background src={Cinema} alt="Cinema Frontage" />
        </div>
      </SectionDiv>
    </Container>
  );
};

export default MoviesList;
