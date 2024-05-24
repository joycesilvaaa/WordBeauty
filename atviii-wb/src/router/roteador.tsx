import { BrowserRouter } from 'react-router-dom'; // Importe BrowserRouter
import BarraNavegacao from "../componente/NavBar/barraDeNavegacao";
import Rotas from './rotas';
import 'materialize-css/dist/css/materialize.min.css';
import { useEffect } from 'react';
import M from 'materialize-css';

function Roteador(){
    useEffect(() => {
        M.AutoInit();
    }, []);
    const botoes = [
        {nome: 'Cliente', rota: '/'},
        {nome: 'Produto', rota: '/produto'},
        {nome: 'Serviço', rota: '/servico'},
        {nome: 'Registrar Venda', rota: '/venda'}
    ]
    return(
        <BrowserRouter> {/* Envolve os componentes em BrowserRouter */}
            <BarraNavegacao botoes={botoes}/>
            <Rotas/>
        </BrowserRouter>
    )
}

export default Roteador;
