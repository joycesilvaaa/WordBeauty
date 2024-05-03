import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico-produto/servico";
import Cadastro from "../padrao/cadastro";

export default class CadastroServico extends Cadastro {
  private servicos: Array<Servico>;
  private entrada: Entrada;
  constructor(servico: Array<Servico>) {
    super();
    this.servicos = servico;
    this.entrada = new Entrada();
  }
  public cadastrar(): void {
    const nomeSevico = this.entrada.receberTexto(`Digite o nome do serviço que deseja cadastrar: `);
    const descricaoServico = this.entrada.receberTexto(`Faça uma breve descrição do produto: `);
    const valorServico = this.entrada.receberNumero(`Digite o valor do serviço a ser cadastrado: `);
    const servico = new Servico(nomeSevico, descricaoServico, valorServico);
    this.servicos.push(servico);
  }
}
