import React, { Component } from "react";
import ClienteView from "../../View/Cliente/clienteView";
import Button from 'react-bootstrap/Button';
import ICliente from "../../View/Cliente/Interface/clienteView";
import './style.css';

interface FormularioBuscaClienteState {
  cpf: string;
  clienteEncontrado: ICliente | null;
}

class FormularioBuscaCliente extends Component<{}, FormularioBuscaClienteState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cpf: "",
      clienteEncontrado: null,
    };
  }

  handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ cpf: event.target.value });
  };

  handleSearch = () => {
    const clienteEncontrado = this.simulateSearch(this.state.cpf);
    this.setState({ clienteEncontrado });
  };

  simulateSearch = (cpf: string): ICliente | null => {
    // Simulação da busca do cliente
    if (cpf === "12345678900") {
      return {
        nome: "João da Silva",
        cpf: "12345678900",
        rg: "1234567", // Exemplo de RG
        tel: "123456789", // Exemplo de telefone
        genero: "Masculino", // Exemplo de gênero
      };
    }
    return null;
  };

  render() {
    const { clienteEncontrado } = this.state;
    return (
      <>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="cpf"
                  type="text"
                  className="validate"
                  value={this.state.cpf}
                  onChange={this.handleCPFChange}
                />
                <label htmlFor="cpf">Digite o CPF do Cliente</label>
              </div>
            </div>
            <div className="col s12">
              <Button type="button" variant="danger" onClick={this.handleSearch} name="action">
                Submit
                <i className="material-icons right">send</i>
              </Button>
            </div>
          </form>
        </div>
        {clienteEncontrado && <ClienteView cliente={clienteEncontrado} />}
      </>
    );
  }
}

export default FormularioBuscaCliente;
