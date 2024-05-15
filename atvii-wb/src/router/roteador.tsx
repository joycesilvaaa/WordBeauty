import React, { Component } from "react";
import BarraNavegacao from "../componentes/NavBar/barraNavegacao";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./rotas";

type State = {
  tela: string;
};

export default class Roteador extends Component<{}, State> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      tela: "/"
    };
  }

  render() {
    return (
      <BrowserRouter>
        <BarraNavegacao
          tema="pink lighten-4"
          botoes={[
            { nome: "Clientes", rota: "/cliente" },
            { nome: "Produtos", rota: "/produto" },
            { nome: "Serviços", rota: "/servico" },
            { nome: "Registrar Venda", rota: "/venda" }
          ]}
        />
        <Rotas />
      </BrowserRouter>
    );
  }
}
