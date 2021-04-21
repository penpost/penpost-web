const baseURL = 'http://localhost:3000';
const liveURL = 'https://penpost-web.vercel.app'

describe('Login', () => {
  beforeEach(() => {
    cy.visit(`${baseURL}/login` || `${liveURL}/login`)
    cy.get('input[name=email]')
      .type('mary@example.com')
    cy.get('input[name=password]')
      .type('pw1234')
    cy.get('.loggedInButton').click();
    cy.wait(5000)
  });



})
