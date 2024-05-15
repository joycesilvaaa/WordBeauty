import React, { Component } from "react";
import ClienteView from "../../View/Cliente/clienteView";
import Button from 'react-bootstrap/Button';
import './style.css';
import IServico from "../../View/Servico/Interface/servicoView";
import ServicoView from "../../View/Servico/servicoView";

interface FormularioBuscaServicoState {
  serv_id: string;
  servicoEncontrado: IServico | null;
}

class FormularioBuscaServico extends Component<{}, FormularioBuscaServicoState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      serv_id: "",
      servicoEncontrado: null,
    };
  }

  handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ serv_id: event.target.value });
  };

  handleSearch = () => {
    const servicoEncontrado = this.simulateSearch(this.state.serv_id);
    this.setState({ servicoEncontrado });
  };

  simulateSearch = (serv_id: string): IServico | null => {
    // Simulação da busca do Serviço
    if (serv_id === "1") {
      return {
        serv_id: '1',
        nome: "Design de Sobrancelha",
        valor: "R$ 20.00"
      };
    }
    return null;
  };

  render() {
    const { servicoEncontrado } = this.state;
    return (
      <>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="serv_id"
                  type="text"
                  className="validate"
                  value={this.state.serv_id}
                  onChange={this.handleIdChange}
                />
                <label htmlFor="serv_id">Digite o Código do Serviço</label>
              </div>
            </div>
            <div className="col s12">
              <Button type="button" variant="danger" onClick={this.handleSearch} name="action">
                Buscar
                <i className="material-icons right">send</i>
              </Button>
            </div>
          </form>
        </div>
        {servicoEncontrado && <ServicoView servico={servicoEncontrado} />}
      </>
    );
  }
}

export default FormularioBuscaServico;
