import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../../foundations/typography/Text';
import { getThemeColor } from '../../../theme';

const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

const Input = styled(Text)`
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

Input.defaultProps = {
  as: 'input',
  variant: 'paragraph1',
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
  rows,
}) {
  return (
    <InputWrapper>
      <Input
        as={as}
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
    </InputWrapper>
  );
}

TextField.defaultProps = {
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
  color: PropTypes.string,
  placeholderColor: PropTypes.string,
  as: PropTypes.string,
  rows: PropTypes.number,
};
