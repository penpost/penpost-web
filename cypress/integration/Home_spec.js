const baseURL = "http://localhost:3000/#/";

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should greet the user & describe app', () => {
    cy.get('.homepageTitle').should('contain', 'Welcome to');
    cy.get('.penPostImage').should('be.visible');
    cy.get('.paragraphText').should('be.visible');
  })

  it('Should have a login button', () => {
    cy.get('.loginButton').should('contain', 'Login');
  })

  it('Should be able to click the login button', () => {
    cy.get('.loginButton').should('contain', 'Login').click();
  });
})

describe('Navbar', () => {
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should have a logo of Penpost in the header', () => {
    cy.get('.headerTitle').should('contain', 'PenPost')
  })

  it('Should have a hamburger menu', () => {
    cy.get('.hamburger-react').should('be.visible');
  })

  it('Should be able to click on the hamburger menu and the menu will open', () => {
    cy.get('.hamburger-react').click()
  });

  it('Should display two options in the hamburger menu if you are logged out', () => {
    cy.get('.hamburger-react').click()
    cy.get('.menu').should('contain', 'Home', 'Login')
  });
})
