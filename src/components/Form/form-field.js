import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Input from 'src/components/Input';
import Text from 'src/foundations/typography/Text';
import FormContext from './form-context';

const FormField = ({
  as, autoFocus, label, mask, name, placeholder, type, rounded, rows,
}) => {
  const { onChange, values, status } = useContext(FormContext);

  return (
    <span
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        marginRight: '20px',
        marginTop: '16px',
        marginBottom: '16px',
      }}
    >
      <Text variant="formFieldLabel">{label}</Text>
      <Input
        type={type}
        as={as}
        name={name}
        autoFocus={autoFocus}
        onChange={onChange}
        value={values[name]}
        alwaysShowMask
        mask={mask}
        placeholder={placeholder}
        rounded={rounded}
        rows={rows}
      />
      {((fieldStatus) => {
        let erro = '';

        if (fieldStatus && fieldStatus.touched && fieldStatus.error !== '') {
          erro = fieldStatus.error;
        }

        return (
          <Text variant="formFieldError">
            {erro}
                &nbsp;
          </Text>
        );
      })(status[name])}
    </span>
  );
};

FormField.defaultProps = {
  as: 'input',
  autoFocus: false,
  mask: null,
  placeholder: '',
  rounded: false,
  rows: 1,
  type: 'text',
};

FormField.propTypes = {
  as: PropTypes.string,
  autoFocus: PropTypes.bool,
  label: PropTypes.string.isRequired,
  mask: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  rounded: PropTypes.bool,
  rows: PropTypes.number,
  type: PropTypes.string,
};

export default FormField;
