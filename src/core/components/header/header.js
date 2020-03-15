import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #3f51b5;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  pointer-events: none;
`;

const Header = () => (
  <HeaderWrapper>
    <Title>Shipping Label Maker</Title>
  </HeaderWrapper>
);

export default Header;
