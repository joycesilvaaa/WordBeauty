import Entrada from "../../io/entrada";
import Produto from "../../modelo/servico-produto/produto";
import Cadastro from "../padrao/cadastro";

export default class CadastrarProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        const nomeProduto = this.entrada.receberTexto(`Digite o nome do produto que deseja cadastrar: `);
        const valorProduto = this.entrada.receberNumero(`Digite o valor do produto: R$`);
        const produto = new Produto(nomeProduto, valorProduto);
        this.produtos.push(produto);
        console.log(`Produto Cadastrado! :)`);
    }
}
