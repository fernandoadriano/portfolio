describe('/', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a').contains(/contato/i).click();
  });
  describe('Formulário de contato', () => {
    describe('Renderização', () => {
      it('Possui o campo nome', () => {
        cy.get('#formContato input[name="nome"]').should('have.length', 1);
      });
      it('Possui o campo email', () => {
        cy.get('#formContato input[name="email"]').should('have.length', 1);
      });
      it('Possui o campo mensagem', () => {
        cy.get('#formContato textarea[name="msg"]').should('have.length', 1);
      });
      it('Possui o botão cancelar', () => {
        cy.get('#formContato button[type="cancel"]').should('have.length', 1);
      });
      it('Possui o botão enviar', () => {
        cy.get('#formContato button[type="submit"]').should('have.length', 1);
      });
    });
  });

  describe('Envio do formulário', () => {
    it.only('Formulário válido', () => {
      cy.intercept('POST', 'https://contact-form-api-jamstack.herokuapp.com/message').as('enviarForm');

      cy.get('#formContato input[name="nome"]').type('eu');
      cy.get('#formContato input[name="email"]').type('contato@empresa.com');
      cy.get('#formContato textarea[name="msg"]').type('Minha super mensagem');
      cy.get('#formContato button[type="submit"]').click();

      cy.wait('@enviarForm').its('response.statusCode').should('equal', 201);
    });
  });
});
