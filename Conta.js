//Classe abstrata. A classe que foi feita apenas para ser herdada para outras classes
import { Cliente } from "./Cliente.js";
export class Conta{
    constructor(saldoInicial,cliente,agencia, conta){
        this._saldo=saldoInicial;
        this._cliente=cliente;
        this._agencia=agencia;
        this._conta=conta;
        console.log(this.constructor);
        if(this.constructor==Conta){
            throw new console.error("Você não deveria instanciar um objeto do tipo conta");
            //eu forcei um erro aqui caso alguem queira instanciar a classe Conta diretamente
        }
    }
    set cliente(novoValor){ //O assessor set serve para encapsular melhor um objeto privado
        if(novoValor instanceof Cliente){//esse condicional não permite que o um valor desconhecido seja atribuido ao objeto
            this._cliente=novoValor;
        }
        
    }
    get cliente(){// já o assessor get retorna o valor do cliente. Não podemos manipular as informações.
        return this._cliente;
    }
    get saldo(){
        return this._saldo;
    }
   
    depositar(valor){
        if(valor <= 0){
           return console.log("procedimento invalido");
        }else{
           const valorDeposito = this._saldo+=valor;
            return valorDeposito;
        }
    }
     saque(valor){ 
        if(this._saldo < valor){
            return console.log(`Saldo insuficiente \n Saldo atual ${this._saldo}`);
        }else {
           this._saldo-=valor;
           return valor;
   
       }  
    }
    transferir(valor, conta){
        const valorSacado=this.saque(valor);
        conta.depositar(valorSacado);

    }
}