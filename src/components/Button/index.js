import styled, { css } from 'styled-components';
import propToStyle from 'src/theme/utils/propToStyle';
import { getThemeColor } from 'src/theme';
import typographyVariants from 'src/theme/typographyVariants';
import breakpointsMedia from 'src/theme/utils/breakpointsMedia';

const ButtonGhost = css`
  color: ${({ theme, color }) => getThemeColor(color, theme)};
  background: transparent; 
`;

const ButtonDefault = css`
  color: white;
  background-color: ${({ theme, backgroundColor }) => getThemeColor(backgroundColor, theme)};
  color: ${({ theme, color }) => getThemeColor(color, theme)};
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  font-weight: bold;
  opacity: 1;
  
  ${breakpointsMedia({
    xs: css`padding: 12px 12px;`,
    md: css`padding: 12px 26px;`,
  })}  

  ${typographyVariants.smallestException}

  ${(props) => {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}

  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${(props) => props.theme.borderRadius};
  &:hover,
  &:focus {
    opacity: .5;
  }

  ${breakpointsMedia({
    xs: css`
      /* All devices */
      ${typographyVariants.smallestException}
    `,
    md: css`
     /* From md breakpoint */
     ${typographyVariants.buttonText}
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${({ fullWidth, size }) => {
    if (fullWidth) {
      return css`
            width: 100%;
        `;
    }
    return css`
            width: ${Math.round((size * 100) / 12)}%;
        `;
  }};

  ${propToStyle('margin')}
  ${propToStyle('display')}
  ${propToStyle('width')}
`;

export default Button;
