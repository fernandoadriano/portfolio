/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import propToStyle from '../../theme/utils/propToStyle';
import variants from '../../theme/typographyVariants';

const MenuAreaWrapper = styled.div``;
const MenuItem = styled.span`
  ${({ variant, theme }) => variants[variant](theme)};
  ${propToStyle('display')}
  ${propToStyle('textAlign')}
`;

MenuItem.defaultProps = {
  variant: 'paragraph1',
};

const MenuArea = ({ ...props }) => (
  <MenuAreaWrapper {...props}>
    <MenuItem display="block" textAlign="end">Sobre Mim</MenuItem>
    <MenuItem display="block" textAlign="end">Portifólio de Projetos</MenuItem>
    <MenuItem display="block" textAlign="end">Referência</MenuItem>
    <MenuItem display="block" textAlign="end">Contato</MenuItem>
  </MenuAreaWrapper>
);

MenuArea.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuArea;
