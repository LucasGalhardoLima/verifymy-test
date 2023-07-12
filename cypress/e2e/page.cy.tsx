/// <reference types="cypress" />

describe('Form', () => {
    it('should show required fields errors', () => {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:3000')
        cy.get('input[type="checkbox"]').check()
        cy.get('#desktop-submit-button').click()
        expect('#fullName-error').to.exist
        expect('#email-error').to.exist
        expect('#password-error').to.exist
        expect('#phoneNumber-error').to.exist
    })

    it('should show invalid email error', () => {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:3000')
        cy.get('input[name="fullName"]').type('John Doe')
        cy.get('input[name="password"]').type('123456789')
        cy.get('input[name="phoneNumber"]').type('1698134527')
        cy.get('input[name="email"]').type('email')
        cy.get('input[type="checkbox"]').check()
        cy.get('#desktop-submit-button').click()
        expect('#email-error').to.exist
    })

    it('should show invalid password error', () => {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:3000')
        cy.get('input[name="fullName"]').type('John Doe')
        cy.get('input[name="password"]').type('123')
        cy.get('input[name="phoneNumber"]').type('1698134527')
        cy.get('input[name="email"]').type('email@email.com')
        cy.get('input[type="checkbox"]').check()
        cy.get('#desktop-submit-button').click()
        expect('#password-error').to.exist
    })

    it('should show invalid phone number error', () => {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:3000')
        cy.get('input[name="fullName"]').type('John Doe')
        cy.get('input[name="password"]').type('123456789')
        cy.get('input[name="phoneNumber"]').type('123')
        cy.get('input[name="email"]').type('email@email.com')
        cy.get('input[type="checkbox"]').check()
        cy.get('#desktop-submit-button').click()
        expect('#phoneNumber-error').to.exist
    })

    it('should work as expected', () => {
        cy.viewport(1920, 1080)
        cy.visit('http://localhost:3000')
        cy.get('input[name="fullName"]').type('John Doe')
        cy.get('input[name="password"]').type('123456789')
        cy.get('input[name="phoneNumber"]').type('1698134527')
        cy.get('input[name="email"]').type('email@email.com')
        cy.get('input[type="checkbox"]').check()
        cy.get('#desktop-submit-button').click()
        cy.wait(1000)
        cy.url().should('include', '/success')
    })
})