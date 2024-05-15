import React, { Component } from "react";
import Seletor from "../../Seletor/seletor";
import FormularioCadastroCliente from "../../Formulario/Cliente/formularioCadastroCliente";
import FormularioBuscaCliente from "../../Formulario/Cliente/formularioBuscaCliente";


interface GerenciarClienteState {
    selectedOption: string | null;
}

class GerenciarCliente extends Component<{},GerenciarClienteState> {
    constructor(props: {}) {
        super(props);
        this.state =  {selectedOption: null}       
    }

    handleOptionChange = (selectedOption: string) => {
        this.setState({ selectedOption });
    };

    render() {
        const options = [
            { value: '1', label: 'Cadastrar Cliente'},
            { value: '2', label: 'Ver Cliente'}
        ];

        const { selectedOption } = this.state;
        let content = null;

        if (selectedOption === '1') {
            content = <FormularioCadastroCliente/>;
        } 
        else if (selectedOption === '2') {
            content = <FormularioBuscaCliente/>
        } 
        return (
            <div className="div-seletor">
                <Seletor options={options} onChange={this.handleOptionChange}/>
                {content}
            </div>
        );
    }
}

export default GerenciarCliente;
