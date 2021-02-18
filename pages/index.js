import React from 'react';
import Content from '../src/regions/Content';
import Footer from '../src/regions/Footer';
import Header from '../src/regions/Header';
import MenuArea from '../src/regions/MenuArea';

export default function Home() {
  return (
    <div>
      <Header />
      <Content>Corpo</Content>
      <MenuArea />
      <Footer />
    </div>
  );
}
