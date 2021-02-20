export default {
  SectionTitle: (theme) => ({
    fontFamily: 'Cabin',
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: 1.25, // 125%
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
    fontFamily: 'Cabin',
    fontSize: '18px',
    fontWeight: 400,
    lineHeight: 1.25, // 125%
    color: theme.colors.primary.dark,
  }),
};
