import React from 'react';
import { render, screen } from 'src/infra/test/testUtils';

import TextField from './index';

describe('<Input />', () => {
  describe('Renderização', () => {
    it('Campo padrão', () => {
      const valorInicial = 'valor inicial';
      render(
        <TextField
          name="nome"
          autoFocus
          placeholder="nome"
          onChange={() => {}}
          value={valorInicial}
          color="red"
          placeholderColor="blue"
        />,
      );

      const input = screen.getByPlaceholderText('nome');

      expect(input).toHaveAttribute('value', valorInicial);
      expect(input).toHaveAttribute('name', 'nome');
      expect(input).toMatchSnapshot();
    });
  });
});
