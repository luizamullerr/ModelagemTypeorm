import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { cliente } from "./cliente"

@Entity("tb_venda")
export class venda {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    data: Date
    @Column()
    status: string

    @OneToOne(() => cliente)
    @JoinColumn({name:'id_cliente'})
    cliente: cliente

 
}