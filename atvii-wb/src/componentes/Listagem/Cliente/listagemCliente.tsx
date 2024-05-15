import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Seletor from "../../Seletor/seletor";

interface State {
    selectedOption: string | null;
    selectedGender: string | null;
}

export default class ListagemCliente extends Component<{}, State> {
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
            { value: '1', label: 'Listar todos os clientes' },
            { value: '2', label: 'Listar por Gênero' }
        ];

        const { selectedOption, selectedGender } = this.state;

        let content = null;

        if (selectedOption === '1') {
            content = <div>Aqui vai a lista de todos os clientes...</div>;
        } else if (selectedOption === '2') {
            const genderOptions = [
                { value: 'Masculino', label: 'Masculino' },
                { value: 'Feminino', label: 'Feminino' },
                { value: 'Outros', label: 'Outros' }
            ];
            content = (
                <div>
                    <Seletor options={genderOptions} onChange={this.handleGenderChange} />
                    {selectedGender && <div>Aqui vai a lista de clientes do gênero {selectedGender}...</div>}
                </div>
            );
        }

        return(
            <div>
                <Seletor options={options} onChange={this.handleOptionChange} />
                {content}
            </div>
        );
    }
}
