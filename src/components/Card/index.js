import styled, { css } from 'styled-components';

import breakpointsMedia from 'src/theme/utils/breakpointsMedia';

const size2Perc = (value) => (100 * value) / 12;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #FFFFFF;
  
  ${({ noBorder }) => (noBorder || css`
    border: 1px solid rgba(19, 138, 243, 0.28);
    box-sizing: border-box;
    box-shadow: 4px 4px 4px #074479;
    border-radius: 10px;
    padding: 6px;
    margin: 5px;
  `)}

  ${({ size }) => {
    if (typeof size === 'number') {
      return css``;
    }

    return breakpointsMedia({
      ...(size.xs && {
        xs: css`
          max-width: ${size2Perc(size.xs)}%;
          width: ${size2Perc(size.xs)}%;
        `,
      }),
      ...(size.sm && {
        sm: css`
          max-width: ${size2Perc(size.sm)}%;
          width: ${size2Perc(size.sm)}%;
        `,
      }),
      ...(size.md && {
        md: css`
          max-width: ${size2Perc(size.md)}%;
          width: ${size2Perc(size.md)}%;
        `,
      }),
      ...(size.lg && {
        lg: css`
          max-width: ${size2Perc(size.lg)}%;
          width: ${size2Perc(size.lg)}%;
        `,
      }),
      ...(size.xl && {
        xl: css`
          max-width: ${size2Perc(size.xl)}%;
          width: ${size2Perc(size.xl)}%;
        `,
      }),
    });
  }
}`;

Card.Image = styled.span`
  max-width: 100%;
  width: 100%;
  
  ${({ noBorder }) => (noBorder || css`border: 1px solid rgba(19, 138, 243, 0.26);`)}

  box-sizing: border-box;

  img {
    width: 100%;
  }
`;
Card.Title = styled.span`
  align-items: center;
`;
Card.Description = styled.span``;

export default Card;
