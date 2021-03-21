import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormRowWrapper = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    ${({ center }) => (center ? css`justify-content: center` : css`justify-content: flex-start`)}
  `;

const FormRow = ({ children, center }) => (
  <FormRowWrapper center={center}>{children}</FormRowWrapper>
);

FormRow.defaultProps = {
  center: false,
};

FormRow.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default FormRow;
