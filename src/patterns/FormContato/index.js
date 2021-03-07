import React from 'react';
// import styled from 'styled-components';

import { Box, Grid } from '../../components/layout';

const FormContent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="txtNome" value="meu nome" placeholder="Nome" />
      <input name="txtEmail" value="email@companhia" placeholder="E-mail" />
      <input name="txtFone" value="1234567" placeholder="Telefone" />
      <button name="cmdCancelar" type="submit">cancelar</button>
      <button name="cmdEnviar" type="submit">enviar</button>
    </form>
  );
};

// TODO #11:
// TODO: #15 Criar o elemento TextInput para entrada de dados
const FormContato = ({ propsModal }) => (
  <Grid.Container
    display="flex"
    flex={1}
    width="25%"
    justifyContent="center"
    alignItems="center"
  >
    <Grid.Row>
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flex={1}
        padding={{
          xs: '16px',
          md: '85px',
        }}
        backgroundColor="white"
       // eslint-disable-next-line react/jsx-props-no-spreading
        {...propsModal}
      >
        <FormContent />
      </Box>
    </Grid.Row>
  </Grid.Container>
);

export default FormContato;
