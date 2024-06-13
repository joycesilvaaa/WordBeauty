import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { EditarCliente } from "../../Interface/interface";
import { clienteEspecifico, editaCliente } from "../../api/clienteApi";
import "bootstrap/dist/css/bootstrap.min.css";

interface EditarModalProps {
  onHide: () => void;
  clientId: string;
  show: boolean;
}

function EditarModal({ clientId, onHide, show }: EditarModalProps) {
  const [clientUpdate, setClientUpdate] = useState<EditarCliente>({
    nome: "",
    id: 0,
    sobreNome: "",
    email: "",
    endereco: {
      estado: "",
      cidade: "",
      bairro: "",
      rua: "",
      numero: "",
      codigoPostal: "",
      informacoesAdicionais: "",
    },
    telefones: [{ ddd: "", numero: "" }],
  });

  useEffect(() => {
    async function fetchClientData() {
      if (clientId) {
        const id = parseInt(clientId);
        try {
          const resultado = await clienteEspecifico(id);
          console.log(resultado);
          setClientUpdate(resultado);
        } catch (error) {
          console.error(`Erro ao buscar informações do cliente: ${error}`);
        }
      }
    }
    fetchClientData();
  }, [clientId]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setClientUpdate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setClientUpdate((prevState) => ({
      ...prevState,
      endereco: {
        ...prevState.endereco,
        [name]: value,
      },
    }));
  }

  function handleTelefoneChange(
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;
    const newTel = clientUpdate.telefones?.map((telefone, idx) =>
      idx === index ? { ...telefone, [name]: value } : telefone
    );
    setClientUpdate((prevState) => ({
      ...prevState,
      telefones: newTel,
    }));
  }

  function addTelefone() {
    setClientUpdate((prevState) => ({
      ...prevState,
      telefones: [...(prevState.telefones ?? []), { ddd: "", numero: "" }],
    }));
  }

  async function handleSaveChanges() {
    try {
      const verificaCampoVazio = Object.values(clientUpdate).some(value => 
        typeof value === 'string' && (value.trim() === "" || value.trim().length === 0)
      );
  
      if (verificaCampoVazio ) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
      }
      const resultado = await editaCliente(clientUpdate);
      console.log("cli", clientUpdate);
      alert(resultado?.message);
      onHide()
      window.location.reload();
    } catch (error) {
      console.error(`Erro ao editar cliente: ${error}`);
    }
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
      <Modal.Header>
        <Modal.Title
          style={{ fontSize: "22px", textAlign: "center", fontWeight: "500" }}
        >
          Editar Informações
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="column">
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              className="validate"
              name="nome"
              value={clientUpdate.nome}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="sobreNome">Sobrenome</label>
            <input
              id="sobreNome"
              type="text"
              className="validate"
              name="sobreNome"
              value={clientUpdate.sobreNome}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="text"
              className="validate"
              name="email"
              value={clientUpdate.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="estado">Estado</label>
            <input
              id="estado"
              type="text"
              className="validate"
              name="estado"
              value={clientUpdate.endereco?.estado}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label htmlFor="cidade">Cidade</label>
            <input
              id="cidade"
              type="text"
              className="validate"
              name="cidade"
              value={clientUpdate.endereco?.cidade}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label htmlFor="bairro">Bairro</label>
            <input
              id="bairro"
              type="text"
              className="validate"
              name="bairro"
              value={clientUpdate.endereco?.bairro}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label htmlFor="rua">Rua</label>
            <input
              id="rua"
              type="text"
              className="validate"
              name="rua"
              value={clientUpdate.endereco?.rua}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label htmlFor="codigoPostal">Código Postal</label>
            <input
              id="codigoPostal"
              type="text"
              className="validate"
              name="codigoPostal"
              value={clientUpdate.endereco?.codigoPostal}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label htmlFor="informacoesAdicionais">
              Informações Adicionais
            </label>
            <input
              id="informacoesAdicionais"
              type="text"
              className="validate"
              name="informacoesAdicionais"
              value={clientUpdate.endereco?.informacoesAdicionais}
              onChange={handleAddressChange}
            />
          </div>
          <div className="col s12">
          <label htmlFor="ddd">
               Telefone (DDD)
            </label>
            {clientUpdate.telefones?.map((telefone, index) => (
              <div key={index} className="row">
                <div>
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
                <div>
                <label htmlFor="ddd">
               Telefone (Numero) 
            </label>
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

          <Button
            variant="outline-dark"
            onClick={addTelefone}
            style={{ margin: "0.5rem", boxShadow: "none", border: "none" }}
          >
            Adicionar Telefone
          </Button>
        </div>
      </Modal.Body>
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
