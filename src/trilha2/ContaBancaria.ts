class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldoInicial: number) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso. Saldo restante: R$${this.saldo}`);
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }
}

// Exemplo de uso:
const conta = new ContaBancaria("João Silva", 1000);

conta.depositar(500); // Depósito de R$500 realizado com sucesso. Novo saldo: R$1500
conta.sacar(200);     // Saque de R$200 realizado com sucesso. Saldo restante: R$1300
conta.sacar(2000);    // Saldo insuficiente para realizar o saque.
