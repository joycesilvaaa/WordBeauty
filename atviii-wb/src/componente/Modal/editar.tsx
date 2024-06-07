import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Seletor from "../Seletor/seletor";

interface EditarModalProps {
  tipo: "cliente" | "produto" | "servico";
  onHide: () => void;
  id: string;
  show: boolean;
}

function EditarModal({ tipo, id, onHide, show }: EditarModalProps) {
  const [formDataCliente, setFormDataCliente] = useState(null);
  const [formDataProduto, setFormDataProduto] = useState({
    nome: "",
    valor: 0,
    estoque: 0,
  });
  const [formDataServico, setFormDataServico] = useState({
    nome: "",
    valor: 0,
  });
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  function handleGeneroChange(selectedOption: string) {
    setSelectedOption(selectedOption);
  }

  // Opções de gênero
  const opcoesGenero = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
    { value: "Outros", label: "Outros" },
  ];

  let content;

  switch (tipo) {
    case "cliente":
      content = (
        <>
          <div className="column">
            <div className="input-field col s6">
              <input id="nome" type="text" className="validate" name="nome" />
              <label htmlFor="nome">Nome</label>
            </div>
            <div className="input-field col s6">
              <input
                id="nome_social"
                type="text"
                className="validate"
                name="nome_social"
              />
              <label htmlFor="nome_social">Nome Social </label>
              <div className="">
                <label htmlFor="genero">Gênero</label>
                <Seletor opcoes={opcoesGenero} onChange={handleGeneroChange} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                required
                id="rg_valor"
                type="text"
                className="validate"
                name="valor"
              />
              <label htmlFor="rg_valor">RG Valor</label>
            </div>
            <div className="input-field col s6">
              <input
                required
                id="rg_dataEmissao"
                type="date"
                className="validate"
                name="dataEmissao"
              />
              <label htmlFor="rg_dataEmissao">RG Data de Emissão</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                required
                id="cpf"
                type="text"
                className="validate"
                name="valor"
              />
              <label htmlFor="cpf">CPF Valor</label>
            </div>
            <div className="input-field col s6">
              <input
                required
                id="cpf_dataEmissao"
                type="date"
                className="validate"
                name="dataEmissao"
              />
              <label htmlFor="cpf_dataEmissao">CPF Data de Emissão</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                required
                id="telefone_ddd"
                type="text"
                className="validate"
                name="ddd"
              />
              <label htmlFor="telefone_ddd">Telefone DDD</label>
            </div>
            <div className="input-field col s6">
              <input
                required
                id="telefone_numero"
                type="text"
                className="validate"
                name="numero"
              />
              <label htmlFor="telefone_numero">Telefone Número</label>
            </div>
          </div>
        </>
      );
      break;
    case "produto":
      content = (
        <>
          <div className="column">
            <div>
              <label htmlFor="nome">Nome do Produto</label>
              <input
                required
                id="nome"
                type="text"
                className="validate"
                name="nome"
              />
            </div>
            <div>
              <label htmlFor="valor_prod">Valor do Produto</label>
              <input
                required
                id="valor_prod"
                type="number"
                step="0.01"
                className="validate"
                name="valor"
              />
            </div>
            <div>
              <label htmlFor="estoque">Estoque</label>
              <input
                required
                id="estoque"
                type="number"
                className="validate"
                name="estoque"
              />
            </div>
          </div>
        </>
      );
      break;
    case "servico":
      content = (
        <>
          <div className="column">
            <div >
            <label htmlFor="nome">Nome do Serviço</label>
              <input 
              id="nome" 
              type="text" 
              className="validate" 
              name="nome" 
              />
            </div>
            <div >
            <label htmlFor="valor">Valor do Serviço</label>
              <input
                id="valor_serv"
                type="number"
                className="validate"
                name="valor" 
                step="0.01" 
              />
            </div>
          </div>
        </>
      );
      break;
    default:
      break;
  }

  function handleSaveChanges() {
    onHide();
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      style={{
        background: "none",
        border: "none",
        overflowX: "hidden",
        boxShadow: "none",
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Editar Informações</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer style={{ background: "none" }}>
        <Button
          variant="outline-dark"
          onClick={onHide}
          style={{ margin: "0.5rem", boxShadow: "none", border: "none" }}
        >
          Fechar
        </Button>
        <Button
          variant="danger"
          onClick={handleSaveChanges}
          style={{ margin: "0.5rem", boxShadow: "none", border: "none" }}
        >
          Salvar Alterações
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditarModal;
