import React from "react";
import styled from "styled-components";

const PlayerDiv = styled.div`
  width: 400px;
  border: 2px solid red;
  border-radius: 10px;
  background-color: orange;
  text-align: center;
  margin-bottom: 40px;
`;

export default function PlayerCard (props) {
  const { name, country, searches} = props;
  return (
    <PlayerDiv>
            <h1>{name}</h1>
            <h2>country: {country}</h2>
            <h3>searches: {searches}</h3>
    </PlayerDiv>
  );
};
