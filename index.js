import { Cliente } from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";
const cliente1= new Cliente();
const cliente2= new Cliente();
const contaCorrenteCliente1= new ContaCorrente();
contaCorrenteCliente1.cliente=cliente1
const contaCorrenteCliente2= new ContaCorrente();
contaCorrenteCliente2.cliente=cliente2

cliente1.nome='Bruno';
cliente1.cpf= '456.890.123-54';

cliente2.nome='janielly';
cliente2.cpf='986.123.546.01';

contaCorrenteCliente1.conta=43395;
contaCorrenteCliente1.agencia=123;
contaCorrenteCliente1.saldo=150.00;
contaCorrenteCliente1.depositar(500);


contaCorrenteCliente2.conta=45678;
contaCorrenteCliente2.agencia=123;
contaCorrenteCliente2.saldo=100.00;

contaCorrenteCliente1.transferir(300, contaCorrenteCliente2);


console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente2);