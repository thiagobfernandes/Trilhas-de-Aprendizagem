class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorEstoque(): number {
        return this.preco * this.quantidade;
    }
}

// exemplo de uso
const produto = new Produto("caneta", 2.5, 100);
console.log(produto.calcularValorEstoque()); // 250
