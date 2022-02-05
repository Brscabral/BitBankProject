import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    
    constructor(cliente,conta,agencia,saldo){
        this._cliente=cliente;
        this.conta=conta;
        this.agencia=agencia;
        this._saldo=saldo;
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
     //agora, vamos criar o método "sacar"
     saque(valor){ 
        if(this._saldo < valor){
            return console.log(`Saldo insuficiente \n Saldo atual ${this._saldo}`);
        }else {
           this._saldo-=valor;
           return valor;
   
       }  
    }
    //vamos criar o método transferir
    transferir(valor, conta){
        const valorSacado=this.saque(valor);
        conta.depositar(valorSacado);

    }
    
}