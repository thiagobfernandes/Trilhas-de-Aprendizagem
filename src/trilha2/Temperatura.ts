
class Temperatura {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    paraFahrenheit(): number {
        return this.valor * 9/5 + 32;
    }

    paraKelvin(): number {
        return this.valor + 273.15;
    }
}

// exemplo de uso
const temp = new Temperatura(25);
console.log(temp.paraFahrenheit()); // 77
console.log(temp.paraKelvin());     // 298.15
