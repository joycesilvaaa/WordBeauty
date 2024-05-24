import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

interface EditarModalProps {
    tipo: 'cliente' | 'produto' | 'servico';
    onHide: () => void;
    clienteId?: string;
    produtoId?: string;
    servicoId?: string;
    show: boolean;
}

function EditarModal({ tipo, clienteId, produtoId, servicoId, onHide, show }: EditarModalProps) {
    const [nome, setNome] = useState('');
    const [nomeSocial, setNomeSocial] = useState('');
    const [telefone, setTelefone] = useState('');
    const [rg, setRg] = useState('');
    const [valor, setValor] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        switch (name) {
            case 'nome':
                setNome(value);
                break;
            case 'nomeSocial':
                setNomeSocial(value);
                break;
            case 'telefone':
                setTelefone(value);
                break;
            case 'rg':
                setRg(value);
                break;
            case 'valor':
                setValor(value);
                break;
            default:
                break;
        }
    };

    let content;

    switch (tipo) {
        case 'cliente':
            content = (
                <>
                    <div className="input-field col s6">
                        <input
                            id="nomeSocial"
                            type="text"
                            className="validate"
                            name="nomeSocial"
                            value={nomeSocial}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="nomeSocial">Nome Social</label>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                id="telefone"
                                type="text"
                                className="validate"
                                name="telefone"
                                value={telefone}
                                onChange={handleInputChange}
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
                                onChange={handleInputChange}
                            />
                            <label htmlFor="rg">RG</label>
                        </div>
                    </div>
                </>
            );
            break;
        case 'produto':
            content = (
                <>
                    <div className="input-field col s6">
                        <input
                            id="valor"
                            type="text"
                            className="validate"
                            name="valor"
                            value={valor}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="valor">Valor </label>
                    </div>
                </>
            );
            break;
        case 'servico':
            content = (
                <>
                    <div className="input-field col s6">
                        <input
                            id="valor"
                            type="text"
                            className="validate"
                            name="valor"
                            value={valor}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="valor">Valor </label>
                    </div>
                </>
            );
            break;
        default:
            break;
    }

    function handleSaveChanges(){
        onHide()
    }

    return (
        <Modal show={show} onHide={onHide} style={{ background: 'none', border: 'none', overflowX: 'hidden', boxShadow: 'none' }}>
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
                            onChange={handleInputChange}
                        />
                        <label htmlFor="nome">Nome</label>
                    </div>
                    {content}
                </div>
            </Modal.Body>
            <Modal.Footer style={{ background: 'none' }}>
                <Button variant="outline-dark" onClick={onHide} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>
                    Fechar
                </Button>
                <Button variant="danger" onClick={handleSaveChanges} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>
                    Salvar Alterações
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditarModal;
