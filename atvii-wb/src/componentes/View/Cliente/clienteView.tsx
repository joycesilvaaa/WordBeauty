import React, { Component, ReactNode } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ICliente from "./Interface/clienteView";
import EditarModal from "../../Modal/Cliente/editarModal"; 
import './style.css'
import ConfirmarExclusao from "../../Modal/Cliente/confirmarExclusaoModal";

interface ClienteViewProps {
    cliente: ICliente;
}

interface ClienteViewState {
    modalAberto: boolean;
    modalExclusaoAberto: boolean
}

class ClienteView extends Component<ClienteViewProps, ClienteViewState> {
    constructor(props: ClienteViewProps) {
        super(props);
        this.state = {
            modalAberto: false,
            modalExclusaoAberto: false
        };
    }

    abrirModal = () => {
        this.setState({ modalAberto: true });
    }

    fecharModal = () => {
        this.setState({ modalAberto: false });
    }

    abrirModalExclusao = () => {
        this.setState({ modalExclusaoAberto: true });
    }
    
    fecharModalExclusao = () => {
        this.setState({ modalExclusaoAberto: false });
    }
    
    handleConfirmarExclusao = () => {
        console.log("Excluir cliente:", this.props.cliente.nome);
        this.fecharModalExclusao();
    }
    render(): ReactNode {
        const { cliente } = this.props;
        const { modalAberto, modalExclusaoAberto } = this.state;
        return (
            <>
            <Card border="pink" className="card">
                <Card.Header>{cliente.nome}</Card.Header>
                <Card.Body>
                    <Card.Text>CPF: {cliente.cpf}</Card.Text>
                    <Card.Text>Gênero: {cliente.genero}</Card.Text>
                    <Card.Text>Telefone: {cliente.tel}</Card.Text>
                    <Card.Text>RG: {cliente.rg}</Card.Text>
                    <Button variant="success" onClick={this.abrirModal} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>Editar</Button>
                    <Button variant="danger" onClick={this.abrirModalExclusao} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>Deletar</Button>
                </Card.Body>
            </Card>
            {modalAberto && <EditarModal show={modalAberto} onHide={this.fecharModal} clienteId="1"/>}
            {modalExclusaoAberto && <ConfirmarExclusao show={modalExclusaoAberto} onHide={this.fecharModalExclusao} clienteId="1" onConfirmarExclusao={this.handleConfirmarExclusao} />}

            
            <br />
        </>
        );
    }
}

export default ClienteView;
