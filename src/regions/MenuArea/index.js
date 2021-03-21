/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState /* ,  Link */ } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Link from 'src/foundations/Link';

import propToStyle from 'src/theme/utils/propToStyle';
import variants from 'src/theme/typographyVariants';

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

const MenuItemWrapper = styled(Link)`
  padding-right: 12px;
  ${({ variant, theme }) => variants[variant](theme)};
  ${propToStyle('display')}
  ${propToStyle('textAlign')}
`;

// TODO #14:
const MenuItem = ({
  variant, children, href, ...props
}) => (
  <MenuItemWrapper
    variant={variant}
    href={href}
    {...props}
  >
    {children}
  </MenuItemWrapper>
);

MenuItem.defaultProps = {
  variant: 'paragraph1',
  href: '/404',
};

MenuItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  variant: PropTypes.string,
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
    event.preventDefault();
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
      <MenuItem name="home" href="/" display={{ xs: 'inline', md: 'block' }} textAlign="end">Home</MenuItem>
      <MenuItem name="about" display={{ xs: 'inline', md: 'block' }} textAlign="end">Sobre</MenuItem>
      <MenuItem name="projetos" href="/projects" display={{ xs: 'inline', md: 'block' }} textAlign="end">Projetos</MenuItem>
      <MenuItem name="referencias" display={{ xs: 'inline', md: 'block' }} textAlign="end">Referência</MenuItem>
      <MenuItem name="contato" display={{ xs: 'inline', md: 'block' }} textAlign="end" onClick={handleClick}>Contato</MenuItem>
    </MenuAreaWrapper>
  );
};

MenuArea.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuArea;
