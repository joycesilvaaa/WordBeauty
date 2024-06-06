import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Venda from "../Venda/venda";

@Entity({ name: 'Funcionario' })
class Funcionario{
    @PrimaryGeneratedColumn({ type: 'int' })
    funcionarioId: number

    @Column({ type: 'varchar' })
    nome: string

    @Column({ type: "varchar"})
    sobrenome: string

    @Column({ type: 'varchar'})
    email: string

    @Column({ type: 'varchar', length: 250})
    senha: string

    @OneToMany(()=> Venda, venda => venda.funcionario)
    vendas: Venda[]
}
export default Funcionario