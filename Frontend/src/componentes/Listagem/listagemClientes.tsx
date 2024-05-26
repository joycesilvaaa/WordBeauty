import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { Cliente } from "../../Interface/interface";
import { listaClientes } from "../../api/clienteApi";
import EditarModal from "../Modal/editarModal";
import ExcluirModal from "../Modal/excluirModal";
import './style.css'

function generateFakeClientes(quantity: number): Cliente[] {
    const clientes: Cliente[] = [];
    for (let i = 1; i <= quantity; i++) {
        clientes.push({
            id: i,
            nome: `Cliente ${i}`,
            sobrenome: `Sobrenome ${i}`,
            email: `cliente${i}@exemplo.com`,
            endereco: {
                estado: `Estado ${i}`,
                cidade: `Cidade ${i}`,
                bairro: `Bairro ${i}`,
                rua: `Rua ${i}`,
                numero: `${i}`,
                codigoPostal: `00000-${i}`,
                informacoesAdicionais: `Informações adicionais para o cliente ${i}`,
            },
            telefones: [{ ddd: "00", numero: "123456789" }]
        });
    }
    return clientes;
}

function ListagemClientes() {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [showEditarModal, setShowEditarModal] = useState(false);
    const [showDeletarModal, setShowDeletarModal] = useState(false);
    const [clienteId, setClienteId] = useState<number | null>(null);

    // useEffect(() => {
    //     async function fetchListaClientes() {
    //         try {
    //             const resultado = await listaClientes();
    //             if (resultado) {
    //                 setClientes(resultado.data);
    //             } else {
    //                 console.error("Erro ao listar clientes");
    //             }
    //         } catch (error) {
    //             console.error(`Erro ao listar clientes: ${error}`);
    //         }
    //     }
    //     fetchListaClientes();
    // }, []);

    useEffect(() => {
        const fakeClientes = generateFakeClientes(2); // Gera 10 clientes fictícios
        setClientes(fakeClientes); // Define os clientes fictícios no estado
    }, []);

    function handleEditar(id: number) {

        console.log(id)
        setClienteId(id);
        setShowEditarModal(true);
    }

    function handleDeletar(id: number) {
        setClienteId(id);
        setShowDeletarModal(true);
    }

    return (
        <div className="clientes-lista">
            {clientes.map((cliente) => (
                <div key={cliente.id} className="cliente-item">
                    <div className="clientesSelecionar">
                        <p>{cliente.nome}</p>
                    </div>
                    <div className="editar">
                        <Button variant="dark" onClick={() => handleEditar(cliente.id)}>Editar</Button>
                    </div>
                    <div className="deletar">
                        <Button variant="danger" onClick={() => handleDeletar(cliente.id)}>Deletar</Button>
                    </div>
                   
                </div>
            ))}
            {showEditarModal && <EditarModal
                show={showEditarModal}
                onHide={() => setShowEditarModal(false)}
                clientId={clienteId ? clienteId.toString() : ""}
            />}
            {showDeletarModal && <ExcluirModal
                show={showDeletarModal}
                onHide={() => setShowDeletarModal(false)}
                clientId={clienteId ? clienteId.toString() : ""}

            />}
        </div>
    );
}

export default ListagemClientes;
