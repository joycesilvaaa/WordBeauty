import { Component, ReactNode } from "react";
import NavTab from "../../componentes/Nav/navTab";
import ListagemProduto from "../../componentes/Listagem/Produto/listagemProduto";
import GerenciarProduto from "../../componentes/Gerenciar/Produto/gerenciarProduto";

class ProdutoPage extends Component{
    render(): ReactNode {
        return(
            <>
                <NavTab ListComponent={ListagemProduto} ManageComponent={GerenciarProduto}/>
            </>
        )
    }
}
export default ProdutoPage