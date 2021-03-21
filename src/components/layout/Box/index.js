import styled from 'styled-components';
import propToStyle from 'src/theme/utils/propToStyle';

const Box = styled.div`
    ${propToStyle('alignItems')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('border')}
    ${propToStyle('borderRadius')}
    ${propToStyle('boxShadow')}
    ${propToStyle('display')}
    ${propToStyle('flex')}
    ${propToStyle('flexBasis')}
    ${propToStyle('flexDirection')}
    ${propToStyle('flexGrow')}
    ${propToStyle('flexWrap')}
    ${propToStyle('justifyContent')}
    ${propToStyle('maxWidth')}
    ${propToStyle('maxHeight')}
    ${propToStyle('minWidth')}
    ${propToStyle('minHeight')}
    ${propToStyle('padding')}
    ${propToStyle('paddingLeft')}
    ${propToStyle('paddingBottom')}
    ${propToStyle('paddingRight')}
    ${propToStyle('paddingTop')}
    ${propToStyle('width')}
`;

export { Box as default };
