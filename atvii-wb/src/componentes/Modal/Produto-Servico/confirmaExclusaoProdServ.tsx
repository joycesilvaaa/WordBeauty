import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

interface ConfirmarExclusaoProps {
    show: boolean; 
    onHide: () => void; 
    servicoId?: string; 
    produtoId?: string;
    onConfirmarExclusao: (id: string) => void;
}

class ConfirmarExclusaoProdServ extends Component<ConfirmarExclusaoProps> {
    handleConfirmarExclusao = () => {
        const { servicoId, produtoId, onConfirmarExclusao } = this.props;
        const id = servicoId || produtoId;

        if (id) {
            onConfirmarExclusao(id);
        }
    };

    render() {
        const { show, onHide } = this.props;

        return (
            <Modal show={show} onHide={onHide} centered style={{ background: 'none', border: 'none', overflowX: 'hidden', boxShadow: 'none' }}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Exclusão</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ fontSize: '20px' }}>
                    <p>Tem certeza de que deseja excluir?</p>
                </Modal.Body>
                <Modal.Footer style={{ background: 'none' }}>
                    <Button variant="outline-dark" onClick={onHide} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={this.handleConfirmarExclusao} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>
                        Excluir
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ConfirmarExclusaoProdServ;