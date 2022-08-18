import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "./Produto"
import { venda } from "./Venda"

@Entity("tb_carrinho")
export class carrinho {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    quantidade: string
    @Column()
    preco: string
    
    @ManyToOne(() => Produto, (produto) => produto.id)
    @JoinColumn({name:'idproduto'})
    produto: Produto


    @ManyToOne(() => venda, (venda) => venda.id)
    @JoinColumn({name:'idvenda'})
    venda: venda
    

}