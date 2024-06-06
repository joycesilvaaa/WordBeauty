import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import Cliente from "./cliente";

@Entity({ name:'Rg' })
class Rg {
    @PrimaryGeneratedColumn({ type: 'int'})
    rgId: number

    @Column({ type: 'varchar', length: 9})
    valor: string

    @Column({ type: 'date' })
    dataEmissao : Date

    @ManyToOne(() => Cliente, cliente => cliente.rgs, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    @JoinColumn({ name: 'cliId' })
    cliente: Cliente
}
export default Rg