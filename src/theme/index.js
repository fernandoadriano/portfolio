import get from 'lodash/get';

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export const getThemeColor = (color, theme) => {
  if (!color) return null;

  const [cor, variante] = color.split('.');

  return get(theme, `colors.${cor}.${variante}`);
};

export const colors = {
  primary: {
    light: '#BEDFFC', // '#E7F3FE',
    main: '#138AF3',
    dark: '#074479',
  },
  secondary: {
    light: '#FCC9CA',
    main: '#F8A3A6',
    dark: '#F35E63',
  },
  tertiary: {
    light: '#DEEDEB',
    main: '#4D8C86',
    dark: '#335C58',
  },
};

export default {
  breakpoints,
  borderRadius: '15px',
  colors,
  transition: '200ms ease-in-out',
  fontFamily: 'Cabin',
};
