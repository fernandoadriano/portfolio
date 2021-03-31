import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from 'src/infra/test/testUtils';

import TextField from './index';

describe('<Input />', () => {
  describe('Renderização', () => {
    it('Campo padrão', () => {
      const valorInicial = 'valor inicial';
      render(
        <TextField
          name="nome"
          placeholder="nome"
          onChange={() => {}}
          value={valorInicial}
          color="red"
          placeholderColor="blue"
        />,
      );

      const input = screen.getByPlaceholderText('nome');

      expect(input).toHaveProperty('value', valorInicial);
      expect(input).toHaveProperty('name', 'nome');
      expect(input).toMatchSnapshot();
    });
  });
});
