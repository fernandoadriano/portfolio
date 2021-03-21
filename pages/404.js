import React from 'react';

import MainScreen from 'src/screens/templates/MainScreen';
import Error404 from 'src/screens/404';

const Pagina404 = () => (
  <MainScreen
    headTitle="404"
    description="Página não localizada"
    showMenu={false}
  >
    <Error404 />
  </MainScreen>
);

export default Pagina404;
