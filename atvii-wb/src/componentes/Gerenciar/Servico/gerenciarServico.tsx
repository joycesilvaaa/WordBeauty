import React, { Component } from "react";
import Seletor from "../../Seletor/seletor";
import FormularioCadastroServico from "../../Formulario/Servico/formularioCadastroServico";
import FormularioBuscaServico from "../../Formulario/Servico/formularioBuscaServico";


interface GerenciarServicoState {
    selectedOption: string | null;
}

class GerenciarServico extends Component<{},GerenciarServicoState> {
    constructor(props: {}) {
        super(props);
        this.state =  {selectedOption: null}       
    }

    handleOptionChange = (selectedOption: string) => {
        this.setState({ selectedOption });
    };

    render() {
        const options = [
            { value: '1', label: 'Cadastrar Serviço'},
            { value: '2', label: 'Ver Serviço'}
        ];

        const { selectedOption } = this.state;
        let content = null;

        if (selectedOption === '1') {
            content = <FormularioCadastroServico/>;
        } 
        else if (selectedOption === '2') {
            content = <FormularioBuscaServico/>
        } 
        return (
            <div className="div-seletor">
                <Seletor options={options} onChange={this.handleOptionChange}/>
                {content}
            </div>
        );
    }
}

export default GerenciarServico;