/// <reference types="cypress"/>


//NAVEGAÇÃO E INTERAÇÕES
describe("Google", () => {
    beforeEach(() => cy.visit("https://www.google.com.br/"));

    it("pesquisa carros no google e vai até imagens", () => {
        cy.get(".gLFyf.gsfi").type("carros");
        cy.contains("Pesquisa Google").click()
    });


});      