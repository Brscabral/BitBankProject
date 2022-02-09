//import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    
    constructor(saldo,cliente,agencia,conta){
        super(0 ,cliente, agencia, conta );
    }
    
    
}