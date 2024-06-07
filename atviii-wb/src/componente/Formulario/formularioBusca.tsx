import { useState } from "react";
import { Button } from "react-bootstrap";
import { ICliente, IProduto, IServico } from "../View/Interface/interface";
import View from "../View/view";
import "./style.css";

interface FormBuscaProps {
  tipo: "cliente" | "produto" | "servico";
}

function FormularioBusca({ tipo }: FormBuscaProps) {
  const [identificador, setIdentificador] = useState<string>("");
  const [resultado, setResultado] = useState<
    ICliente | IProduto | IServico | null
  >(null);

  function handleIdentificadorChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setResultado(null);
    setIdentificador(event.target.value);
  }

  function handleSearch() {
    const resultadoEncontrado = simulateSearch(identificador, tipo);
    setResultado(resultadoEncontrado);
  }
  // apenas para a simulação
  function simulateSearch(identificador: string, tipo: string) {
    if (tipo === "cliente" && identificador === "1") {
      return {
        nome: "João da Silva",
        cpf: "12345678900",
        rg: "1234567",
        tel: "123456789",
        genero: "Masculino",
      } as ICliente;
    } else if (tipo === "produto" && identificador === "1") {
      return {
        nome: "Produto A",
        id: "1",
        valor: "100.00",
      } as IProduto;
    } else if (tipo === "servico" && identificador === "1") {
      return {
        nome: "Serviço A",
        id: "1",
        valor: "200.00",
      } as IServico;
    }
    return null;
  }
  function renderResultado() {
    switch (tipo) {
      case "cliente":
        return <View tipo="cliente" cliente={resultado as ICliente} />;
      case "produto":
        return <View tipo="produto" produto={resultado as IProduto} />;
      case "servico":
        return <View tipo="servico" servico={resultado as IServico} />;
    }
  }
  return (
    <>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="identificador"
                type="text"
                className="validate"
                onChange={handleIdentificadorChange}
              />
              <label htmlFor="identificador">
                Digite o número identificador (ID)
              </label>
            </div>
          </div>
          <div className="col s12">
            <Button
              type="button"
              variant="danger"
              onClick={handleSearch}
              name="action"
            >
              Buscar
            </Button>
          </div>
        </form>
        {resultado !== null && renderResultado()}
      </div>
    </>
  );
}
export default FormularioBusca;
