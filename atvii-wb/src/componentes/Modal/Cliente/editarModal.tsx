import React, { Component, ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface EditarModalProps {
    show: boolean; 
    onHide: () => void; 
    clienteId: string; 
}

interface EditarModalState {
    nome: string; 
    nomeSocial: string; 
    telefone: string; 
    rg: string; 
}

class EditarModal extends Component<EditarModalProps, EditarModalState> {
    constructor(props: EditarModalProps) {
        super(props);
        this.state = {
            nome: '',
            nomeSocial: '',
            telefone: '',
            rg: ''
        };
    }

    handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    handleClose = () => {
        const { onHide } = this.props;
        onHide(); 
    };

    handleSaveChanges = () => {
        const { nome, nomeSocial, telefone, rg } = this.state;
        this.handleClose();
    };

    render() {
        const { show } = this.props;
        const { nome, nomeSocial, telefone, rg } = this.state;

        return (
            <Modal show={show} onHide={this.handleClose} style={{ background: 'none', border: 'none', overflowX: 'hidden', boxShadow: 'none' }}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Informações</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="nome"
                                type="text"
                                className="validate"
                                name="nome"
                                value={nome}
                                onChange={this.handleInputChange}
                            />
                            <label htmlFor="nome">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="nomeSocial"
                                type="text"
                                className="validate"
                                name="nomeSocial"
                                value={nomeSocial}
                                onChange={this.handleInputChange}
                            />
                            <label htmlFor="nomeSocial">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="telefone"
                                type="text"
                                className="validate"
                                name="telefone"
                                value={telefone}
                                onChange={this.handleInputChange}
                            />
                            <label htmlFor="telefone">Telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                id="rg"
                                type="text"
                                className="validate"
                                name="rg"
                                value={rg}
                                onChange={this.handleInputChange}
                            />
                            <label htmlFor="rg">RG</label>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer style={{ background: 'none' }}>
                    <Button variant="outline-dark" onClick={this.handleClose} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>
                        Fechar
                    </Button>
                    <Button variant="danger" onClick={this.handleSaveChanges} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>
                        Salvar Alterações
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default EditarModal;
