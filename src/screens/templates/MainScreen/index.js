/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Box from 'src/components/layout/Box';
import Grid from 'src/components/layout/Grid';
import Modal from 'src/components/Modal';
import FormContato from 'src/patterns/FormContato';
import Footer from 'src/regions/Footer';
import Header from 'src/regions/Header';
import MenuArea from 'src/regions/MenuArea';

export default function MainScreen({ children, showMenu }) {
  const [showContato, setShowContato] = useState(false);

  const handleMenu = {
    contato: () => setShowContato(true),
  };

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="flex-start"
    >
      <Modal
        show={showContato}
        onClose={() => setShowContato(false)}
      >
        {(propsModal) => (
          <FormContato {...propsModal} />
        )}
      </Modal>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col value={12}>
            <Header />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: showMenu ? 10 : 12 }}
            order="1"
          >
            {children}
          </Grid.Col>
          { showMenu
            && (
            <Grid.Col
              value={{ xs: 12, md: 2 }}
              display="flex"
              alignItems="flex-end"
              justifyContent="top"
              flexDirection={{ sm: 'row', md: 'column' }}
              order={{ sm: 0, md: 2 }}
            >
              <MenuArea onClick={(item) => handleMenu[String(item)]()} />
            </Grid.Col>
            )}
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

MainScreen.defaultProps = {
  showMenu: true,
};

MainScreen.propTypes = {
  children: PropTypes.node.isRequired,
  showMenu: PropTypes.bool,
};
