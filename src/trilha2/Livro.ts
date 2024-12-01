class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    marcarComoLido(): void {
        if (!this.lido) {
            this.lido = true;
            console.log(`O livro "${this.titulo}" foi marcado como lido.`);
        } else {
            console.log(`O livro "${this.titulo}" já está marcado como lido.`);
        }
    }
}

// Exemplo de uso:
const livro = new Livro("1984", "George Orwell", 328);

console.log(livro.lido);
livro.marcarComoLido();  // O livro "1984" foi marcado como lido.
console.log(livro.lido); // true
livro.marcarComoLido();  // O livro "1984" já está marcado como lido.
