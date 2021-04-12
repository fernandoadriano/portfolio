import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FormContext from './form-context';

import FormButton from './form-button';
import FormField from './form-field';
import FormRow from './form-row';
//
// Função para inicializar o status do formulário
// com campos sem erro e nunca visitados (touched)
//
const createStoreStatus = (store) => {
  const status = {};

  Object.keys(store).forEach(
    (campo) => {
      status[campo] = { touched: false, error: '' };
    },
  );

  return status;
};
//
// Wrapper para formulário. Por enquanto é desnecessário, mas...
//
const FormWrapper = styled.form``;
//
// Componente do formulário
//
const Form = ({
  children, initialData, schema, onSubmit, onCancel, ...props
}) => {
  const [initialStore] = useState(initialData); // Salva em uma store os campos iniciais
  const [store, setStore] = useState(initialData);
  const [storeStatus, setStoreStatus] = useState(createStoreStatus(initialData));
  const [isInvalid, setIsInvalid] = useState(true);
  //
  // Handle para processar as alterações nos campos
  //
  const handleChange = async (event) => {
    const fieldName = event.target.getAttribute('name');
    const newStore = { ...store, [fieldName]: event.target.value };
    const newStoreStatus = { ...storeStatus };
    const errorList = [];

    setStore(newStore);

    storeStatus[fieldName].touched = true;

    // Resetar todos os erros
    Object.keys(newStoreStatus).forEach((campo) => { newStoreStatus[campo].error = ''; });

    try {
      await schema.validate(newStore, { abortEarly: false });
    } catch (err) {
      err.inner.forEach((erro) => {
        errorList.push(erro);
        storeStatus[erro.path].error = erro.message;
      });
    } finally {
      setStoreStatus(newStoreStatus);
      setIsInvalid(errorList.length > 0);
    }
  };
  //
  // Handle do submit
  //
  const handleSubmit = async (event) => {
    //
    // Processar o envio de formulários
    //
    event.preventDefault();

    const newStoreStatus = { ...storeStatus };
    Object.keys(newStoreStatus).forEach(
      (campo) => {
        newStoreStatus[campo].touched = true;
        newStoreStatus[campo].error = '';
      },
    );

    try {
      await schema.validate(store, { abortEarly: false });
      onSubmit(store);
      setStore(initialStore);
      Object.keys(newStoreStatus).forEach(
        (campo) => {
          newStoreStatus[campo].touched = false;
          newStoreStatus[campo].error = '';
        },
      );
      setIsInvalid(true);
    } catch (err) {
      err.inner.forEach(
        (erro) => {
          storeStatus[erro.path].error = JSON.stringify(erro.message);
        },
      );
    } finally {
      setStoreStatus(newStoreStatus);
    }
  };
  //
  // Handle Cancel
  //
  const handleCancel = (event) => {
    const newStoreStatus = { ...storeStatus };

    event.preventDefault();

    setStore(initialStore);
    Object.keys(newStoreStatus).forEach(
      (campo) => {
        newStoreStatus[campo].touched = false;
        newStoreStatus[campo].error = '';
      },
    );
    setIsInvalid(true);
    onCancel();
  };
  //
  // Handle para processar os cliques dos botões
  //
  const handleClick = async (type, event) => {
    switch (type.toLowerCase()) {
      case 'submit':
        handleSubmit(event);
        break;
      case 'cancel':
        handleCancel(event);
        break;
      default:
        event.preventDefault();
    }
  };

  /// TODO: rever
  //   Form.isInvalid = () => isInvalid;

  return (
    <FormContext.Provider value={{
      values: store,
      status: storeStatus,
      isInvalid,
      onChange: handleChange,
      handleClick,
    }}
    >
      <FormWrapper
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </FormWrapper>
    </FormContext.Provider>
  );
};

Form.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  initialData: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  onCancel: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  schema: PropTypes.object.isRequired,
};

Form.Button = FormButton;
Form.Field = FormField;
Form.Row = FormRow;

export default Form;
