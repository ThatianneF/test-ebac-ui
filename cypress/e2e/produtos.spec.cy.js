describe('Funcionalidade da página de produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
      .eq(5)
      .click()

  });

  it.only('Deve selecionar um produto ao carrinho', () => {
    cy.get('[class="product-block grid"]')
      .eq(5).click()
      cy.get('.button-variable-item-33').click()
      cy.get('.button-variable-item-Red').click()
      cy.get('.input-text').click()
      cy.get('.single_add_to_cart_button').click()
    });
  });
