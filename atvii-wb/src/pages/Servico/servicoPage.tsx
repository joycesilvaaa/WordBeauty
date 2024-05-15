import { Component, ReactNode } from "react";
import NavTab from "../../componentes/Nav/navTab";
import ListagemServico from "../../componentes/Listagem/Servico/listagemServico";
import GerenciarServico from "../../componentes/Gerenciar/Servico/gerenciarServico";

class ServicoPage extends Component{
    render(): ReactNode {
        return(
            <>
                <NavTab ListComponent={ListagemServico} ManageComponent={GerenciarServico}/>
            </>
        )
    }
}
export default ServicoPage