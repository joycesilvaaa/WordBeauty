import React, { Component, ReactNode } from "react";
import { Button } from "react-bootstrap";
import Seletor from "../../Seletor/seletor";
import './style.css'

interface State {
    selectedOption: string | null;
}

class FormularioVenda extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedOption: null,
        };
    }

    handleOptionChange = (selectedOption: string) => {
        this.setState({ selectedOption });
    }

    render(): ReactNode {
        const options = [
            { value: '1', label: 'Produto' },
            { value: '2', label: 'Serviço' }
        ];

        const { selectedOption } = this.state;
        const valor = selectedOption === '1' ? 'Produto' : 'Serviço';

        return (
            <div className="formVenda">
                <Seletor options={options} onChange={this.handleOptionChange} />
                <form className="">
                    <div className="formVenda">
                        <div className="input-field col s6">
                            <input id="cpfCliente" type="text" className="validate" name="cpfCliente" />
                            <label htmlFor="cpfCliente">CPF do Cliente</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="idProduto" type="text" className="validate" name="idProduto" />
                            <label htmlFor="idProduto">Id do {valor}</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="quantidade" type="text" className="validate" name="quantidade" />
                            <label htmlFor="quantidade">Quantidade Consumida</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <Button type="submit" variant="danger" name="action">Registrar</Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormularioVenda;
