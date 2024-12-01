abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}

    abstract calcularBonus(): number;

    calcularSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }

    getNome(): string {
        return this.nome;
    }

    getSalario(): number {
        return this.salario;
    }
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const salarioFinal = funcionario.calcularSalarioComBonus();
        console.log(`${funcionario.getNome()} - Salário final: R$ ${salarioFinal.toFixed(2)}`);
    });
}

const gerente = new Gerente("Carlos", 5000);
const operario = new Operario("Maria", 3000);

calcularSalarioComBonus([gerente, operario]);
