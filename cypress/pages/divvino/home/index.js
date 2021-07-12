/// <reference types="cypress"/>

//ações de interação com a pagina
const el = require('./elements').elementos
export class Home {

    static  acessarHome(){
        cy.visit("https://www.divvino.com.br/");
    }

    static selecionaVinhos(){
        cy.get(el.homeCategorias).eq(el.vinhos).click();
        
    }
    static deslizaTela(){
        cy.scrollTo("bottom", { duration: 4000 });
    }

    static barraPesquisar(texto){
        cy.get(el.barraPesquisa).type(texto);
        cy.get(el.iconePesquisar).click();
    }
   
 
    
}
