Feature: Exemplos simples

    Background: Iniciar na página de exemplos   
        Given que esteja na pagina home
        And que esteja logado

    Scenario: pesquisar e escolher vinho
     When pesquisar por "vinhos" 
     And selecionar o primeiro listado

    Scenario: Adicionar produtos ao carrinho
        When adicionar produtos ao carrinho 
        Then a quantidade de itens no carrinho deve aumentar
        And os produtos devem ser adicionados ao carrinho