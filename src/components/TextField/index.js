/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from 'src/foundations/typography/Text';
import { getThemeColor } from 'src/theme';

// const InputWrapper = styled.div`
//   margin-bottom: 17px;
// `;

const InputWrapper = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  padding: 8px 14px;
  outline: 0;
  color: ${({ color, theme }) => getThemeColor(color, theme)};
  border-radius: ${({ rounded, theme }) => (rounded ? theme.borderRadius : '0px')};
  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ placeholderColor, theme }) => getThemeColor(placeholderColor, theme)};
    opacity: 1; /* Firefox */
  }  
`;

const Input = ({
  as, variant, autoFocus, ...props
}) => (
  <InputWrapper
    as={as}
    variant={variant}
    autoFocus={autoFocus}
    {...props}
  />
);

Input.defaultProps = {
  as: 'input',
  variant: 'paragraph1',
  autoFocus: false,
};

Input.propTypes = {
  as: PropTypes.string,
  autoFocus: PropTypes.bool,
  variant: PropTypes.string,
};
export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  rounded,
  color,
  placeholderColor,
  as,
  autoFocus,
  rows,
}) {
  return (
    <Input
      as={as}
      autoFocus={autoFocus}
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      rounded={rounded}
      color={color}
      placeholderColor={placeholderColor}
      rows={rows}
    />
  );
}

TextField.defaultProps = {
  autoFocus: false,
  rounded: false,
  color: null,
  placeholderColor: null,
  as: 'input',
  rows: 1,
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
  autoFocus: PropTypes.bool,
  color: PropTypes.string,
  placeholderColor: PropTypes.string,
  as: PropTypes.string,
  rows: PropTypes.number,
};
