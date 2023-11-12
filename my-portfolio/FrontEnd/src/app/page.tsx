"use client";

import styled from "styled-components";
import Top from "../../components/Header";





const Container = styled.body`
  background-color: #2c3333;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
`;

export default function App() {
  return (
    <Container>
      <Top />
      <h1>Home</h1>
    </Container>
  );
}
