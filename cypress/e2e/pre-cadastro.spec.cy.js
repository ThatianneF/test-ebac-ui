<reference types="cypress" />
import { faker } from '@faker-js/faker';
describe('Funcionalidade Páginas de produtos', () => {


  beforeEach(() => {
      cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Deve completar o pré cadastro com sucesso', () => {
      cy.get('#reg_email').type(faker.internet.email())
      cy.get('#reg_password').type('testesucesso!')
      cy.get(':nth-child(4) > .button').click()
      cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
      cy.get('#account_first_name').type('Sucesso')
      cy.get('#account_last_name').type('Ebac')
      cy.get('#password_current').type('testesucesso!')
      cy.get('#password_1').type('testesucesso4')
      cy.get('#password_2').type('testesucesso4')
      cy.get('.woocommerce-Button').click()

      cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  });
});

