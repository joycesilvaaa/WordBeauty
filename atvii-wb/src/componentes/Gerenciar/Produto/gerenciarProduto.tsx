import React, { Component } from "react";
import Seletor from "../../Seletor/seletor";
import FormularioCadastroProduto from "../../Formulario/Produto/formularioCadastroProduto";
import FormularioBuscaProduto from "../../Formulario/Produto/formularioBuscaProduto";


interface GerenciarProdutoState {
    selectedOption: string | null;
}

class GerenciarProduto extends Component<{},GerenciarProdutoState> {
    constructor(props: {}) {
        super(props);
        this.state =  {selectedOption: null}       
    }

    handleOptionChange = (selectedOption: string) => {
        this.setState({ selectedOption });
    };

    render() {
        const options = [
            { value: '1', label: 'Cadastrar Produto'},
            { value: '2', label: 'Ver Produto'}
        ];

        const { selectedOption } = this.state;
        let content = null;

        if (selectedOption === '1') {
            content = <FormularioCadastroProduto/>;
        } 
        else if (selectedOption === '2') {
            content = <FormularioBuscaProduto/>
        } 
        return (
            <div className="div-seletor">
                <Seletor options={options} onChange={this.handleOptionChange}/>
                {content}
            </div>
        );
    }
}

export default GerenciarProduto;