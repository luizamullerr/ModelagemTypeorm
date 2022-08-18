import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("tb_cliente")
export class cliente {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nome: string
    @Column()
    fone: string
    @Column()
    email: string
}
