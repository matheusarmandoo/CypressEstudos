/// <reference types="cypress"/>


//NAVEGAÇÃO E INTERAÇÕES
describe("tickets", () => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));
    
    it("fills all the text input fields", () => {
        const firstName = "Pròçímô";
        const lastName = "Fúlànô";
        
        cy.get("#first-name").type(firstName); //cy.get("ex") -> identifica elementos
        cy.get("#last-name").type(lastName); //.type(exemplo) -> digita em elementos de imput
        cy.get("#email").type("Pròçímô.Fúlâno@gmail.com"); //cy.get("ex").type(exemplo); -> identifique o elemento, e digite nele.
        cy.get("#requests").type("vegetarian");
        cy.get("#signature").type(`${firstName} ${lastName}`);
    });
    
    it("select two tickets", ()=>{
       cy.get("#ticket-quantity").select("2"); //.select("ex") seleciona dentro de select a opção ("ex") que deve ser uma string
    });

    it("select 'vip' ticket type", ()=>{
        cy.get("#vip").check(); //.check -> marca um elemento do tipo radiobuton
    });  

    it("select 'publication' and unselect social-media", ()=>{
        cy.get("#publication").check(); //.check -> marca um elemento do tipo checkbox
        cy.get("#social-media").check();
        cy.get("#social-media").uncheck();//.uncheck -> desmarca um elemento do tipo checkbox
    });    


    //VERIFICAÇÃO
    it("has 'TICKETBOX' header's heading", ()=>{
        cy.get("header h1").should("contain", "TICKETBOX"); // verificando se o elemento contem oque foi especificado na sentença
    });

    it("alert on invalid email", () =>{
        cy.get("#email")
        .as("email")
        .type("Pròçímô.Fúlâno-gmail.com");

        cy.get("#email.invalid").should("exist");// verifica se o elemento existe no DOM

        cy.get("@email")
        .clear()
        .type("Pròçímô.Fúlâno@gmail.com");

        cy.get("#email.invalid").should("not.exist");// verifica se o elemento não existe no DOM
    })

});