import { Button } from "react-bootstrap";
import './style.css'

interface FormCadastroProps {
  tipo: string;
}

function FormularioCadastro({ tipo }: FormCadastroProps) {
  let content;
  switch (tipo) {
    case "cliente":
      content = (
        <>
          <div className="row">
            <div className="input-field col s6">
              <input id="nome" type="text" className="validate" name="nome" />
              <label htmlFor="nome">Nome</label>
            </div>
            <div className="input-field col s6">
              <input
                id="nome_social"
                type="text"
                className="validate"
                name="nome_social"
              />
              <label htmlFor="nome_social">Nome Social (opcional)</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="rg" type="text" className="validate" name="rg" />
              <label htmlFor="rg">RG</label>
            </div>
            <div className="input-field col s6">
              <input id="cpf" type="text" className="validate" name="cpf" />
              <label htmlFor="cpf">CPF</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="telefone"
                type="text"
                className="validate"
                name="telefone"
              />
              <label htmlFor="telefone">Telefone</label>
            </div>
            <div className="input-field col s6">
              <input
                id="email"
                type="email"
                className="validate"
                name="email"
              />
              <label htmlFor="email">E-mail</label>
            </div>
          </div>
        </>
      );
      break;
    case "produto":
      content = (
        <>
          <div className="row">
            <div className="input-field col s6">
              <input id="nome" type="text" className="validate" name="nome" />
              <label htmlFor="nome">Nome do Produto</label>
            </div>
            <div className="input-field col s6">
              <input
                id="valor_prod"
                type="text"
                className="validate"
                name="valor_prod"
              />
              <label htmlFor="valor_prod">Valor do Produto</label>
            </div>
          </div>
        </>
      );
      break;
    case "servico":
      content = (
        <>
          <div className="row">
            <div className="input-field col s6">
              <input id="nome" type="text" className="validate" name="nome" />
              <label htmlFor="nome">Nome do Serviço</label>
            </div>
            <div className="input-field col s6">
              <input
                id="valor_serv"
                type="text"
                className="validate"
                name="valor_serv"
              />
              <label htmlFor="valor_serv">Valor do Serviço</label>
            </div>
          </div>
        </>
      );
      break;
    default:
      content = null;
      break;
  }
  return (
    <form className="col s12">
      {content}
      <div className="row">
        <div className="col s12">
          <Button type="submit" variant="danger" name="action">
            Cadastrar
          </Button>
        </div>
      </div>
    </form>
  );
}
export default FormularioCadastro