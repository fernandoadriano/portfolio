import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from 'src/components/Button';
import FormContext from './form-context';

const FormButton = ({ children, type, ...props }) => {
  const { isInvalid, handleClick } = useContext(FormContext);

  return (
    <Button
      disabled={type.toLowerCase() !== 'cancel' && isInvalid}
      onClick={(event) => handleClick(type, event)}
        // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </Button>
  );
};

FormButton.defaultProps = {
  type: undefined,
};

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([undefined, 'cancel', 'submit']),
};

export default FormButton;
