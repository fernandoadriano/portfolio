import React from 'react';
import user from '@testing-library/user-event';
import {
  render, screen, waitFor, act,
} from 'src/infra/test/testUtils';
import * as yup from 'yup';
import Form from './index';

const nomeValido = 'olá mundo!';
const nomeInvalido = 'olá';

const validationErrors = {
  nomePequeno: 'nome pequeno',
  nomeObrigatorio: 'nome obrigatório',
};
// eslint-disable-next-line react/prop-types
const FormHelper = ({ onChange, onSubmit, onCancel }) => (
  <Form
    initialData={{ nome: '' }}
    schema={yup.object().shape({
      nome: yup
        .string()
        .min(5, validationErrors.nomePequeno)
        .required(validationErrors.nomeObrigatorio),
    })}
    onChange={onChange}
    onSubmit={onSubmit}
    onCancel={onCancel}
  >
    <Form.Field
      label="Nome"
      name="nome"
      placeholder="Nome"
      autoFocus
    />
    <Form.Button
      type="cancel"
    >
      Cancelar
    </Form.Button>
    <Form.Button
      type="submit"
    >
      Enviar
    </Form.Button>
  </Form>
);

describe('<Form />', () => {
  const erroNomePequeno = new RegExp(validationErrors.nomePequeno, 'i');
  const erroNomeObrigatorio = new RegExp(validationErrors.nomeObrigatorio, 'i');
  const campoNome = new RegExp('nome', 'i');
  const botaoCancelar = new RegExp('cancelar', 'i');
  const botaoEnviar = new RegExp('enviar', 'i');
  let view;
  //
  // Mock de eventos
  //
  const onSubmit = jest.fn();
  const onCancel = jest.fn();
  //
  // Pausa entre cada tecla digitada
  //
  const pausaTecla = 1;
  //
  // Helpers para localizar e interagir com campos
  //
  const findByPlaceholder = (regExPlaceholder) => screen.queryByPlaceholderText(regExPlaceholder);
  const findButton = (regExName) => screen.queryByRole('button', { name: regExName });
  const findByText = (regExText) => screen.queryByText(regExText);
  const digitar = async (campo, valor) => user.type(campo, valor, { delay: pausaTecla });
  const preencherForm = async (valor) => {
    await digitar(findByPlaceholder(campoNome), valor);

    await waitFor(() => expect(findByPlaceholder(campoNome)).toHaveAttribute('value', valor));
  };
  //
  // Inicio dos testes
  //
  beforeEach(() => {
    view = render(<FormHelper
      onSubmit={onSubmit}
      onCancel={onCancel}
    />);
  });

  afterEach(() => {
    view.unmount();
    jest.clearAllMocks();
  });
  //--------------------------------------------------------------------------
  describe('estado inicial', () => {
    describe('campo nome', () => {
      test('deve existir como input', () => {
        expect(findByPlaceholder(campoNome)).toBeInTheDocument();
      });
      test('deve estar em branco', () => {
        expect(findByPlaceholder(campoNome)).toHaveAttribute('value', '');
      });
      test('deve ter o valor digitado', async () => {
        user.type(findByPlaceholder(campoNome), nomeInvalido);

        await waitFor(() => expect(findByPlaceholder(campoNome)).toHaveAttribute('value', nomeInvalido));
      });
    });
    describe('botão cancelar', () => {
      test('deve existir', () => {
        expect(findButton(botaoCancelar)).toBeInTheDocument();
      });
      test('deve estar habilitado', () => {
        expect(findButton(botaoCancelar)).toBeEnabled();
      });
    });
    describe('botão enviar', () => {
      test('deve existir', () => {
        expect(findButton(botaoEnviar)).toBeInTheDocument();
      });
      test('deve estar desabilitado', () => {
        expect(findButton(botaoEnviar)).toBeDisabled();
      });
    });
    describe('mensagem de erro', () => {
      test('não deve existir', async () => {
        expect(findByText(erroNomePequeno)).not.toBeInTheDocument();
        expect(findByText(erroNomeObrigatorio)).not.toBeInTheDocument();
      });
    });
  });
  //--------------------------------------------------------------------------
  describe('após digitar um nome inválido', () => {
    describe('campo nome', () => {
      test('deve ter mensagem de erro', async () => {
        await preencherForm(nomeInvalido);
        await waitFor(() => expect(findByText(erroNomePequeno)).toBeInTheDocument());
      });
    });
    describe('botão cancelar', () => {
      test('deve estar habilitado', async () => {
        await preencherForm(nomeInvalido);
        await waitFor(() => expect(findButton(botaoCancelar)).toBeEnabled());
      });
    });
    describe('botão enviar', () => {
      test('deve estar desabilitado', async () => {
        await preencherForm(nomeValido);
        await waitFor(() => expect(findButton(botaoEnviar)).toBeEnabled());

        user.clear(findByPlaceholder(campoNome));
        await waitFor(() => expect(findButton(botaoEnviar)).toBeDisabled());
      });
    });
    describe('mensagem de erro', () => {
      test('deve existir', async () => {
        await preencherForm(nomeInvalido);
        await waitFor(() => expect(findByText(erroNomePequeno)).toBeInTheDocument());
      });
    });
    describe('ao clicar em enviar', () => {
      test('não deve acontecer nada', async () => {
        await preencherForm(nomeInvalido);
        await waitFor(() => expect(findByText(erroNomePequeno)).toBeInTheDocument());

        user.click(findButton(botaoEnviar));
        await waitFor(() => expect(onSubmit).not.toBeCalled());
      });
    });
  });
  //--------------------------------------------------------------------------
  describe('após digitar um nome válido', () => {
    describe('campo nome', () => {
      test('não deve ter mensagem de erro', async () => {
        await preencherForm(nomeValido);
        await waitFor(() => expect(findByText(erroNomeObrigatorio)).toBeNull());
        await waitFor(() => expect(findByText(erroNomePequeno)).toBeNull());
      });
    });
    describe('botão cancelar', () => {
      test('deve estar habilitado', async () => {
        await preencherForm(nomeValido);
        expect(findButton(botaoCancelar)).toBeEnabled();
      });
    });
    describe('botão enviar', () => {
      test('deve estar habilitado', async () => {
        await preencherForm(nomeValido);

        expect(findButton(botaoEnviar)).toBeEnabled();
      });
    });
    describe('ao clicar em enviar', () => {
      test('onSubmit() deve ser chamado 1 vez', async () => {
        await preencherForm(nomeValido);
        user.click(findButton(botaoEnviar));

        await waitFor(() => expect(onSubmit).toHaveBeenLastCalledWith({ nome: nomeValido }));
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
      test('nome deve voltar ao estado inicial', async () => {
        await preencherForm(nomeValido);
        user.click(findButton(botaoEnviar));
        await waitFor(() => expect(onSubmit).toHaveBeenCalled());
        expect(findByPlaceholder(campoNome)).toHaveProperty('value', '');
      });
      test('botão cancelar deve estar habilitado', async () => {
        await preencherForm(nomeValido);
        user.click(findButton(botaoEnviar));
        await waitFor(() => expect(onSubmit).toHaveBeenCalled());

        expect(findButton(botaoCancelar)).toBeEnabled();
      });
      test('botão enviar deve estar desabilitado', async () => {
        await preencherForm(nomeValido);
        user.click(findButton(botaoEnviar));
        await waitFor(() => expect(onSubmit).toHaveBeenCalled());

        await waitFor(() => expect(findButton(botaoEnviar)).toBeDisabled());
      });
    });
    //--------------------------------------------------------------------------
    describe('ao clicar em cancelar', () => {
      test('onCancel() deve ser chamado 1 vez', async () => {
        await preencherForm(nomeValido);
        user.click(findButton(botaoCancelar));
        await waitFor(() => expect(onCancel).toHaveReturned());
        expect(onCancel).toHaveBeenCalledTimes(1);
        expect(true).toBe(true);
      });
      test('nome deve voltar ao estado inicial', async () => {
        await preencherForm(nomeValido);
        user.click(findButton(botaoCancelar));
        await waitFor(() => expect(onCancel).toHaveReturned());
        expect(findByPlaceholder(campoNome)).toHaveProperty('value', '');
      });
      test('botão cancelar deve estar habilitado', async () => {
        await preencherForm(nomeValido);
        user.click(findButton(botaoCancelar));
        await waitFor(() => expect(onCancel).toHaveReturned());
        expect(findButton(botaoCancelar)).toBeEnabled();
      });
      test('botão enviar deve estar desabilitado', async () => {
        await preencherForm(nomeValido);
        user.click(findButton(botaoCancelar));
        await waitFor(() => expect(onCancel).toHaveReturned());
        expect(findButton(botaoEnviar)).toBeDisabled();
      });
    });
  });
});
