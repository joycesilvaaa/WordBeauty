import React, { useEffect, useState } from "react"
import { Modal, Button } from "react-bootstrap";
import { EditarCliente } from "../../Interface/interface"
import { clienteEspecifico, editaCliente } from "../../api/clienteApi";
import 'bootstrap/dist/css/bootstrap.min.css';

interface EditarModalProps {
    onHide: () => void;
    clientId: string;
    show: boolean;
}

function EditarModal({ clientId, onHide, show }: EditarModalProps) {
    // Inicializa com ''
    const [clientUpdate, setClientUpdate]= useState<EditarCliente>({
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
    })

    // useEffect(() => {
    //     async function fetchClientData() {
    //         if (clientId) {
    //             const id = parseInt(clientId);
    //             try {
    //                 const resultado = await clienteEspecifico(id);
    //                 setClientUpdate(resultado?.data);
    //             } catch (error) {
    //                 console.error(`Erro ao buscar informações do cliente: ${error}`);
    //             }
    //         }
    //     }
    //     fetchClientData();
    // }, [clientId]);
    
    // muda os campos 
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
        const { name, value} = event.target
        setClientUpdate((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    // mudança nos campos de endereço
    function handleAddressChange(event: React.ChangeEvent<HTMLInputElement>){
        // extrai as propriedades do elemento hmtl que disparou
        const { name , value } = event.target
        // chamamos set com uma função callback que recebe os estados anteriores como parametro e retorna o estado atualizado 
        setClientUpdate((prevState) => ({
            ...prevState,// permite q as propriedades do estado que nao esta sendo alteiradas continue intactas
            endereco: {
                ...prevState.endereco,
                [name]: value // muda de acordo com a propriedade que disparou
            }
        }))
    }

    
    function handleTelefoneChange(index: number, event: React.ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target
        // Atualiza apenas o telefone especifico que foi alterado
        const newTel = clientUpdate.telefones?.map((telefone, idx) => (
            idx === index ? {...telefone, [name] : value} : telefone
        ))
        // atualiza o estado do cliente.telefone
        setClientUpdate((prevState) => ({
            ...prevState,
            telefones: newTel
        }))
    }

    function addTelefone(){
        setClientUpdate((prevState) => ({
            ...prevState,
            telefones: [...(prevState.telefones ?? []), {ddd: '', numero: ''}]
        }))
    }

    async function handleSaveChanges(){
        try{
            const id = parseInt(clientId)
            const resultado = await editaCliente(id, clientUpdate)
            if(!resultado){
                console.error(`Erro ao editar cliente`)
            }
            alert(`Cliente Atualizado!`)
            onHide()
        }catch(error){
            console.error(`Erro ao editar cliente: ${error}`)
        }
    }


    return(
        <Modal show={show} onHide={onHide} style={{  background: 'none', border: 'none', overflowX: 'hidden', boxShadow: 'none' }}>
        <Modal.Header >
            <Modal.Title style={{  fontSize:'22px', textAlign: 'center', fontWeight: '500'}}>Editar Informações</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="column">
                <div className="input-field col s6">
                    <input
                        id="nome"
                        type="text"
                        className="validate"
                        name="nome"
                        value={clientUpdate.nome}
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
                        value={clientUpdate.sobrenome}
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
                        value={clientUpdate.email}
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
                        value={clientUpdate.endereco?.estado}
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
                        value={clientUpdate.endereco?.cidade}
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
                        value={clientUpdate.endereco?.bairro}
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
                        value={clientUpdate.endereco?.rua}
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
                        value={clientUpdate.endereco?.codigoPostal}
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
                        value={clientUpdate.endereco?.informacoesAdicionais}
                        onChange={handleAddressChange}
                    />
                    <label htmlFor="informacoesAdicionais">Informações Adicionais</label>
                </div>
                <div className="col s12">
                {clientUpdate.telefones?.map((telefone, index) => (
                    <div key={index} className="row">
                        <div className="input-field col s6">
                            <input
                                id={`ddd-${index}`}
                                type="text"
                                className="validate"
                                name="ddd"
                                value={telefone.ddd}
                                onChange={(e) => handleTelefoneChange(index, e)}
                                placeholder={`Editar DDD: ${telefone.ddd}`}
                            />
            </div>
            <div className="input-field col s6">
    <input
        id={`numero-${index}`}
        type="text"
        className="validate"
        name="numero"
        value={telefone.numero}
        onChange={(e) => handleTelefoneChange(index, e)}
        placeholder={`Editar Numero: ${telefone.numero}`}
    />
</div>

        </div>
    ))}
</div>

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
                Salvar Alterações
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default EditarModal