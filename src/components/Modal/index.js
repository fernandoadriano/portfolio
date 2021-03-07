import React from 'react';
import PropTypes from 'prop-types';
// import { motion } from 'framer-motion';
import styled, { /* createGlobalStyle, */ css } from 'styled-components';

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: rgb(0, 255, 0, 0.1); //rgba(0, 0, 0, 0.2);
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
const Modal = ({ children, show }) => (

  <ModalWrapper
    show={show}
  >
    {children}
  </ModalWrapper>
);

Modal.defaultProps = {
  show: false,
};

Modal.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    // PropTypes.element,
    // PropTypes.func,
  ]).isRequired,
  show: PropTypes.bool,
};
export default Modal;
