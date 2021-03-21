/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import AboutMe from 'src/regions/AboutMe';
import MainScreen from 'src/screens/templates/MainScreen';

export default function Home() {
  return (
    <MainScreen>
      <AboutMe />
    </MainScreen>
  );
}
