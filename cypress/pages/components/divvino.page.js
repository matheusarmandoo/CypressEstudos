import Base from "./_base.page"
import {elementosDivvino as elDiv} from "./divvino.elements"

export class Divvino extends Base {

    static  acessar_divvino(){

        cy.visit('/');

    }
    static  logar_divvino(){
        cy.get(elDiv.Login_Page).click();
        super.typeValue(elDiv.IMP_USER, "matheus.armando.acc@gmail.com")
        super.typeValue(elDiv.IMP_PASSWORD, "88667514mM")
        super.clickOnElement(elDiv.BTN_LOGIN)
    }

    static deslizaTela_divvino(){
        cy.scrollTo("bottom", { duration: 4000 });
    }

    static fecharPopUp_divvino(){
        cy.wait(60000)
        super.clickOnElement(elDiv.BTN_CLOSE);
      
    }
    static pesquisa_divvino(){
        super.typeValue(elDiv.IMP_PESQUISAR).type(texto);
        super.clickOnElement(elDiv.BTN_PESQUISAR);
        

    }

}