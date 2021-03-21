/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from 'src/theme/utils/propToStyle';
import variants from 'src/theme/typographyVariants';

import { getThemeColor } from 'src/theme';

export const TextBase = styled.span`
    ${({ variant, theme }) => variants[variant](theme)};
    color: ${({ color, theme }) => getThemeColor(color, theme)}
    ${propToStyle('textAlign')}
`;

const Text = ({
  variant, children, ...props
}) => {
  let v = variant;

  if (!Object.keys(variants).includes(variant)) {
    v = 'paragraph1';
  }

  return (
    <TextBase variant={v} {...props}>
      {children}
    </TextBase>
  );
};

Text.defaultProps = {
  children: '',
  variant: 'paragraph1',
};

Text.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

export default Text;
