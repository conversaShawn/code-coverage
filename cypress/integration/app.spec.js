/// <reference types="Cypress" />

describe('Example React App', () => {
    it('loads', () => {
        cy.visit("/")
        cy.contains('Learn React').should('be.visible')
    })
})