/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MenuAreaWrapper = styled.div``;

const MenuArea = ({ ...props }) => (
  <MenuAreaWrapper {...props}>Menu</MenuAreaWrapper>
);

// MenuArea.propTypes = {
//   children: PropTypes.node,
// };

export default MenuArea;
