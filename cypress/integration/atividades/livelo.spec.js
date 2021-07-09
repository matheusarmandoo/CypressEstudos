/// <reference types="cypress"/>


//NAVEGAÇÃO E INTERAÇÕES
describe("livelo", () => {
    beforeEach(() => cy.visit("https://www.livelo.com.br/"));
    
    it("sleciona carrinho", () => {
        cy.get("#a-linkCart").click(); 
    });

    it("sleciona loguin", () => {
        cy.get("#span-logInIcon").click(); 
        cy.get("#btn-login").click(); 
    });
    
    it("sleciona registro", () => {
        cy.get("#span-logInIcon").click(); 
        cy.get("#btn-register").click(); 
    });

});    