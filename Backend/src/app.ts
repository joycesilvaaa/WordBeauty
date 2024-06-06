import 'reflect-metadata'
import express  from 'express'
import cors from 'cors'
import { Connection } from './database/data-source'
import RoutesProduto from './routes/Produto/produtoRouter'
import RoutesServico from  './routes/Servico/servicoRouter'
import RoutesCliente from  './routes/Cliente/cliente'
import RoutesFuncionario from './routes/Funcionario/funcionarioRouter'
import RoutesVenda from './routes/Venda/vendaRouter'
import FuncionarioService from './service/Funcionario/funcionarioService'
import Funcionario from './entity/Funcionario/funcionario'

const app = express()
app.use(express.json())
app.use(cors())
app.use(RoutesProduto)
app.use(RoutesServico)
app.use(RoutesCliente)
app.use(RoutesFuncionario)
app.use(RoutesVenda)

async function iniciaProjeto(){
    try{
        await Connection.initialize()
        console.log(`Banco de dados conectado :)`)
        const porta = 5000
        app.listen(porta, ()=>{
            console.log(`Servidor rodando na porta ${porta}.`)
        })
        insereFuncionario()
    }catch(error){
        console.error(`Erro ao inicializar projeto: ${error}`)
    }
}

iniciaProjeto()

async function insereFuncionario() {
    const funcionarioRepository =  await Connection.getRepository(Funcionario)
    const count =  await funcionarioRepository.count()
    const funcionario = await funcionarioRepository.findOne({
        where: { email: 'gersonpenha@gmail.com' }
    })
    const cadastraFuncionario = new FuncionarioService()
    if (count === 0 || !funcionario){
        const dadosFuncionario = {
        nome: 'Gerson',
        sobrenome: 'Penha',
        email: 'gersonpenha@gmail.com',
        senha: 'wb123'
    }
    await cadastraFuncionario.criarFuncionario(dadosFuncionario)
    console.log(`Funcionario Cadastrado!`)
    }
}