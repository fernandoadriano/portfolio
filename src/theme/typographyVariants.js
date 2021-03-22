export default {
  formFieldError: (theme) => ({
    fontSize: '12px',
    marginLeft: '8px',
    color: theme.colors.secondary.main,
  }),
  formFieldLabel: (theme) => ({
    fontSize: '18px',
    marginBottom: '0px',
    marginLeft: theme.borderRadius,
    color: theme.colors.primary.main,
  }),
  SectionTitle: (theme) => ({
    display: 'block',
    fontFamily: 'Cabin',
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: 1.25, // 125%
    marginBottom: '15px',
    color: theme.colors.secondary.main,
  }),
  CardTitle: (theme) => ({
    fontFamily: 'Cabin',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: 1.25,
    textTransform: 'capitalize',
    color: theme.colors.primary.dark,
  }),
  CardDescription: (theme) => ({
    fontFamily: 'Cabin',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: 1,
    textAlign: 'justify',
    color: theme.colors.primary.dark,
  }),
  paragraph1: (theme) => ({
    display: 'block',
    fontFamily: 'Cabin',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.3, // 125%
    marginBottom: '10px',
    color: theme.colors.primary.dark,
  }),
  // eslint-disable-next-line no-unused-vars
  buttonText: (theme) => ({
    display: 'block',
    fontFamily: 'Cabin',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.3, // 125%
    marginBottom: '10px',
  }),
  // eslint-disable-next-line no-unused-vars
  smallestException: (theme) => ({
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: 1, // 100%
  }),
  // eslint-disable-next-line no-unused-vars
  formException: (theme) => ({
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: 1, // 100%
  }),
};
