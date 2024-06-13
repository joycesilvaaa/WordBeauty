import { CadastrarCliente, EditarCliente } from "../Interface/interface";

export async function listaClientes() {
    try {
        const response = await fetch('http://localhost:32832/clientes');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Erro ao listar os clientes: ${error}`);
    }
}

export async function clienteEspecifico(id: number) {
    try {
        const results = await fetch(`http://localhost:32832/cliente/${id}`);
        const data = await results.json();
        return data;
    } catch (error) {
        console.error(`Erro ao buscar cliente específico: ${error}`);
    }
}

export async function cadastrarCliente(dadosCadastro: CadastrarCliente) {
    try {
        const results = await fetch(`http://localhost:32832/cliente/cadastrar`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosCadastro)
        });
        console.log(results)
        if (results.ok){
            console.error(`Cliente cadastrado!`);
            return { success: true, message: `Cliente cadastrado com sucesso.`}
        }
        return { success: false, message: `Não foi possivel excluir o cliente.`};
    } catch (error) {
        console.error(`Erro ao cadastrar cliente: ${error}`);
    }
}

export async function excluirCliente(cliente: number) {
    try {
        const results = await fetch('http://localhost:32832/cliente/excluir', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: cliente})
        })
        console.log(results)
        if (results.ok) {
            console.error(`Cliente exluido!`);
            return { success: true, message: `Cliente excluido com sucesso.`}
        }
        return { success: false, message: `Não foi possivel excluir o cliente.`};
    } catch (error) {
        console.error(`Erro ao excluir cliente: ${error}`);
    }
}

export async function editaCliente( dadosUpdate: EditarCliente) {
    try {
        const results = await fetch(`http://localhost:32832/cliente/atualizar`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosUpdate)
        });
        if (results.ok){
            console.error(`Cliente editado!`);
            return { success: true, message: `Cliente editado com sucesso.`}
        }
        return { success: false, message: `Não foi possivel editar o cliente.`};
    } catch (error) {
        console.error(`Erro ao atualizar cliente: ${error}`);
    }
}
