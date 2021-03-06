/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import propToStyle from '../../theme/utils/propToStyle';
import variants from '../../theme/typographyVariants';

const MenuAreaWrapper = styled.div`
  ${propToStyle('display')}
  ${propToStyle('justifyContent')}
  ${propToStyle('width')}
  ${propToStyle('height')}
  background-color: ${({ theme }) => theme.colors.primary.light};
  height: 25px;
  border-left: 1px solid;
  border-color: ${({ theme }) => theme.colors.secondary.main};

  /* 
    * Stick Menu
    */
  ${({ scrolled }) => {
    if (scrolled) {
      return {
        position: 'fixed',
        top: 0,
      };
    }
    return {};
  }};
`;

const MenuItem = styled.span`
  padding-right: 12px;
  ${({ variant, theme }) => variants[variant](theme)};
  ${propToStyle('display')}
  ${propToStyle('textAlign')}
`;

MenuItem.defaultProps = {
  variant: 'paragraph1',
};

const MenuArea = ({ ...props }) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // });

  return (
    <MenuAreaWrapper
      display={{ xs: 'flex', md: 'block' }}
      justifyContent="flex-end"
      width="100%"
      height={{ xs: '25px', md: '100vh' }}
      scrolled={scrolled}
      {...props}
    >
      <MenuItem display={{ xs: 'inline', md: 'block' }} textAlign="end">Sobre</MenuItem>
      <MenuItem display={{ xs: 'inline', md: 'block' }} textAlign="end">Portifólio</MenuItem>
      <MenuItem display={{ xs: 'inline', md: 'block' }} textAlign="end">Referência</MenuItem>
      <MenuItem display={{ xs: 'inline', md: 'block' }} textAlign="end">Contato</MenuItem>
    </MenuAreaWrapper>
  );
};

export default MenuArea;
