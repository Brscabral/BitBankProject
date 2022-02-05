import { Cliente } from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
const cliente1= new Cliente('Bruno','456.890.123-54');
const cliente2= new Cliente('janielly','986.123.546.01');
const contaCorrenteCliente1= new ContaCorrente(cliente1,43395,123,150);
contaCorrenteCliente1.cliente=cliente1
const contaCorrenteCliente2= new ContaCorrente(cliente2,45678,123,100);
contaCorrenteCliente2.cliente=cliente2

const contaPoupancaCliente1 = new ContaPoupanca(500, cliente1, 123);
const contaPoupancaCliente2 = new ContaPoupanca(1000, cliente2, 123);

console.log(contaCorrenteCliente1);
//console.log(contaCorrenteCliente2);

console.log(contaPoupancaCliente1);
//console.log(contaPoupancaCliente2);