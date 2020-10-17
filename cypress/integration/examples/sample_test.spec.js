/// <reference types="Cypress" />

describe('Ebay Tests', () => {
    
    beforeEach(() => {
        cy.visit('https://www.ebay.com/')
    })
    
    it('Open ebay.com and Search iphones', () => {
        cy.get('#gh-ac').type('iPhone')
        cy.get('#gh-ac').should('have.value', 'iPhone')
    });

    it('Verify ebay logo in the Home page', () =>{
        cy.get('#gh-logo').should('be.visible', true)
    })

    it('Select a cart and verify the message', () => {
        cy.get('.gh-cart-icon > use').click({force: true})
        cy.get('.start-shop').should('not.be.disabled', true)
    });
});