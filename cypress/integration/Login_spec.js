const baseURL = 'http://localhost:3000/';

describe('Logging In', () => {
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should greet the user & describe app', () => {
    cy.get('main h1').contains('welcome')
    cy.get('main p').should('be.visible')
  })

  it('Should have a logged out version of ', () => {

  })

  it('Should have login option', () => {

  })

  it('Should have an error message if birds can\'t be loaded', () => {
    cy.fixture('birds.json')
      .then(() => {
        cy.intercept('https://api.ebird.org/v2/data/obs/US-CO/recent?maxResults=30&key=jcsp15jhp6hi', {
          statusCode: 400
        })
      })
    cy.visit(baseURL);
    cy.get('section article').contains('Whoops!')
  })
})
