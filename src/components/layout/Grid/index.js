import styled, { css } from 'styled-components';

import { breakpoints } from 'src/theme';
import breakpointsMedia from 'src/theme/utils/breakpointsMedia';
import propToStyle from 'src/theme/utils/propToStyle';

// const size2Perc = (value) => (100 * value) / 12;

const Col = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: ${(100 * value) / 12}%;
      max-width: ${(100 * value) / 12}%;
    `;
    }
    return breakpointsMedia({
      xs: value?.xs
        ? css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value.xs) / 12}%;
        max-width: ${(100 * value.xs) / 12}%;
      `
        : '',
      sm: value?.sm
        ? css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value.sm) / 12}%;
        max-width: ${(100 * value.sm) / 12}%;
      `
        : '',
      md: value?.md
        ? css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value.md) / 12}%;
        max-width: ${(100 * value.md) / 12}%;
      `
        : '',
      lg: value?.lg
        ? css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value.lg) / 12}%;
        max-width: ${(100 * value.lg) / 12}%;
      `
        : '',
      xl: value?.xl
        ? css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value.xl) / 12}%;
        max-width: ${(100 * value.xl) / 12}%;
      `
        : '',
    });
  }}

${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
      margin-left: ${(100 * offset) / 12}%;
    `;
    }
    return breakpointsMedia({
      xs: offset?.xs
        ? css`
        margin-left: ${(100 * offset.xs) / 12}%;
      `
        : '',
      sm: offset?.sm
        ? css`
        margin-left: ${(100 * offset.sm) / 12}%;
      `
        : '',
      md: offset?.md
        ? css`
        margin-left: ${(100 * offset.md) / 12}%;
      `
        : '',
      lg: offset?.lg
        ? css`
        margin-left: ${(100 * offset.lg) / 12}%;
      `
        : '',
      xl: offset?.xl
        ? css`
        margin-left: ${(100 * offset.xl) / 12}%;
      `
        : '',
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
    /* width: 100%; */
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

    ${propToStyle('flex')}
    ${propToStyle('width')}
    ${propToStyle('marginTop')}
    ${propToStyle('backgroundColor')};
    ${propToStyle('display')}
    ${propToStyle('alignItems')}
    ${propToStyle('justifyContent')}
    ${propToStyle('flexDirection')}
  `,
  Row: styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    margin-right: -16px;
    margin-left: -16px;

    ${propToStyle('alignItems')}
    ${propToStyle('justifyContent')}
    ${propToStyle('backgroundColor')};
  `,
  Col,
};

export { Grid as default };
