import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { CadastrarCliente } from "../../Interface/interface";
import { cadastrarCliente } from "../../api/clienteApi";

interface CadastrarModalProps {
    onHide: () => void;
    show: boolean;
}

function CadastrarModal({ onHide, show }: CadastrarModalProps) {
    // Inicializa com ''
    const [clienteNovo, setClienteNovo] = useState<CadastrarCliente>({
        nome: '',
        sobrenome: '',
        email: '',
        endereco: {
            estado: '',
            cidade: '',
            bairro: '',
            rua: '',
            numero: '',
            codigoPostal: '',
            informacoesAdicionais: ''
        },
        telefones: [{ ddd: '', numero: '' }]
    });

    // Muda os campos
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setClienteNovo((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    // Mudança nos campos de endereço
    function handleAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setClienteNovo((prevState) => ({
            ...prevState,
            endereco: {
                ...prevState.endereco,
                [name]: value
            }
        }));
    }

    // Mudança nos campos de telefone
    function handleTelefoneChange(index: number, event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        const newTelefones = [...clienteNovo.telefones];
        newTelefones[index] = { ...newTelefones[index], [name]: value };
        setClienteNovo((prevState) => ({
            ...prevState,
            telefones: newTelefones,
        }));
    }

    function addTelefone() {
        setClienteNovo((prevState) => ({
            ...prevState,
            telefones: [...(prevState.telefones || []), { ddd: '', numero: '' }]
        }));
    }

    async function handleSaveChanges() {
        try {
            const resultado = await cadastrarCliente(clienteNovo);
            if (!resultado) {
                console.error(`Erro ao cadastrar cliente`);
            }
            alert(`Cadastro realizado com sucesso!`);
            onHide();
        } catch (error) {
            console.error(`Erro ao cadastrar cliente: ${error}`);
        }
    }

    return (
        <Modal show={show} onHide={onHide} style={{ background: 'none', border: 'none', overflowX: 'hidden', boxShadow: 'none' }}>
            <Modal.Header>
                <Modal.Title  style={{  fontSize:'22px', textAlign: 'center', fontWeight: '500'}}>Cadastrar Cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="column">
                    <div className="input-field col s6">
                        <input
                            id="nome"
                            type="text"
                            className="validate"
                            name="nome"
                            value={clienteNovo.nome}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="sobrenome"
                            type="text"
                            className="validate"
                            name="sobrenome"
                            value={clienteNovo.sobrenome}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="sobrenome">Sobrenome</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="email"
                            type="text"
                            className="validate"
                            name="email"
                            value={clienteNovo.email}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="estado"
                            type="text"
                            className="validate"
                            name="estado"
                            value={clienteNovo.endereco?.estado}
                            onChange={handleAddressChange}
                        />
                        <label htmlFor="estado">Estado</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="cidade"
                            type="text"
                            className="validate"
                            name="cidade"
                            value={clienteNovo.endereco?.cidade}
                            onChange={handleAddressChange}
                        />
                        <label htmlFor="cidade">Cidade</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="bairro"
                            type="text"
                            className="validate"
                            name="bairro"
                            value={clienteNovo.endereco?.bairro}
                            onChange={handleAddressChange}
                        />
                        <label htmlFor="bairro">Bairro</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="rua"
                            type="text"
                            className="validate"
                            name="rua"
                            value={clienteNovo.endereco?.rua}
                            onChange={handleAddressChange}
                        />
                        <label htmlFor="rua">Rua</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="codigoPostal"
                            type="text"
                            className="validate"
                            name="codigoPostal"
                            value={clienteNovo.endereco?.codigoPostal}
                            onChange={handleAddressChange}
                        />
                        <label htmlFor="codigoPostal">Código Postal</label>
                    </div>
                    <div className="input-field col s6">
                        <input
                            id="informacoesAdicionais"
                            type="text"
                            className="validate"
                            name="informacoesAdicionais"
                            value={clienteNovo.endereco?.informacoesAdicionais}
                            onChange={handleAddressChange}
                        />
                        <label htmlFor="informacoesAdicionais">Informações Adicionais</label>
                    </div>

                    {clienteNovo.telefones.map((telefone, index) => (
                        <div key={index} className="telefone-fields">
                            <div className="input-field col s3">
                                <input
                                    id={`ddd-${index}`}
                                    type="text"
                                    className="validate"
                                    name="ddd"
                                    value={telefone.ddd}
                                    onChange={(event) => handleTelefoneChange(index, event)}
                                />
                                <label htmlFor={`ddd-${index}`}>DDD</label>
                            </div>
                            <div className="input-field col s9">
                                <input
                                    id={`numero-${index}`}
                                    type="text"
                                    className="validate"
                                    name="numero"
                                    value={telefone.numero}
                                    onChange={(event) => handleTelefoneChange(index, event)}
                                />
                                <label htmlFor={`numero-${index}`}>Número</label>
                            </div>
                        </div>
                    ))}

                    <Button variant="outline-dark" onClick={addTelefone} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>
                        Adicionar Telefone
                    </Button>
                    </div>
            </Modal.Body>
            <Modal.Footer style={{ background: 'none' }}>
                <Button variant="outline-dark" onClick={onHide} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>
                    Fechar
                </Button>
                <Button variant="danger" onClick={handleSaveChanges} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>
                    Cadastrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CadastrarModal;