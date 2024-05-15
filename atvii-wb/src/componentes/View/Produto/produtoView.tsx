import React, { Component, ReactNode } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css'
import ConfirmarExclusaoProdServ from "../../Modal/Produto-Servico/confirmaExclusaoProdServ";
import IProduto from "./Interface/produtoView";
import EditarModalServProd from "../../Modal/Produto-Servico/produtoServicoEditarModal";

interface ProdutoViewProps {
    produto: IProduto;
}

interface ProdutoViewState {
    modalAberto: boolean;
    modalExclusaoAberto: boolean
}

class ProdutoView extends Component< ProdutoViewProps , ProdutoViewState> {
    constructor(props: ProdutoViewProps) {
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
        console.log("Excluir Produto:", this.props.produto.nome);
        this.fecharModalExclusao();
    }
    render(): ReactNode {
        const { produto } = this.props;
        const { modalAberto, modalExclusaoAberto } = this.state;
        return (
            <>
            <Card border="pink" className="card">
                <Card.Header>Id: {produto.prod_id}</Card.Header>
                <Card.Body>
                    <Card.Text>Nome do Produto: {produto.nome}</Card.Text>
                    <Card.Text>Valor: {produto.valor}</Card.Text>
                    <Button variant="success" onClick={this.abrirModal} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>Editar</Button>
                    <Button variant="danger" onClick={this.abrirModalExclusao} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>Deletar</Button>
                </Card.Body>
            </Card>
            {modalAberto && <EditarModalServProd show={modalAberto} onHide={this.fecharModal} produtoId="1"/>}
            {modalExclusaoAberto && <ConfirmarExclusaoProdServ show={modalExclusaoAberto} onHide={this.fecharModalExclusao} produtoId="1" onConfirmarExclusao={this.handleConfirmarExclusao} />}
            <br />
        </>
        );
    }
}

export default ProdutoView;
