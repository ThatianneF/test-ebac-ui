describe('Fazer login', () => {

    beforeEach(() => {
        cy.visit ('/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
    });
  
    it('Deve preencher os campos de login', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
    });
    it.only('Atualizar endereço' , () => {
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(1) > .title > .edit').click()
        cy.get('#select2-billing_country-container').click().type('Brasil')
        cy.get('[aria-selected="true"]').click()
        cy.get('#billing_address_1').clear().type('Av. Lisboa{enter}')
        cy.get('#billing_address_2').clear().type('7')
        cy.get('#billing_city').click().clear().type('Lisboa{enter}')
        cy.get('#billing_postcode').click().clear().type('09784-045')
        cy.get('#billing_phone').click().clear().type('25484215')
        cy.get('#billing_email').click().clear().type('tahat@gmail.br')
        cy.get(':nth-child(2) > .button').click()
    });
  });
  
  