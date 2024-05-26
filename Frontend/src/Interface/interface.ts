 export interface Telefone {
    ddd: string,
    numero: string
}

export interface Endereco {
    estado: string,
    cidade: string,
    bairro: string,
    rua: string,
    numero: string,
    codigoPostal: string,
    informacoesAdicionais?: string
}

export interface EditarCliente {
    nome?: string,
    sobrenome?: string,
    email?: string,
    endereco?: {
        estado?: string;
        cidade?: string;
        bairro?: string;
        rua?: string;
        numero?: string;
        codigoPostal?: string;
        informacoesAdicionais?: string;
    }
    telefones?: Telefone[]
}

export interface CadastrarCliente {
    nome: string,
    sobrenome: string,
    email: string,
    endereco: {
        estado: string;
        cidade: string;
        bairro: string;
        rua: string;
        numero: string;
        codigoPostal: string;
        informacoesAdicionais: string;
    }
    telefones: Telefone[]
}

export interface Cliente{
    id: number,
    nome: string,
    sobrenome: string,
    email: string,
    endereco: {
        estado: string;
        cidade: string;
        bairro: string;
        rua: string;
        numero: string;
        codigoPostal: string;
        informacoesAdicionais: string;
    }
    telefones: Telefone[]
}
