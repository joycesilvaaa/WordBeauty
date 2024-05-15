import React, { Component, ReactNode } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditarModalServProd from "../../Modal/Produto-Servico/produtoServicoEditarModal"; 
import './style.css'
import ConfirmarExclusao from "../../Modal/Cliente/confirmarExclusaoModal";
import IServico from "../Servico/Interface/servicoView";
import ConfirmarExclusaoProdServ from "../../Modal/Produto-Servico/confirmaExclusaoProdServ";

interface ServicoViewProps {
    servico: IServico;
}

interface ServicoViewState {
    modalAberto: boolean;
    modalExclusaoAberto: boolean
}

class ServicoView extends Component<ServicoViewProps, ServicoViewState> {
    constructor(props: ServicoViewProps) {
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
        console.log("Excluir Servico:", this.props.servico.nome);
        this.fecharModalExclusao();
    }
    render(): ReactNode {
        const { servico } = this.props;
        const { modalAberto, modalExclusaoAberto } = this.state;
        return (
            <>
            <Card border="pink" className="card">
                <Card.Header>Id: {servico.serv_id}</Card.Header>
                <Card.Body>
                    <Card.Text>Nome do Serviço: {servico.nome}</Card.Text>
                    <Card.Text>Valor: {servico.valor}</Card.Text>
                    <Button variant="success" onClick={this.abrirModal} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>Editar</Button>
                    <Button variant="danger" onClick={this.abrirModalExclusao} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>Deletar</Button>
                </Card.Body>
            </Card>
            {modalAberto && <EditarModalServProd show={modalAberto} onHide={this.fecharModal} servicoId="1"/>}
            {modalExclusaoAberto && <ConfirmarExclusaoProdServ show={modalExclusaoAberto} onHide={this.fecharModalExclusao} servicoId="1" onConfirmarExclusao={this.handleConfirmarExclusao} />}
            <br />
        </>
        );
    }
}

export default ServicoView;