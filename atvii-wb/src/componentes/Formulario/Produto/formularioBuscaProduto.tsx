import React, { Component } from "react";
import ClienteView from "../../View/Cliente/clienteView";
import Button from 'react-bootstrap/Button';
import './style.css';
import IProduto from "../../View/Produto/Interface/produtoView";
import ProdutoView from "../../View/Produto/produtoView";

interface FormularioBuscaProdutoState {
  prod_id: string;
  produtoEncontrado: IProduto | null;
}

class FormularioBuscaProduto extends Component<{}, FormularioBuscaProdutoState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      prod_id: "",
      produtoEncontrado: null,
    };
  }

  handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ prod_id: event.target.value });
  };

  handleSearch = () => {
    const produtoEncontrado = this.simulateSearch(this.state.prod_id);
    this.setState({ produtoEncontrado });
  };

  simulateSearch = (prod_id: string): IProduto | null => {
    // Simulação da busca do Produto
    if (prod_id === "1") {
      return {
        prod_id: '1',
        nome: "Loção Facial",
        valor: "R$ 20.00"
      };
    }
    return null;
  };

  render() {
    const { produtoEncontrado } = this.state;
    return (
      <>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input
                  id="prod_id"
                  type="text"
                  className="validate"
                  value={this.state.prod_id}
                  onChange={this.handleIdChange}
                />
                <label htmlFor="prod_id">Digite o Código do Produto</label>
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
        {produtoEncontrado && <ProdutoView produto={produtoEncontrado} />}
      </>
    );
  }
}

export default FormularioBuscaProduto;
