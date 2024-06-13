import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { clienteEspecifico } from "../../api/clienteApi";
import { Cliente } from "../../Interface/interface";

interface VisualizarModalProps {
  onHide: () => void;
  id: string;
  show: boolean;
}

function VisualizarModal({ id, onHide, show }: VisualizarModalProps) {
  const [dados, setDados] = useState<Cliente>({
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
    async function fetchData() {
      try {
        const cliente = parseInt(id);
        let resultado = await clienteEspecifico(cliente);
        setDados(resultado)
      } catch (error) {
        console.error(`Erro ao buscar específico: ${error}`);
      }
    }

    if (show) {
      fetchData();
    }
  }, [id, show]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      style={{
        background: "none",
        border: "none",
        overflowX: "hidden",
        boxShadow: "none",
        zIndex: 1050,
      }}
    >
      <Modal.Header>
        <Modal.Title
          style={{ fontSize: "22px", textAlign: "center", fontWeight: "500" }}
        >
          Informações do Cliente
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ fontSize: "20px" }}>
        <p>
          <strong>Nome:</strong> {dados.nome} {dados.sobreNome}
        </p>
        {dados.email && (
          <p>
            <strong>E-mail: </strong> {dados.email}
          </p>
        )}

        <p>
          <strong>Endereço:</strong> {dados.endereco.rua},
          {dados.endereco.bairro}, {dados.endereco.cidade} -
          {dados.endereco.estado}
        </p>
        {dados.telefones &&
          dados.telefones.map((telefone, index) => (
            <div key={index}>
              <p>
                <strong>Telefone {index + 1}: </strong> +{telefone.ddd}{" "}
                {telefone.numero}
              </p>
            </div>
          ))}
      </Modal.Body>
      <Modal.Footer style={{ background: "none" }}>
        <Button
          variant="dark"
          onClick={onHide}
          style={{ margin: "0.5rem", boxShadow: "none", border: "none" }}
        >
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VisualizarModal;
