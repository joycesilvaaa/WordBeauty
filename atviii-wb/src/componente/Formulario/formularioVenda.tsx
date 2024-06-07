import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Seletor from "../Seletor/seletor";
import './style.css'

function FormularioVenda() {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (selectedOption: string) => {
        setSelectedOption(selectedOption);
    };

    const options = [
        { value: '1', label: 'Produto' },
        { value: '2', label: 'Serviço' }
    ];

    const valor = selectedOption === '1' ? 'Produto' : 'Serviço';

    // Renderizar o formulário apenas se uma opção estiver selecionada
    return (
        <div className="formVenda">
            <Seletor opcoes={options} onChange={handleOptionChange} />
            {selectedOption && (
                <form className="" >
                    <div className="formVenda">
                        <div className="input-field">
                            <input 
                            required
                            id="cliId" 
                            type="number" 
                            className="validate" 
                            name="cliId" 
                            />
                            <label htmlFor="cliId">Id do Cliente</label>
                        </div>
                        <div className="input-field">
                            <input 
                            required
                            id="funcionarioId" 
                            type="number" 
                            className="validate" 
                            name="funcionarioId" 
                            />
                            <label htmlFor="funcionarioId">Id do Funcionario</label>
                        </div>
                        <div className="input-field">
                            <input 
                            required
                            id="id" 
                            type="number" 
                            className="validate" 
                            name="id" 
                            />
                            <label htmlFor="id">Id do {valor}</label>
                        </div>
                        <div className="input-field">
                            <input 
                            required
                            id="quantidade" 
                            type="number" 
                            className="validate"
                             name="quantidade" 
                             />
                            <label htmlFor="quantidade">Quantidade Consumida</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <Button type="submit" variant="danger" name="action">Registrar</Button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default FormularioVenda;
