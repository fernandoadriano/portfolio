import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import { Box, Grid } from 'src/components/layout';
import Form from 'src/components/Form';
import Text from 'src/foundations/typography/Text';

import sending from './animations/sending.json';
import sendingFailure from './animations/sending-fail.json';
import sendingSuccess from './animations/sending-success.json';

const formState = {
  LOADING: 0,
  EDITING: 1,
  SENDING: 2,
  SUCCESS: 3,
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

const FormContent = ({ onClose }) => {
  const [state, setState] = useState(formState.EDITING);
  const handleSubmit = async (contato) => {
    setState(formState.SENDING);

    try {
      //
      // Criar requisição
      //
      let retorno = fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          name: contato.nome,
          email: contato.email,
          message: contato.msg,
        }),
      });
      //
      // Aguardar 1 segundo - simular tempo mínimo para chamada
      //
      await timeout(1000);
      //
      // Obter resultado da requisição
      //
      retorno = await retorno;

      if (retorno.status === 201) {
        await retorno.json();

        setState(formState.SUCCESS);

        await timeout(3000);
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

  const stateView = {
    [formState.LOADING]: () => (<pre>Loading...</pre>),
    [formState.EDITING]: () => (
      <Form
        id="formContato"
        initialData={{
          nome: '',
          email: '',
          msg: '',
        }}
        schema={ContatoSchema}
        onCancel={onClose}
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1',
          width: '100%',
        }}
      >
        <Form.Row>
          <Text
            variant="title"
            tag="h1"
            color="primary.main"
          >
            Deixe a sua mensagem aqui...
          </Text>
        </Form.Row>
        <Form.Row>
          <Form.Field
            autoFocus
            name="nome"
            label="Nome"
            placeholder="Nome completo"
            rounded
          />
        </Form.Row>
        <Form.Row>
          <Form.Field
            name="email"
            label="E-Mail"
            placeholder="E-Mail de contato"
            rounded
          />
        </Form.Row>
        <Form.Row>
          <Form.Field
            as="textarea"
            rows={4}
            name="msg"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            rounded
          />
        </Form.Row>
        <Form.Row center>
          <Form.Button type="cancel" color="secondary.dark" size={4} ghost>Cancelar</Form.Button>
          <Form.Button type="submit" color="primary.dark" backgroundColor="primary.light" size={4}>Enviar</Form.Button>
        </Form.Row>
      </Form>
    ),
    [formState.SENDING]: () => (
      <>
        <Text
          variant="title"
          tag="h1"
          color="primary.main"
        >
          Enviando mensagem...
        </Text>
        <Animacao animacao={sending} />
      </>
    ),
    [formState.SUCCESS]: () => (
      <>
        <Text
          variant="title"
          tag="h1"
          color="primary.main"
        >
          SUCESSO!
        </Text>
        <Animacao animacao={sendingSuccess} />
      </>
    ),
    [formState.FAIL]: () => (
      <>
        <Text
          variant="title"
          tag="h1"
          color="secondary.dark"
        >
          FALHA NO ENVIO!
        </Text>
        <Animacao animacao={sendingFailure} />
      </>
    ),
  };

  return stateView[state]();
};

FormContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const FormContato = (propsModal) => (
  <Grid.Container
    display="flex"
    flex={1}
    // width="40%"
    marginLeft={{ sm: '16px', md: '350px' }}
    marginRight={{ sm: '16px', md: '350px' }}
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
      minHeight="500px"
      padding={{
        xs: '16px',
        md: '32px',
      }}
      backgroundColor="white"
       // eslint-disable-next-line react/jsx-props-no-spreading
      {...propsModal}
    >
      <FormContent
        onClose={propsModal.onClose}
      />
    </Box>
  </Grid.Container>
);

export default FormContato;
