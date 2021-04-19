const baseURL = "http://localhost:3000";

describe.only("Login", () => {
  beforeEach(() => {
    cy.visit(`${baseURL}/login`);
  });

  it("Should display a login message", () => {
    cy.get(".loginTitle").should("contain", "Login");
  });

  it("Should have be able to fill out the email address and password input", () => {
    cy.get("input[name=email]").type('kelsie@yahoo.com').should('have.value', 'kelsie@yahoo.com')
    cy.get("input[name=password]")
      .type("kelsie123")
      .should("have.value", "kelsie123");
  });

  it("Should be able to click login after filling out the input fields", () => {
    cy.get("input[name=email]")
      .type("kelsie@yahoo.com")
      .should("have.value", "kelsie@yahoo.com");
    cy.get("input[name=password]")
      .type("kelsie123")
      .should("have.value", "kelsie123");
    cy.get(".loggedInButton").click();
  });

//   it("Should be have a register button", () => {
//     cy.get(".homepageParagraph").should("be.visible");
//     cy.get(".registerButton").should("contain", "Register");
//   });

//   it("Should be able to click the login button", () => {
//     cy.get(".loginButton").should("contain", "Login").click();
//   });
// });
})