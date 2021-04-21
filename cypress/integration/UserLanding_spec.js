const baseURL = 'http://localhost:3000';
const liveURL = 'https://penpost-web.vercel.app'

describe('Login', () => {
  beforeEach(() => {
    cy.visit(`${baseURL}/user-landing` || `${liveURL}/login`);
  });

  it('Should display a login message', () => {
    cy.get('.landing-title').should('contain', 'Welcome');
  });

  it('Should display a profile area', () => {
    cy.get('h2').should('contain', 'Profile Info');
    cy.get('.address').should('be.visible')
    cy.get('.about').first().should('be.visible')
  });

  it('Should allow you to edit your profile', () => {
      cy.get('.edit-button').should('contain', 'Edit').click();
      cy.get('.country')
  })
})
