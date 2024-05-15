import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Seletor from "../../Seletor/seletor";

interface State {
    selectedOption: string | null;
    selectedGender: string | null;
}

export default class ListagemProduto extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedOption: null,
            selectedGender: null
        };
    }

    handleOptionChange = (selectedOption: string) => {
        this.setState({ selectedOption, selectedGender: null });
    };

    handleGenderChange = (selectedGender: string) => {
        this.setState({ selectedGender });
    };

    render() {
        const options = [ 
            { value: '1', label: 'Listagem de todos os produtos:' },
            { value: '2', label: 'Listar produtos mais consumidos por gênero' },
            { value: '3', label: 'Listagem dos produtos mais consumidos' },
            { value: '4', label: 'Listagem dos 5 clientes que mais consumiram produtos (em valor)' },
            { value: '5', label: 'Listagem dos 10 Clientes que mais consumiram produtos(quantidade)' }
        ];

        const { selectedOption, selectedGender } = this.state;

        let content = null;

        if (selectedOption === '1') {
            content = <div>Aqui vai a lista de todos os produtos...</div>;
        } 
        else if (selectedOption === '2') {
            const genderOptions = [
                { value: 'Masculino', label: 'Masculino' },
                { value: 'Feminino', label: 'Feminino' },
                { value: 'Outros', label: 'Outros' }
            ];
            content = (
                <div>
                    <Seletor options={genderOptions} onChange={this.handleGenderChange} />
                    {selectedGender && <div>Aqui vai a listagem dos produtos mais consumidos por gênero {selectedGender}...</div>}
                </div>
            );
        }
        else if( selectedOption === '3'){
            content = <div>Aqui vai a listagem dos produtos mais consumidos...</div>;
        }
        else if( selectedOption === '4'){
            content=<div>Aqui vai a dos 5 clientes que mais consumiram produtos em valor...</div>;
        }
        else if(selectedOption === '5'){
            content=<div>Aqui vai a dos 10 Clientes que mais consumiram produtos quantidade...</div>;

        }

        return(
            <div>
                <Seletor options={options} onChange={this.handleOptionChange} />
                {content}
            </div>
        );
    }
}