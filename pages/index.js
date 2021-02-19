import React from 'react';

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
    <div>
      <Header />
      <Content>
        <AboutMe />
        <Projects />
        <References />
        <Contact />
      </Content>
      <MenuArea />
      <Footer />
    </div>
  );
}
