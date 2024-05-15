import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

export default class FormularioCadastroCliente extends Component {
    render() {
        return (
            <div className="row">
                <form className="col s12" >
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome" type="text" className="validate" name="nome" />
                            <label htmlFor="nome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nome_social" type="text" className="validate" name="nome_social" />
                            <label htmlFor="nome_social">Nome Social (opcional)</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="rg" type="text" className="validate" name="rg" />
                            <label htmlFor="rg">RG</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="cpf" type="text" className="validate" name="cpf" />
                            <label htmlFor="cpf">CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="telefone" type="text" className="validate" name="telefone" />
                            <label htmlFor="telefone">Telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="email" type="email" className="validate" name="email" />
                            <label htmlFor="email">E-mail</label>
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
