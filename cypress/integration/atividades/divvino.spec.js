/// <reference types="cypress"/>
//import Home from 'cypress\support\pages\divvino\Home\index.js'
import {Home} from '../../support/pages/divvino/home/index'

//NAVEGAÇÃO E INTERAÇÕES
describe("divvino", () => {
    
    
    it("sleciona uma das opções de categorias", () => {
        Home.acessarHome();
       Home.selecionaVinhos();
    });

    it("entrar em vinhos e selecionar primeiro produto", () => {
        Home.acessarHome();
        Home.selecionaVinhos();
        Home.deslizaTela();
        cy.get("#link-66524").click();
    });

    it.only("pesquisa na barra de busca ", () => {
        Home.acessarHome();
        Home.barraPesquisar("vinhos");
        
    });

    it("indo até o carrinho", () => {
        cy.get(".icon-cx_vinho").click();
    });
});      
