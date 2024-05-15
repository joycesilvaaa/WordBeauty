import { Component } from "react";
import NavTab from "../../componentes/Nav/navTab";
import ListagemCliente from "../../componentes/Listagem/Cliente/listagemCliente";
import GerenciarCliente from "../../componentes/Gerenciar/Cliente/gerenciarCliente";

class ClientePage extends Component {
  render() {
    return (
      <>
        <NavTab
          ListComponent={ListagemCliente}
          ManageComponent={GerenciarCliente}
        />
      </>
    );
  }
}

export default ClientePage;
