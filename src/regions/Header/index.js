import React from 'react';
import styled from 'styled-components';

import Logo from 'src/theme/Logo';

const HeaderWrapper = styled.div`
  max-height: 216px;
  display: flex;    
  justify-content: center;
  flex: 1;
  order: initial;
  border: none;
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
`;

const Header = () => (
  <HeaderWrapper><Logo /></HeaderWrapper>
);

export default Header;
