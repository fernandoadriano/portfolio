import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FormContext from './form-context';

import FormButton from './form-button';
import FormField from './form-field';
import FormRow from './form-row';

const createStoreStatus = (store) => {
  const status = {};

  Object.keys(store).forEach(
    (campo) => {
      status[campo] = { touched: false, error: '' };
    },
  );

  return status;
};

const FormWrapper = styled.form``;

const Form = ({
  children, initialData, schema, onSubmit, onCancel, ...props
}) => {
  const [initialStore] = useState(initialData);
  const [store, setStore] = useState(initialData);
  const [storeStatus, setStoreStatus] = useState(createStoreStatus(initialData));
  const [isInvalid, setIsInvalid] = useState(true);

  const handleChange = async (event) => {
    const fieldName = event.target.getAttribute('name');
    const newStore = { ...store, [fieldName]: event.target.value };
    const newStoreStatus = { ...storeStatus };
    let hasError = true;

    setStore(newStore);

    storeStatus[fieldName].touched = true;

    // Resetar todos os erros
    Object.keys(newStoreStatus).forEach((campo) => { newStoreStatus[campo].error = ''; });

    try {
      await schema.validate(newStore, { abortEarly: false });
      hasError = false;
    } catch (err) {
      err.inner.forEach((erro) => { storeStatus[erro.path].error = JSON.stringify(erro.message); });
    } finally {
      setStoreStatus(newStoreStatus);
      setIsInvalid(hasError);
    }
  };

  const handleClick = (type, event) => {
    switch (type.toLowerCase()) {
      case 'submit':
        onSubmit(store);
        break;
      case 'cancel':
        onCancel();
        break;
      default:
        event.preventDefault();
    }
  };

  Form.isInvalid = () => isInvalid;

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
        onSubmit={
          async (event) => {
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
            } catch (err) {
              err.inner.forEach(
                (erro) => {
                  storeStatus[erro.path].error = JSON.stringify(erro.message);
                },
              );
            } finally {
              setStoreStatus(newStoreStatus);
            }
          }
        }
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
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  schema: PropTypes.object.isRequired,
};

Form.Button = FormButton;
Form.Field = FormField;
Form.Row = FormRow;

export default Form;
