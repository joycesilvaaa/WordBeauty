import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import EditarModal from "../Modal/editar";
import { ICliente, IProduto, IServico } from "./Interface/interface";
import './style.css'
import ModalExcluir from "../Modal/excluir";

interface ViewProps {
    tipo: 'cliente' | 'produto' | 'servico';
    cliente?: ICliente;
    produto?: IProduto;
    servico?: IServico;
}

function View({ tipo, cliente, produto, servico }: ViewProps) {
    const [modalAberto, setModalAberto] = useState(false);
    const [modalAbertoExclusao, setModalAbertoExclusao] = useState(false);

    const abrirModal = () => {
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
    };

    const abrirModalExclusao = () => {
        setModalAbertoExclusao(true);
    };

    const fecharModalExclusao = () => {
        setModalAbertoExclusao(false);
    };

    let content;

    switch (tipo) {
        case 'cliente':
            content = (
                <div>
                    <Card  className="card">
                        <Card.Header  style={{ backgroundColor: 'lightcoral', color: 'white' }}>{cliente?.nome}</Card.Header>
                        <Card.Body>
                            <Card.Text>CPF: {cliente?.cpf}</Card.Text>
                            <Card.Text>Gênero: {cliente?.genero}</Card.Text>
                            <Card.Text>Telefone: {cliente?.tel}</Card.Text>
                            <Card.Text>RG: {cliente?.rg}</Card.Text>
                            <Button variant="success" onClick={abrirModal} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>Editar</Button>
                            <Button variant="danger" onClick={abrirModalExclusao} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>Deletar</Button>
                        </Card.Body>
                    </Card>
                    {modalAberto && <EditarModal show={modalAberto} onHide={fecharModal} tipo="cliente" id={'1'} />}
                    {modalAbertoExclusao && <ModalExcluir show={modalAbertoExclusao} onHide={fecharModalExclusao} id="1" tipo="cliente"/>}
                    <br />
                </div>
            );
            break;
        case 'produto':
            content = (
                <div>
                    <Card className="card">
                        <Card.Header  style={{ backgroundColor: 'lightcoral', color: 'white' }}>Id: {produto?.id}</Card.Header>
                        <Card.Body>
                            <Card.Text>Nome do Produto: {produto?.nome}</Card.Text>
                            <Card.Text>Valor: {produto?.valor}</Card.Text>
                            <Button variant="success" onClick={abrirModal} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>Editar</Button>
                            <Button variant="danger" onClick={abrirModalExclusao} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>Deletar</Button>
                        </Card.Body>
                    </Card>
                    {modalAberto && <EditarModal show={modalAberto} onHide={fecharModal} tipo="produto" id={'1'} />}
                    {modalAbertoExclusao && <ModalExcluir show={modalAbertoExclusao} onHide={fecharModalExclusao} id="1" tipo="produto"/>}
                    <br />
                </div>
            );
            break;
        case 'servico':
            content = (
                <div>
                    <Card className="card">
                        <Card.Header  style={{ backgroundColor: 'lightcoral', color: 'white' }}>Id: {servico?.id}</Card.Header>
                        <Card.Body >
                            <Card.Text>Nome do Serviço: {servico?.nome}</Card.Text>
                            <Card.Text>Valor: {servico?.valor}</Card.Text>
                            <Button variant="success" onClick={abrirModal} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>Editar</Button>
                            <Button variant="danger" onClick={abrirModalExclusao} style={{ margin: '0.5rem', boxShadow: 'none', border: 'none' }}>Deletar</Button>
                        </Card.Body>
                    </Card>
                    {modalAberto && <EditarModal show={modalAberto} onHide={fecharModal} tipo="servico" id="1"/>}
                    {modalAbertoExclusao && <ModalExcluir show={modalAbertoExclusao} onHide={fecharModalExclusao} id="1" tipo="servico"/>}
                    <br />
                </div>
            );
            break;
        default:
            content = (<div>Valor não encontrado!</div>)
            break;
    }
    return content;
}

export default View;
