/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState /* ,  Link */ } from 'react';
import styled, { css } from 'styled-components';
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
      return css`
        position: 'fixed';
        top: 0;
      `;
    }
    return {};
  }}
`;

const MenuItemWrapper = styled.span`
  padding-right: 12px;
  ${({ variant, theme }) => variants[variant](theme)};
  ${propToStyle('display')}
  ${propToStyle('textAlign')}
`;

// TODO #14:
const MenuItem = ({ variant, children, ...props }) => (
  <MenuItemWrapper
    variant={variant}
    {...props}
  >
    {children}
  </MenuItemWrapper>
);

MenuItem.defaultProps = {
  variant: 'paragraph1',
};

MenuItem.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.element.isRequired,
};

// TODO #13
const MenuArea = ({ onClick, ...props }) => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleClick = (event) => {
    // TODO #12
    if (onClick) onClick(event.target.getAttribute('name'));
  };

  return (
    <MenuAreaWrapper
      display={{ xs: 'flex', md: 'block' }}
      justifyContent="flex-end"
      width="100%"
      height={{ xs: '25px', md: '100vh' }}
      scrolled={scrolled}
      {...props}
    >
      <MenuItem name="about" display={{ xs: 'inline', md: 'block' }} textAlign="end" onClick={handleClick}>Sobre</MenuItem>
      <MenuItem name="portfolio" display={{ xs: 'inline', md: 'block' }} textAlign="end" onClick={handleClick}>Portifólio</MenuItem>
      <MenuItem name="referencias" display={{ xs: 'inline', md: 'block' }} textAlign="end" onClick={handleClick}>Referência</MenuItem>
      <MenuItem name="contato" display={{ xs: 'inline', md: 'block' }} textAlign="end" onClick={handleClick}>Contato</MenuItem>
    </MenuAreaWrapper>
  );
};

MenuArea.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuArea;
