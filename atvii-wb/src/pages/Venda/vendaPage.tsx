import { Component, ReactNode } from "react";
import FormularioVenda from "../../componentes/Formulario/RegistroVenda/formularioVenda";

class VendaPage extends Component{
    render(): ReactNode {
        return(
            <>
                <FormularioVenda/>
            </>
        )
    }
}
export default VendaPage