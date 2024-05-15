import { Routes, Route } from 'react-router-dom'
import { Component } from 'react'
import ClientePage from '../pages/Cliente/clientePage'
import ProdutoPage from '../pages/Produto/produtoPage'
import ServicoPage from '../pages/Servico/servicoPage'
import VendaPage from '../pages/Venda/vendaPage'

export default class Rotas extends Component{
   render(){
    return (
        <Routes>
            <Route path='/' element={<ClientePage/>}/>
            <Route path="/produto"  element={<ProdutoPage/>}/>
            <Route path="/servico"  element={<ServicoPage/>}/>
            <Route path="/venda"  element={<VendaPage/>}/>
        </Routes>
    )
}}