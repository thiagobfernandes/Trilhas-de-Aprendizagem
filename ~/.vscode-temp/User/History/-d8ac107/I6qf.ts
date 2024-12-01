interface Produtos {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produtos {
    constructor(public id: number, public nome: string, public preco: number) {}
}
