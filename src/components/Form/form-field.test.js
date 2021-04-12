import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from 'src/infra/test/testUtils';

import FormField from './form-field';
import FormContext from './form-context';

describe('<FormField />', () => {
  describe('mensagem de erro', () => {
    test('mostrar quando o campo foi visitado', () => {
      render(
        <FormContext.Provider value={{
          values: {
            nome: '',
          },
          onChange: () => {},
          status: {
            nome: {
              error: 'deu ruim',
              touched: true,
            },
          },
        }}
        >
          <FormField
            label="Nome"
            name="nome"
            placeholder="nome"
          />
        </FormContext.Provider>,
      );

      const input = screen.getByRole('textbox', { placeholder: /nome/i });
      expect(input).toBeDefined();
      expect(screen.getByText(/deu ruim/i)).toBeInTheDocument();
    });

    test('não mostrar quando o campo não foi visitado', () => {
      render(
        <FormContext.Provider value={{
          values: {
            nome: '',
          },
          onChange: () => {},
          status: {
            nome: {
              error: 'deu ruim',
              touched: false,
            },
          },
        }}
        >
          <FormField
            label="Nome"
            name="nome"
            placeholder="nome"
          />
        </FormContext.Provider>,
      );

      const input = screen.getByRole('textbox', { placeholder: /nome/i });
      expect(input).toBeDefined();
      expect(screen.queryByText(/deu ruim/i)).not.toBeInTheDocument();
    });
  });

  describe('onChange()', () => {
    describe('disparar quando digitar', () => {
      test('disparar uma vez a cada letra', () => {
        const onChange = jest.fn();

        render(
          <FormContext.Provider value={{
            values: {
              nome: '',
            },
            onChange,
            status: {
              nome: {
                error: 'deu ruim',
                touched: true,
              },
            },
          }}
          >
            <FormField
              label="Nome"
              name="nome"
              placeholder="nome"
            />
          </FormContext.Provider>,
        );

        const input = screen.getByRole('textbox', { placeholder: /nome/i });
        const nome = 'funciona';
        user.type(input, nome);
        expect(onChange).toHaveBeenCalledTimes(nome.length);
      });
    });
  });
});
