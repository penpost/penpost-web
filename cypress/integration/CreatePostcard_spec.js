const baseURL = 'http://localhost:3000/';

describe('Login', () => {
  beforeEach(() => {
    cy.visit(`${baseURL}login`)
    cy.get('input[name=email]')
      .type('mary@example.com')
    cy.get('input[name=password]')
      .type('pw1234')
    cy.get('.loggedInButton').click();
    cy.visit(`${baseURL}create-postcard`)
  });

  it('Should be able to enter in an image', () => {
    cy.get('.image').type('https://www.allaboutbirds.org/guide/assets/photo/297684081-1280px.jpg')
    cy.get('.image-thumbnail img').should('have.attr', 'src', 'https://www.allaboutbirds.org/guide/assets/photo/297684081-1280px.jpg')
  });

  it('Should be able to enter in a message', () => {
    cy.get('textarea').type('I like birds')
  })

  it('Should be able to Preview Postcard', () => {
    cy.get('.image').type('https://www.allaboutbirds.org/guide/assets/photo/297684081-1280px.jpg')
    cy.get('textarea').type('I like birds')
    cy.get('input[type=text]').click()
  })


})
