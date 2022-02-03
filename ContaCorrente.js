export class ContaCorrente{
    cliente;
    conta;
    agencia;
    saldo;

    depositar(valor){
        if(valor <= 0){
           return console.log("procedimento invalido");
        }else{
           const valorDeposito = this.saldo+=valor;
            return valorDeposito;
        }
    }
     //agora, vamos criar o método "sacar"
     saque(valor){ 
        if(this.saldo < valor){
            return console.log(`Saldo insuficiente \n Saldo atual ${this.saldo}`);
        }else {
           this.saldo-=valor;
           return valor;
   
       }  
    }
    //vamos criar o método transferir
    transferir(valor, conta){
        const valorSacado=this.saque(valor);
        conta.depositar(valorSacado);

    }
    
}