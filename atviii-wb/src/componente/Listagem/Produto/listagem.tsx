import { useState } from "react";
import Seletor from "../../Seletor/seletor";

function ListagemProduto() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [opcaoGenero, setOpcaoGenero] = useState("");

  function handleOptionChange(opcaoSelecionada: string) {
    setOpcaoSelecionada(opcaoSelecionada);
  }

  function handleGenderChange(opcaoGenero: string) {
    setOpcaoGenero(opcaoGenero);
  }

  const opcoes = [
    { value: "1", label: "Listagem de todos os produtos:" },
    { value: "2", label: "Listar produtos mais consumidos por gênero" },
    { value: "3", label: "Listagem dos produtos mais consumidos" },
    {
      value: "4",
      label: "Listagem dos 5 clientes que mais consumiram produtos (em valor)",
    },
    {
      value: "5",
      label:
        "Listagem dos 10 Clientes que mais consumiram produtos(quantidade)",
    },
  ];
  let content;
  switch (opcaoSelecionada) {
    case "1":
      content = <div>Aqui vai a lista de todos os produtos...</div>;
      break;
    case "2":
      const genderOptions = [
        { value: "Masculino", label: "Masculino" },
        { value: "Feminino", label: "Feminino" },
        { value: "Outros", label: "Outros" },
      ];
      content = (
        <div>
          <Seletor opcoes={genderOptions} onChange={handleGenderChange} />
          {opcaoGenero && (
            <div>
              Aqui vai a listagem dos produtos mais consumidos por gênero{" "}
              {opcaoGenero}...
            </div>
          )}
        </div>
      );
      break;
    case "3":
      content = <div>Aqui vai a listagem dos produtos mais consumidos...</div>;
      break;
    case "4":
      content = (
        <div>
          Aqui vai a dos 5 clientes que mais consumiram produtos em valor...
        </div>
      );
      break;
    case "5":
      content = (
        <div>
          Aqui vai a dos 10 Clientes que mais consumiram produtos quantidade...
        </div>
      );
      break;
    default:
      break;
  }

  return (
    <>
      <Seletor opcoes={opcoes} onChange={handleOptionChange} />
      {content}
    </>
  );
}
export default ListagemProduto;
