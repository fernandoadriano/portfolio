import React from 'react';
import PropTypes from 'prop-types';
// import { motion } from 'framer-motion';
import styled, { /* createGlobalStyle, */ css } from 'styled-components';

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    overflow: scroll;
    transition: .3s;
    z-index: 100;
  
    ${({ show }) => (
    show
      ? css`
            opacity: 1;
            pointer-events: all
        `
      : css`
            opacity: 0;
            pointer-events: none;
        `
  )};
`;

// TODO: #16 Adicionar controle de fechamento de janela
const Modal = ({ children, show, onClose }) => (
  <ModalWrapper
    show={show}
    onClick={(event) => {
      if (!event.target.closest('[data-modal-safe-area="true"]')) {
        onClose();
      }
    }}
  >
    {children({
      'data-modal-safe-area': 'true',
      onClose,
    })}
  </ModalWrapper>
);

Modal.defaultProps = {
  show: false,
};

Modal.propTypes = {
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};
export default Modal;
