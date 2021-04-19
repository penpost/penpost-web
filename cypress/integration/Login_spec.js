const baseURL = 'http://localhost:3000/';

describe('Logging In', () => {
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should greet the user & describe app', () => {
    cy.get('main h1').contains('welcome')
    cy.get('main p').should('be.visible')
  })

  it('Should have a logged out version of nav bar & home', () => {

  })

  it('Should be able to login page and log in', () => {

  })

})
