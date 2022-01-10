import React from "react";
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 3em;
  text-transform: uppercase;
  margin: 20px 0;
`

function Header() {
  return (
    <Title>Test App</Title>
  );
}

export default Header;