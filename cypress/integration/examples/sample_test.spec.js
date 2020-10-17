describe('First Test', () => {
    it('Open ebay and search iphones', () => {
        cy.visit('https://www.ebay.com/')
        cy.get('#gh-ac').type('iPhone')
        cy.get('#gh-ac').should('have.value', 'iPhone')
    });
});