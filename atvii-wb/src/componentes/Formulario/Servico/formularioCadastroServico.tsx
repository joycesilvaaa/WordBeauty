import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

class FormularioCadastroServico extends Component {
    render() {
        return (
            <div className="row">
                <form className="col s12" >
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome" type="text" className="validate" name="nome" />
                            <label htmlFor="nome">Nome do Serviço</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nome_social" type="text" className="validate" name="nome_social" />
                            <label htmlFor="nome_social">Valor do Serviço</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <Button type="submit" variant="danger" name="action">Cadastrar
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormularioCadastroServico
