import React from 'react';

import Box from '../src/components/layout/Box';
import Footer from '../src/regions/Footer';
import Grid from '../src/components/layout/Grid';
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
      <Grid.Container>
        <Grid.Row>
          <Grid.Col value={12}>
            <Header />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 10 }}
            order="1"
          >
            <AboutMe />
            <Projects />
            {/* <References />
            <Contact /> */}
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 2 }}
            display="flex"
            alignItems="flex-end"
            justifyContent="top"
            flexDirection={{ sm: 'row', md: 'column' }}
            order={{ sm: 0, md: 2 }}
          >
            <MenuArea />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col value={12}>
            <Footer />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}
