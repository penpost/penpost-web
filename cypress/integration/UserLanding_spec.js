const baseURL = "http://localhost:3000/";

describe('Login', () => {
  beforeEach(() => {
    cy.visit(`${baseURL}login`)
    cy.get('input[name=email]')
      .type('mary@example.com')
    cy.get('input[name=password]')
      .type('pw1234')
    cy.get('.loggedInButton').click();
    cy.wait(5000)
  });

  it.only('Should display a login message', () => {
    cy.get('.landing-title').should('contain', 'Welcome Mary Berry');
  });

  it('Should display a profile area', () => {
    cy.get('h2').should('contain', 'Profile Info');
    cy.get('.address').should('be.visible')
    cy.get('.about').first().should('be.visible')
  });

  it('Should allow you to edit your profile', () => {
      cy.get('.edit-button').should('contain', 'Edit').click();
      cy.get('.about').type('I want to be your friend')
      cy.get('input[type=submit]').click()
      cy.get('.about').should('contain', 'I want to be your friend')
  })

  it('Should display your connection', () => {
    cy.get('.info-wrapper h2').should('contain', 'Connection');
    cy.get('.connection-name').should('be.visible')
    cy.get('.info-wrapper .about').should('be.visible')
  });

  it('Should be able to go to postcard creator', () => {
    cy.get('.info-wrapper button').should('contain', 'Send Postcard').click()
    cy.url().should('eq', 'http://localhost:3000/create-postcard')
  });
})
