class Cliente{
    nome;
    cpf;
    
}
class ContaCorrente{
    conta;
    agencia;
    saldo;

     //agora, vamos criar o método "sacar"
     saque(valor){ //escopo do método
        if(this.saldo < valor){
            return console.log(`Saldo insuficiente \n Saldo atual ${this.saldo}`);
        }else {
            this.saldo-=valor;
           return console.log(`saldo efetuado com sucesso> \n Valor sacado:${valor}\n Saldo atual: ${this.saldo}`);
   
       }
        
    }
}

//definimos a classe Cliente

const cliente1= new Cliente();
const cliente2= new Cliente();
const contaCorrenteCliente1= new ContaCorrente();
const contaCorrenteCliente2= new ContaCorrente();

contaCorrenteCliente1.conta=43395;
contaCorrenteCliente1.agencia=123;
contaCorrenteCliente1.saldo=150.00;
contaCorrenteCliente1.saque(50);

contaCorrenteCliente2.conta=45678;
contaCorrenteCliente2.agencia=123;
contaCorrenteCliente2.saldo=100.00;
contaCorrenteCliente2.saque(30);


cliente1.nome='Bruno';
cliente1.cpf= '456.890.123-54';


cliente2.nome='janielly';
cliente2.cpf='986.123.546.01';



console.log(cliente1, contaCorrenteCliente1);
console.log(cliente2, contaCorrenteCliente2);