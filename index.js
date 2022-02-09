import { Cliente } from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1= new Cliente('Bruno','456.890.123-54');
const cliente2= new Cliente('janielly','986.123.546.01');
const contaCorrenteCliente1= new ContaCorrente(0, cliente1, 123, 43395);
const contaCorrenteCliente2= new ContaCorrente(0, cliente2, 123, 45678);

const contaPoupancaCliente1 = new ContaPoupanca(500, cliente1, 123);
const contaPoupancaCliente2 = new ContaPoupanca(1000, cliente2, 123);
//const conta = new Conta(100,cliente1,123);

console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente2);

console.log(contaPoupancaCliente1);
console.log(contaPoupancaCliente2);



