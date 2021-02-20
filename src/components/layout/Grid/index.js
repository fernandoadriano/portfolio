import styled, { css } from 'styled-components';

import { breakpoints } from '../../../theme';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const size2Perc = (value) => (100 * value) / 12;

const Col = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
      flex: 0 0 ${size2Perc(value)}%;
      max-width: ${size2Perc(value)}%;
    `;
    }
    return breakpointsMedia({
      ...(value.xs && {
        xs: css`
      flex: 0 0 ${size2Perc(value.xs)}%;
      max-width: ${size2Perc(value.xs)}%;
    `,
      }),
      ...(value.sm && {
        sm: css`
      flex: 0 0 ${size2Perc(value.sm)}%;
      max-width: ${size2Perc(value.sm)}%;
    `,
      }),
      ...(value.md && {
        md: css`
      flex: 0 0 ${size2Perc(value.md)}%;
      max-width: ${size2Perc(value.md)}%;
    `,
      }),
      ...(value.lg && {
        lg: css`
      flex: 0 0 ${size2Perc(value.lg)}%;
      max-width: ${size2Perc(value.lg)}%;
    `,
      }),
      ...(value.xl && {
        xl: css`
      flex: 0 0 ${size2Perc(value.xl)}%;
      max-width: ${size2Perc(value.xl)}%;
    `,
      }),
    });
  }}
  ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
      margin-left: ${size2Perc(offset)}%;
    `;
    }
    return breakpointsMedia({
      ...(offset.xs && {
        xs: css`
      margin-left: ${size2Perc(offset.xs)}%;
    `,
      }),
      ...(offset.sm && {
        sm: css`
      margin-left: ${size2Perc(offset.sm)}%;
    `,
      }),
      ...(offset.md && {
        md: css`
      margin-left: ${size2Perc(offset.md)}%;
    `,
      }),
      ...(offset.lg && {
        lg: css`
      margin-left: ${size2Perc(offset.lg)}%;
    `,
      }),
      ...(offset.xl && {
        xl: css`
      margin-left: ${size2Perc(offset.xl)}%;
    `,
      }),
    });
  }}

  ${propToStyle('display')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flexDirection')}
  ${propToStyle('backgroundColor')};
  ${propToStyle('order')};
`;

Col.defaultProps = {
  value: {},
  offset: {},
};

const Grid = {
  Container: styled.div`
    width: 100%;
    padding-right: 28px;
    padding-left: 28px;
    margin-right: auto;
    margin-left: auto;

    ${breakpointsMedia({
    xs: css`
      max-width: ${breakpoints.sm}px;
 
      padding-right: 28px;
      padding-left: 28px;
    `,
    sm: css`
      max-width: ${breakpoints.sm}px;
    `,
    md: css`
      max-width: ${breakpoints.md}px;
      padding-right: 16px;
      padding-left: 16px; 
    `,
    lg: css`
      max-width: ${breakpoints.lg}px;
    `,
    xl: css`
      max-width: ${breakpoints.xl}px;
    `,
  })}
    ${propToStyle('marginTop')}
  `,
  Row: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -16px;
    margin-left: -16px;
    ${propToStyle('backgroundColor')};
  `,
  Col,
};

export { Grid as default };
