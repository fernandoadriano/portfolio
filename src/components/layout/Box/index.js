import styled from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';

const Box = styled.div`
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}
    ${propToStyle('alignItems')}
    ${propToStyle('flex')}
    ${propToStyle('flexWrap')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('padding')}
    ${propToStyle('maxWidth')}
    ${propToStyle('width')}
    ${propToStyle('flexBasis')}
    ${propToStyle('flexGrow')}
`;

export { Box as default };
