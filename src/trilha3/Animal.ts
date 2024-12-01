abstract class Animal {
    protected energia: number = 100;

    comer(): void {
        this.energia += 20;
    }

    abstract realizarAtividade(): void;

    statusEnergia(): void {
        console.log(`Energia: ${this.energia}`);
    }
}

class Leao extends Animal {
    realizarAtividade(): void {
        console.log("Leão caçando...");
        this.energia -= 30;
        this.comer();
    }
}

class Passaro extends Animal {
    realizarAtividade(): void {
        console.log("Pássaro se alimentando...");
        this.comer();
    }
}

function realizarAtividadeAnimal(animal: Animal): void {
    animal.realizarAtividade();
    animal.statusEnergia();
}

const leao = new Leao();
const passaro = new Passaro();

realizarAtividadeAnimal(leao);
realizarAtividadeAnimal(passaro);
