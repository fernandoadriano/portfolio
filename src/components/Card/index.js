import styled, { css } from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #FFFFFF;
  border: 1px solid rgba(19, 138, 243, 0.28);
  box-sizing: border-box;
  box-shadow: 4px 4px 4px #074479;
  border-radius: 10px;
  padding: 6px;
  ${({ size }) => css`
    max-width: ${(100 * size) / 12}%;
    width: ${(100 * size) / 12}%;
  `};
`;

Card.Image = styled.span`
  max-width: 100%;
  width: 100%;
  border: 1px solid rgba(19, 138, 243, 0.26);
  box-sizing: border-box;

  img {
    width: 100%;
  }
`;
Card.Title = styled.span``;
Card.Description = styled.span``;

export default Card;
