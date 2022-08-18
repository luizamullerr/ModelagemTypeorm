import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"


@Entity("tb_produto")
export class Produto {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    descricao: string
    @Column()
    preco: string
    @Column()
    estoque: string


}