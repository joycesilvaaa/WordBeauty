/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import { Link } from "react-router-dom";

type rota ={
    nome: string,
    rota: any
}

type props = {
    tema: string,
    botoes: rota[]
}

export default class BarraNavegacao extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this)
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems)
        });
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>;
        } else {
            let lista = this.props.botoes.map(valor => (
                <li  key={valor.nome}>
                    <Link to={valor.rota}>{valor.nome}</Link>
                </li>
            ));
            return lista;
        }
    }
    

    render() {
        let estilo = `${this.props.tema}`
        return (
            <>
                <nav className={estilo} style={{ outline: 'none' }}>
                    <div className="nav-wrapper">
                        <a className="brand-logo" style={{ marginLeft: '2rem', fontSize: '25px'}}>World Beauty</a>
                        <a data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {this.gerarListaBotoes()}
                        </ul>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-menu" style={{ outline: 'none'}} >
                    {this.gerarListaBotoes()}
                </ul>
            </>
        )
    }
}