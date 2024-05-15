import React, { Component, ChangeEvent } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface EditarModalProps {
    show: boolean; 
    onHide: () => void;
    servicoId?: string
    produtoId?: string
}

interface EditarModalState {
    nome: string; 
    valor: string
}

class EditarModalServProd extends Component<EditarModalProps, EditarModalState> {
    constructor(props: EditarModalProps) {
        super(props);
        this.state = {
            nome: '',
            valor: ''
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
        if (this.props.servicoId === ''){
            const { nome, valor } = this.state;
            this.handleClose();
        }else{
            const { nome, valor } = this.state;
            this.handleClose();
        }
    };

    render() {
        const { show } = this.props;
        const { nome, valor } = this.state;

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
                                id="valor"
                                type="text"
                                className="validate"
                                name="nomeSocial"
                                value={valor}
                                onChange={this.handleInputChange}
                            />
                            <label htmlFor="valor">Valor </label>
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

export default EditarModalServProd;
