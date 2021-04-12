import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from 'src/infra/test/testUtils';

import Button from './index';

describe('<Button />', () => {
  describe('Renderização', () => {
    it('simples', () => {
      render(
        <Button>Botão Habilitado</Button>
        ,
      );
      const botao = screen.getByText(/botão habilitado/i);
      expect(botao).not.toHaveAttribute('disabled');
    });

    it('botao desabilitado', () => {
      render(
        <Button
          disabled
        >
          Botão Desabilitado
        </Button>
        ,
      );

      const botao = screen.getByText(/botão desabilitado/i);
      expect(botao).toHaveAttribute('disabled');

      expect(true).toBe(true);
    });

    it('botão Ghost', () => {
      render(
        <Button>Botão Ghost</Button>
        ,
      );
      const botao = screen.getByText(/botão ghost/i);

      expect(botao).toMatchSnapshot();
    });
  });

  describe('Interação', () => {
    it('onClick()', () => {
      const onClick = jest.fn();
      render(
        <Button onClick={onClick}>Botão Padrão</Button>
        ,
      );
      const botao = screen.getByText(/botão padrão/i);
      user.click(botao);
      expect(onClick).toHaveBeenCalled();
    });
  });
});
