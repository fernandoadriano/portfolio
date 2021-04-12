/* eslint-disable react/prop-types */
import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from 'src/infra/test/testUtils';

import FormButton from './form-button';
import FormContext from './form-context';
//----------------------------------------------------------------------
// Função de apoio para criar o botão que recebe um contexto
//----------------------------------------------------------------------
const ButtonHelper = ({
  type, children, handleClick, isInvalid = false,
}) => (
  <FormContext.Provider value={{ type, isInvalid, handleClick }}>
    <FormButton
      isInvalid={isInvalid}
      type={type}
    >
      {children}
    </FormButton>
  </FormContext.Provider>
);
//----------------------------------------------------------------------
// Suite de testes
//----------------------------------------------------------------------
describe('<FormButton />', () => {
  describe('status do botão', () => {
    describe('habilitar', () => {
      test('quando isInvalid == true  e type == cancel', () => {
        render(
          <ButtonHelper
            isInvalid
            type="cancel"
          >
            Botão
          </ButtonHelper>,
        );

        const botao = screen.getByRole('button', { name: /botão/i });
        expect(botao).toBeEnabled();
      });

      test('quando isInvalid == false e type == cancel', () => {
        render(
          <ButtonHelper
            type="cancel"
          >
            Botão
          </ButtonHelper>,
        );

        const botao = screen.getByRole('button', { name: /botão/i });
        expect(botao).toBeEnabled();
      });

      test('quando isInvalid == false e type != cancel', () => {
        render(
          <ButtonHelper
            type="submit"
          >
            Botão
          </ButtonHelper>,
        );

        const botao = screen.getByRole('button', { name: /botão/i });
        expect(botao).toBeEnabled();
      });
    });

    describe('desabilitar', () => {
      test('quando isInvalid == true  e type != cancel', () => {
        render(
          <ButtonHelper
            isInvalid
            type="submit"
          >
            Botão
          </ButtonHelper>,
        );

        const botao = screen.getByRole('button', { name: /botão/i });
        expect(botao).toBeDisabled();
      });
    });
  });
  //----------------------------------------------------------------------
  describe('onClick()', () => {
    describe('se type == submit', () => {
      test('acontecer quando isInvalid == false', () => {
        const handleClick = jest.fn();
        render(
          <ButtonHelper
            type="submit"
            handleClick={handleClick}
          >
            Botão
          </ButtonHelper>,
        );

        const botao = screen.getByRole('button', { name: /botão/i });
        user.click(botao);
        expect(handleClick).toHaveBeenCalledTimes(1);
      });

      test('não acontecer quando isInvalid == true', () => {
        const handleClick = jest.fn();
        render(
          <ButtonHelper
            type="submit"
            isInvalid
            handleClick={handleClick}
          >
            Botão
          </ButtonHelper>,
        );

        const botao = screen.getByRole('button', { name: /botão/i });
        user.click(botao);
        expect(handleClick).toHaveBeenCalledTimes(0);
      });
    });

    describe('se type == cancel', () => {
      test('acontecer quando isInvalid == false', () => {
        const handleClick = jest.fn();
        render(
          <ButtonHelper
            type="cancel"
            handleClick={handleClick}
          >
            Botão
          </ButtonHelper>,
        );

        const botao = screen.getByRole('button', { name: /botão/i });
        user.click(botao);
        expect(handleClick).toHaveBeenCalledTimes(1);
      });

      test('acontecer quando isInvalid == true', () => {
        const handleClick = jest.fn();
        render(
          <ButtonHelper
            type="cancel"
            isInvalid
            handleClick={handleClick}
          >
            Botão
          </ButtonHelper>,
        );

        const botao = screen.getByRole('button', { name: /botão/i });
        user.click(botao);
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
