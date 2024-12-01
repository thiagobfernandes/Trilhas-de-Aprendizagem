abstract class Pagamento {
    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string, private valor: number) {
        super();
    }

    private validarNumeroCartao(): boolean {
        return this.numeroCartao.length === 16 && !isNaN(Number(this.numeroCartao));
    }

    processar(): void {
        if (this.validarNumeroCartao()) {
            console.log(`Pagamento de R$ ${this.valor.toFixed(2)} processado com sucesso no cartão ${this.numeroCartao}.`);
        } else {
            console.log("Número do cartão inválido.");
        }
    }
}

class PagamentoBoleto extends Pagamento {
    constructor(private valor: number) {
        super();
    }

    private gerarCodigoBoleto(): string {
        return Math.random().toString(36).substring(2, 15).toUpperCase();
    }

    processar(): void {
        const codigoBoleto = this.gerarCodigoBoleto();
        console.log(`Boleto gerado no valor de R$ ${this.valor.toFixed(2)}. Código do boleto: ${codigoBoleto}`);
    }
}

function processarPagamento(pagamento: Pagamento): void {
    pagamento.processar();
}

const pagamentoCartao = new PagamentoCartao("1234567812345678", 150.75);
const pagamentoBoleto = new PagamentoBoleto(200.50);

processarPagamento(pagamentoCartao);
processarPagamento(pagamentoBoleto);
