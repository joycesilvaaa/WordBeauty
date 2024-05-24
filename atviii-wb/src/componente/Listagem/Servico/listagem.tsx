import { useState } from "react";
import Seletor from "../../Seletor/seletor";

function ListagemServico() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [opcaoGenero, setOpcaoGenero] = useState("");

  function handleOptionChange(opcaoSelecionada: string) {
    setOpcaoSelecionada(opcaoSelecionada);
    setOpcaoGenero('')
  }

  function handleGenderChange(opcaoGenero: string) {
    setOpcaoGenero(opcaoGenero);
  }

 const opcoes = [
    { value: "1", label: "Listagem de todos os serviços:" },
    { value: "2", label: "Listar serviços mais consumidos por gênero" },
    { value: "3", label: "Listagem dos serviços mais consumidos" },
    {
      value: "4",
      label: "Listagem dos 5 clientes que mais consumiram serviços (em valor)",
    },
    {
      value: "5",
      label:
        "Listagem dos 10 Clientes que mais consumiram serviços(quantidade)",
    },
  ]
  let content
  switch (opcaoSelecionada) {
    case "1":
      content = <div>Aqui vai a lista de todos os serviços...</div>;
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
              Aqui vai a listagem dos serviços mais consumidos por gênero{" "}
              {opcaoGenero}...
            </div>
          )}
        </div>
      );
      break;
    case "3":
      content = <div>Aqui vai a listagem dos serviços mais consumidos...</div>;
      break;
    case "4":
      content = (
        <div>
          Aqui vai a dos 5 clientes que mais consumiram serviços em valor...
        </div>
      );
      break;
    case "5":
      content = (
        <div>
          Aqui vai a dos 10 Clientes que mais consumiram serviços quantidade...
        </div>
      );
      break;
    default:
        content = null
      break;
  }

  return (
    <div>
      <Seletor opcoes={opcoes} onChange={handleOptionChange} />
      {content}
    </div>
  );
}
export default ListagemServico;
