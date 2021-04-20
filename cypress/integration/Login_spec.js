const baseURL = "http://localhost:3000";

describe("Login", () => {
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

  it.only("Should be able to click the login button after filling out the input fields", () => {
    cy.intercept('/graphql', (req) => {
      req.alias = 'login'
        if (req.body.hasOwnProperty('query') && req.body.hasOwnProperty('variables')) {
          console.log(req)
          req.reply({ fixture: 'signin.json'});
        }
      });


    cy.get("input[name=email]")
      .type("kelsie@yahoo.com")
      .should("have.value", "kelsie@yahoo.com");
    cy.get("input[name=password]")
      .type("kelsie123")
      .should("have.value", "kelsie123");
    cy.get(".loggedInButton").click();
//on Click we checkLogin, if password & email is long enough then login set to true or false and fire mutation(request: username & password) (response: user's id, which is set in localStorage)

// linked to UserLanding Page...so yeah, I think we need another intercept that fills the data of the user? for the user.json fixture?

    cy.wait('@login')
  });
})
