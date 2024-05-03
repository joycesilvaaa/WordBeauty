import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente/cliente"
import Deletar from "../padrao/deletar"

export default class DeletarCliente extends Deletar {
  private clientes: Array<Cliente>

  private entrada: Entrada
  constructor(clientes: Array<Cliente>) {
    super()
    this.clientes = clientes
    this.entrada = new Entrada()
  }
  public deletar(): void {
    let encontrarCliente = false
    while (encontrarCliente === false) {
      // recebe o cpf do cliente que vai ser apagado
      let cpfCliente = this.entrada.receberTexto("Digite o CPF do cliente que deseja DELETAR: ")
      // index que o cliente se encontra
      let clienteIndex = this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpfCliente)

      if (clienteIndex) {
        let opcaoEscolhida = 0
        while (opcaoEscolhida < 1 || opcaoEscolhida > 2) {
          console.log(`Cliente encontrado :)`)
          console.log(`Tem certeza que deseja DELETAR o cliente ${this.clientes[clienteIndex].nome}? `)
          console.log(`1 - Sim`)
          console.log(`2 - Não`)
          opcaoEscolhida = this.entrada.receberNumero(`Digite a opção escolhida`)
          if (opcaoEscolhida === 1) {
            this.clientes.splice(clienteIndex, 1)
            console.log(`Cliente excluido com sucesso :)`)
            break
          } else if (opcaoEscolhida === 2) {
            console.log(`O pedido para exclusão de cliente foi cancelado!`)
            break
          } else {
            console.log(
              `Opção inválida! Selecione uma das opções disponiveis.`
            )
          }
          encontrarCliente = true
        }
      }
    }
  }
}
