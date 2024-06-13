import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { Cliente } from "../../Interface/interface";
import { listaClientes } from "../../api/clienteApi";
import EditarModal from "../Modal/editarModal";
import ExcluirModal from "../Modal/excluirModal";
import './style.css'
import VisualizarModal from "../Modal/visualizarModal";


function ListagemClientes() {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [showEditarModal, setShowEditarModal] = useState(false);
    const [showDeletarModal, setShowDeletarModal] = useState(false);
    const [showVisualizarModal, setShowVisualizarModal] = useState(false)
    const [clienteId, setClienteId] = useState<number | null>(null);

    useEffect(() => {
        async function fetchListaClientes() {
            try {
                const data = await listaClientes();
                setClientes(data)
            } catch (error) {
                console.error(`Erro ao listar clientes: ${error}`);
            }
        }
        fetchListaClientes();
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

    function handleCliente(id: number){
        setClienteId(id)
        setShowVisualizarModal(true)
    }

    return (
        <div className="clientes-lista">
            {clientes.map((cliente) => (
                <div key={cliente.id} className="cliente-item" >
                    <div className="clientesSelecionar" onClick={() => handleCliente(cliente.id)}>
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
            {showVisualizarModal && <VisualizarModal
                show={showVisualizarModal}
                onHide={() => setShowVisualizarModal(false)}
                id={clienteId ? clienteId.toString() : ""}

            />}
        </div>
    );
}

export default ListagemClientes;
