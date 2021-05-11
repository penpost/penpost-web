const baseURL = 'http://localhost:3000';

describe('Login', () => {
  beforeEach(() => {
    cy.visit(`${baseURL}/login`);
  });

  it('Should display a login message', () => {
    cy.get('.loginTitle').should('contain', 'Login');
  });

  it('Should display an error if fields do no meet length requirements', () => {
    cy.get('input[name=email]').type('mary')
    cy.get('input[name=password]').type('pw')
    cy.get('.loggedInButton').click()
    cy.get('.invalidLoginText').should('be.visible')
  });

  it('Should have be able to fill out the email address and password input', () => {
    cy.get('input[name=email]').type('mary@example.com').should('have.value', 'mary@example.com')
    cy.get('input[name=password]')
      .type('pw1234')
      .should('have.value', 'pw1234');
  });

  it('Should be able to click the login button after filling out the input fields', () => {
    cy.get('input[name=email]')
      .type('mary@example.com')
    cy.get('input[name=password]')
      .type('pw1234')
    cy.get('.loggedInButton').click();
  });
})
