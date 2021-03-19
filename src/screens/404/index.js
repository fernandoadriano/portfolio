import React from 'react';
import { Lottie } from '@crello/react-lottie';

import Box from 'src/components/layout/Box';
import Text from 'src/foundations/typography/Text';
import Animacao404 from './animations/404.json';

const Error404 = () => (
  <Box
    flex="1"
    display="flex"
    flexWrap="wrap"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Lottie
      width="50%"
      height="50%"
      config={{ animationData: Animacao404, loop: true, autoplay: true }}
    />
    <Text color="secondary.dark" variant="SectionTitle">Eita.... não achei o conteúdo que você queria acessar!</Text>
  </Box>
);

export default Error404;
