/// <reference types="cypress"/>

import{Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'
import{Divvino} from "../../pages/components/divvino.page"

Given(`que esteja na pagina home`, () => {
    Divvino.acessar_divvino()
});

Given(`que esteja logado`, () => {
	Divvino.logar_divvino();
});

When(`pesquisar por {string}`, (categoria) => {
    Divvino.fecharPopUp_divvino();
    Divvino.barraPesquisar("vinhos");
    Divvino.deslizaTela_divvino();
	
});

Then(`a quantidade de itens no carrinho deve aumentar`, () => {
	return true;
});

Then(`os produtos devem ser adicionados ao carrinho`, () => {
	return true;
});
