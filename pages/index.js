import React from 'react';

import Box from '../src/components/layout/Box';
import Content from '../src/foundations/Content';
import Footer from '../src/regions/Footer';
import Header from '../src/regions/Header';
import AboutMe from '../src/regions/AboutMe';
import Contact from '../src/regions/Contact';
import Projects from '../src/regions/Projects';
import References from '../src/regions/References';
import MenuArea from '../src/regions/MenuArea';

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Header />
      <Content>
        <AboutMe />
        <Projects />
        {/* <References />
        <Contact /> */}
      </Content>
      {/* <MenuArea /> */}
      <Footer />
    </Box>
  );
}
