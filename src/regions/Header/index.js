import React from 'react';
import styled from 'styled-components';

import Logo from '../../theme/Logo';

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
`;

const Header = () => (
  <HeaderWrapper><Logo /></HeaderWrapper>
);

export default Header;
