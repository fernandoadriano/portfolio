import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    background: white;
`;

// TODO #11:
// TODO: #15 Criar o elemento TextInput para entrada de dados
const FormContato = () => (
  <Form>
    <input name="txtNome" value="meu nome" placeholder="Nome" />
    <input name="txtEmail" value="email@companhia" placeholder="E-mail" />
    <input name="txtFone" value="1234567" placeholder="Telefone" />
    <input name="cmdCancelar" type="submit" />
    <input name="cmdEnviar" type="submit" />
  </Form>
);

export default FormContato;
