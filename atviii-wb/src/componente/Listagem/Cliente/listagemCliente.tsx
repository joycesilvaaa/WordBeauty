import { useState } from "react";
import Seletor from "../../Seletor/seletor";

function ListagemCliente() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [opcaoGenero, setOpcaoGenero] = useState("");

  function handleOptionChange(opcaoSelecionada: string) {
    setOpcaoSelecionada(opcaoSelecionada);
    console.log('opcao escolhida', opcaoSelecionada)
    setOpcaoGenero('');
  }

  function handleGenderChange(opcaoSelecionada: string) {
    console.log("Opção de gênero selecionada:", opcaoSelecionada);
    setOpcaoGenero(opcaoSelecionada);
  }

  const options = [
    { value: "1", label: "Listar todos os clientes" },
    { value: "2", label: "Listar por Gênero" },
  ];

  const genderOptions = [
          { value: "Masculino", label: "Masculino" },
          { value: "Feminino", label: "Feminino" },
          { value: "Outros", label: "Outros" },
        ];
  let content;

  switch (opcaoSelecionada) {
    case "1":
      content = <div>Aqui vai a lista de todos os clientes...</div>;
      break;
      case "2":
        content = (
          <>
            <Seletor opcoes={genderOptions} onChange={handleGenderChange} />
            {opcaoGenero && (
              <div>Aqui vai a lista de clientes do gênero {opcaoGenero}...</div>
            )}
          </>
        );
        break;
    default:
      content = null;
      break
  }

  return (
    <div>
      <Seletor opcoes={options} onChange={handleOptionChange} />
      {content}
    </div>
  );
}

export default ListagemCliente
