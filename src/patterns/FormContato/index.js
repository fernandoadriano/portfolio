import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as yup from 'yup';

import { Box, Grid } from '../../components/layout';
import Button from '../../components/Button';
import Text from '../../foundations/typography/Text';
import { TextField } from '../../components/Forms';

import sending from './animations/sending.json';
import sendingFailure from './animations/sending-fail.json';
import sendingSuccess from './animations/sending-success.json';

const formState = {
  LOADING: 0,
  EDITING: 1,
  SENDING: 2,
  SUCESS: 3,
  FAIL: 4,
};

// eslint-disable-next-line react/prop-types
const Animacao = ({ animacao }) => (
  <Lottie
    width="50px"
    height="50px"
    config={{ animationData: animacao, loop: true, autoplay: true }}
  />
);

const formAnimation = [
  () => (<><Text>Loading...</Text></>), // LOADING
  (onClose, formCtrl) => (
    <>
      <Button name="cmdCancelar" type="submit" color="secondary.dark" size={4} ghost onClick={onClose}>cancelar</Button>
      <Button name="cmdEnviar" type="submit" color="primary.dark" backgroundColor="primary.light" size={4} disabled={formCtrl.isInvalid}>enviar</Button>
    </>
  ), // EDITING
  () => (
    <Animacao animacao={sending} />
  ), // SENDING
  () => (
    <Animacao animacao={sendingSuccess} />
  ), // SUCESS
  () => (
    <Animacao animacao={sendingFailure} />
  ), // FAIL
];

const timeout = (pausa) => new Promise((resolve) => setTimeout(resolve, pausa));

const ContatoSchema = yup.object().shape({
  nome: yup
    .string()
    .required('Informe seu nome completo'),
  email: yup
    .string()
    .email('Informe um e-mail válido')
    .required('Informe seu e-mail'),
  msg: yup
    .string()
    .required('Deve informar uma mensagem'),
});

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const FormContent = ({ onClose }) => {
  const [state, setState] = useState(formState.EDITING);
  const [contato, setContato] = useState({
    nome: '',
    email: '',
    msg: '',
  });

  // useEffect(() => setTimeout(
  //   () => setState(formState.EDITING),
  //   1000,
  // ), []);

  const [formCtrl, setFormCtrl] = useState({
    isInvalid: true,
    nome: {
      touched: false,
      error: '',
    },
    email: {
      touched: false,
      error: '',
    },
    msg: {
      touched: false,
      error: '',
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState(formState.SENDING);
    await timeout(1000);

    try {
      const retorno = await fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          name: contato.nome,
          email: contato.email,
          message: contato.msg,
        }),
      });

      if (retorno.status === 201) {
        await retorno.json();

        setState(formState.SUCESS);

        await timeout(3000);
        setContato({ nome: '', email: '', msg: '' });
        setFormCtrl({
          isInvalid: true,
          nome: {
            touched: false,
            error: '',
          },
          email: {
            touched: false,
            error: '',
          },
          msg: {
            touched: false,
            error: '',
          },
        });
        setState(formState.EDITING);
      } else {
        setState(formState.FAIL);
        await timeout(3000);
      }
    } catch (e) {
      setState(formState.FAIL);
      await timeout(3000);
    }
  };

  const handleChange = async (event) => {
    const name = event.target.getAttribute('name');
    const newContato = { ...contato, [name]: event.target.value };

    if (state !== formState.EDITING) {
      setState(formState.EDITING);
    }

    formCtrl[name].touched = true;
    formCtrl[name].error = '';

    try {
      await ContatoSchema.validate(newContato, { abortEarly: false });
      formCtrl.isInvalid = false;
    } catch (err) {
      formCtrl.isInvalid = true;

      err.inner.forEach((erro) => {
        formCtrl[erro.path].error = erro.message;
      });
    } finally {
      setContato(newContato);
      setFormCtrl(formCtrl);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {formCtrl.nome.touched && formCtrl.nome.error && (
        <Text color="secondary.main" variant="smallestException">
          {formCtrl.nome.error}
        </Text>
      )}
      <TextField color="primary.dark" value={contato.nome} name="nome" placeholder="Nome" placeholderColor="primary.light" rounded onChange={(event) => handleChange(event)} />

      {formCtrl.email.touched && formCtrl.email.error && (
      <Text color="secondary.main" variant="smallestException">
        {formCtrl.email.error}
      </Text>
      )}
      <TextField color="primary.dark" value={contato.email} name="email" placeholder="E-mail" placeholderColor="primary.light" rounded onChange={(event) => handleChange(event)} />

      {formCtrl.msg.touched && formCtrl.msg.error && (
      <Text color="secondary.main" variant="smallestException">
        {formCtrl.msg.error}
      </Text>
      )}
      <TextField as="textarea" rows={4} color="primary.dark" value={contato.msg} name="msg" placeholder="Mensagem" placeholderColor="primary.light" rounded onChange={(event) => handleChange(event)} />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
      >
        {formAnimation[state](onClose, formCtrl)}
      </Box>
    </Form>
  );
};

FormContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

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
