const baseURL = 'http://localhost:3000/';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit(baseURL)
  })

  it('Should greet the user & describe app', () => {
    cy.get(".homepageTitle").should("contain", 'Welcome to');
    cy.get('.penPostImage').should('be.visible');
    cy.get(".paragraphText").should("be.visible");
  })

  it('Should have a login button', () => {
    cy.get(".loginButton").should('contain', 'Login');
  })

  it('Should be have a register button', () => {
    cy.get(".homepageParagraph").should('be.visible');
    cy.get(".registerButton").should("contain", "Register");
  })

  it("Should be able to click the login button", () => {
    cy.get(".loginButton").should("contain", "Login").click();
  });

})
