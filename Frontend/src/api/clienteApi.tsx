import { CadastrarCliente, EditarCliente } from "../Interface/interface";
import api from "../services/api";

export async function listaClientes() {
    try {
        const results = await api.get(`/clientes`);
        if (!results) {
            console.error(`Erro ao encontrar resultados`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao listar os clientes: ${error}`);
    }
}

export async function clienteEspecifico(id: number) {
    try {
        const results = await api.get(`/cliente/${id}`);
        if (!results) {
            console.error(`Nenhum resultado encontrado`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao buscar cliente específico: ${error}`);
    }
}

export async function cadastrarCliente(dadosCadastro: CadastrarCliente) {
    try {
        const results = await api.post(`/cliente/cadastrar`, dadosCadastro);
        if (!results) {
            console.error(`Nenhum resultado encontrado`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao cadastrar cliente: ${error}`);
    }
}

export async function excluirCliente(id: number) {
    try {
        const results = await api.get(`/cliente/excluir/${id}`);
        if (!results) {
            console.error(`Nenhum resultado encontrado`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao excluir cliente: ${error}`);
    }
}

export async function editaCliente(id: number, dadosUpdate: EditarCliente) {
    try {
        const results = await api.put(`/cliente/atualizar/${id}`, dadosUpdate);
        if (!results) {
            console.error(`Nenhum resultado encontrado`);
        }
        return results;
    } catch (error) {
        console.error(`Erro ao atualizar cliente: ${error}`);
    }
}
