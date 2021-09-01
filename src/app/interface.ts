import { EnumFilial } from '../app/filial'

export interface Funcionario {
    nome: string,
    cpf: string,
    filial: EnumFilial,
    dataAdmissao: Date,
    cargo: string,
    salario: number;
}