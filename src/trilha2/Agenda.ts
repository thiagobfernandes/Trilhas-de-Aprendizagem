class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
    }

    listarCompromissos(): string[] {
        return this.compromissos;
    }
}

// exemplo de uso
const agenda = new Agenda();
agenda.adicionarCompromisso("reunião às 10h");
agenda.adicionarCompromisso("dentista às 15h");
console.log(agenda.listarCompromissos()); // ["