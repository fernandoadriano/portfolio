export default {
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
};
