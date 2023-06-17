function roda_teto(){
    console.log("****************************************************************¨\n");
    console.log("*                                                              * \n");
    console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨SEJA BEM-VINDO À LOCADORA START!¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨ \n");
    console.log("*                                                              * \n");
    console.log("**************************************************************** \n");
    console.log("*                        PARABÉNS!                             * \n");
    console.log("*              VOCÊ É NOSSO CLIENTE PREMIADO                   * \n");
    console.log("*                    ESTAMOS EM SALDÃO!                        * \n");
    console.log("****************************************************************¨\n");
  };
  
  function login_senha(){
    
      var has_account = prompt("Você já possui uma conta? [S/N] ").toUpperCase();
    console.clear();
    
    if (has_account === "S"){
      // Caso o usuário já tenha a conta, vamos prosseguir com a auth
      console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\n");
      console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨FAÇA LOGIN¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\n");
      var login = prompt("Digite seu usuário: ");
      var password = prompt("Digite sua senha: ")
      console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\n")
      console.log("¨¨¨¨¨¨DISPONIVEL PARA NAVEGAÇÃO NO SITE!¨¨¨¨¨¨¨¨¨¨¨¨\n")
      
      // Se o processo de autenticação ocorrer tudo bem, saimos da func
      return 1;
    }else if(has_account === "N"){
      console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\n")
      console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨CADASTRE-SE¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\n")
          var login = prompt("Digite seu login(isso será usado para autenticar)");
      var email = prompt("Digite seu email");
          var password = prompt("Digite sua senha");
      var confirma_senha = prompt("digite novamente sua senha");
      console.log("¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨\n");
      console.log("¨¨¨¨¨¨¨¨SUA CONTA FOI CRIADA COM SUCESSO!¨¨¨¨¨¨¨¨¨¨\n");
    }
  }

  function tela_menu(){
  // Valor dos produtos;	
    var um = 20.00;
    var dois = 15.50;
    var tres = 20.00;
    var quatro = 25.00;
    var cinco = 10.00;
    var seis =  18.00;
    var sete =  16.00;
    var oito =  20.00;
    
    console.log("**************************************************************** \n");
    console.log("*      ESSAS SÃO AS OPÇÕES DE FILMES QUE VOCÊ PODE ALUGAR:     * \n");
    console.log("**************************************************************** \n");
    console.log("* CÓDIGO DO PRODUTO      NOME DO FILME              PREÇO R$   * \n");
    console.log("* [1]	                    Avatar 2                 R$20,00    * \n");
    console.log("* [2]                Jurassic World: Domínio        R$15,50    * \n");
    console.log("* [3]	                 Hallowen ends               R$20,00    * \n");
    console.log("* [4]	           Os Fantasmas Se Divertem          R$25,00    * \n");
    console.log("* [5]                   Anjos da noite              R$10,00    * \n");
    console.log("* [6]                  Piratas do caribe            R$18,00    * \n");
    console.log("* [7]                      Blade 3                  R$16,00    * \n");
    console.log("* [8]                       Ouija                   R$20,00    * \n");
    console.log("* [0]                 PARA ENCERRAR A COMPRA                   * \n");
    console.log("**************************************************************** \n");
      
      var choice = prompt("digite o código do filme");
   
    switch(choice){
      case "1":
        console.log("Avatar 2", um);
        return um;   
        
      case "2":
        console.log("Jurassic World: Domínio", dois);
        return dois;
      case "3":
        console.log("Hallowen ends", tres);
        return tres;
      case "4":
        console.log("Os Fantasmas Se Divertem", quatro);
        return quatro;
      case "5":
        console.log("Anjos da noite", cinco);
        return cinco;
        
      case "6":
        console.log("Piratas do caribe", seis);
        return seis;
        
      case "7":
        console.log("Blade 3", sete);
        return sete;
        
      case "8":
        console.log("Ouija", oito);
        return oito;
        
      case "0":
        return 0;
        
      default:
        console.log("Opção inválida! Tente novamente");
        return tela_menu();
      }
    } 
  
  function check_if_exit(){
    var exit = prompt(`Deseja finalizar a compra? [S/N] (Carrinho: R$ ${total})`).toUpperCase();
    if (exit === "S"){
      return true;
    }
    return false;
  }
  
  function checkout(){
    console.clear();
    console.log("----------------------------------------------------------------\n");
    console.log("         O total da sua compra anterior foi = R$ ", total, "\n");
    console.log("                          VOLTE SEMPRE!                     \n");
    console.log("----------------------------------------------------------------\n");
  }
  
  function main(){
    var value_to_sum = tela_menu();
    total = total + value_to_sum;
    
    if (check_if_exit()){
      checkout();
      return true
    }
    main();
  }
  
  var total = 0;
  
  roda_teto();
  login_senha();
  console.clear();
  main();