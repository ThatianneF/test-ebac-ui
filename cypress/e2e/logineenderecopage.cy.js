describe('Fazer login', () => {

    beforeEach(() => {
        cy.visit ('/minha-conta/')
      
    });
  
    it('Deve preencher os campos de login', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
    });

    it('Deve exibir uma mensagem de erro ao inserir usuario inválido', () => {
        cy.get('#username').type('gtyfdjg@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('xxxxxx')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', ': A senha fornecida para o e-mail ')
    });

    it('Atualizar endereço', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
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
  
  