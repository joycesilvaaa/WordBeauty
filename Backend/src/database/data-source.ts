import "reflect-metadata"
import { DataSource } from "typeorm"
import Cpf from "../entity/Cliente/cpf"
import Rg from "../entity/Cliente/rg"
import Telefone from "../entity/Cliente/telefone"
import Cliente from "../entity/Cliente/cliente"
import Produto from "../entity/Produto/produto"
import Servico from "../entity/Servico/servico"
import Funcionario from "../entity/Funcionario/funcionario"
import Venda from "../entity/Venda/venda"

export const Connection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "fatec",
    database: "wb",
    synchronize: false,
    logging: false,
    entities: [Cliente, Cpf,Rg,Telefone,Produto,Servico, Funcionario,Venda],
    migrations: [],
    subscribers: [],
})
