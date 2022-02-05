export class ContaPoupanca{
    constructor(saldoInicial,cliente,agencia){
        this._saldo=saldoInicial;
        this._cliente=cliente;
        this._agencia=agencia;
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