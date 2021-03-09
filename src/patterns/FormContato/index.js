import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Box, Grid } from '../../components/layout';
import Button from '../../components/Button';
import Text from '../../foundations/typography/Text';
import { TextField } from '../../components/Forms';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const FormContent = ({ onClose }) => {
  const [contato, setContato] = useState({
    nome: '',
    email: '',
    msg: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const name = event.target.getAttribute('name');
    setContato({ ...contato, [name]: event.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextField color="primary.dark" value={contato.nome} name="nome" placeholder="Nome" placeholderColor="primary.light" rounded onChange={handleChange} />
      <TextField color="primary.dark" value={contato.email} name="email" placeholder="E-mail" placeholderColor="primary.light" rounded onChange={handleChange} />
      <TextField as="textarea" rows={4} color="primary.dark" value={contato.msg} name="msg" placeholder="Mensagem" placeholderColor="primary.light" rounded onChange={handleChange} />
      <span
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Button name="cmdCancelar" type="submit" color="secondary.dark" size={4} ghost onClick={onClose}>cancelar</Button>
        <Button name="cmdEnviar" type="submit" color="primary.dark" backgroundColor="primary.light" size={4}>enviar</Button>
      </span>
    </Form>
  );
};

FormContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

// TODO #11:
// TODO: #15 Criar o elemento TextInput para entrada de dados
const FormContato = (propsModal) => (
  <Grid.Container
    display="flex"
    flex={1}
    width="40%"
    justifyContent="center"
    alignItems="center"
  >
    <Box
      boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.2)"
      borderRadius="15px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flex={1}
      padding={{
        xs: '16px',
      }}
      backgroundColor="white"
       // eslint-disable-next-line react/jsx-props-no-spreading
      {...propsModal}
    >
      <Text
        variant="title"
        tag="h1"
        color="primary.main"
      >
        Deixe a sua mensagem aqui...
      </Text>
      <FormContent
        onClose={propsModal.onClose}
      />
    </Box>
  </Grid.Container>
);

export default FormContato;
