import { Pedido } from "src/pedido/entities/pedido.entity";
import { Articulo } from "src/articulos/entities/articulo.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('articulos_pedido')
export class ArticulosPedido {

    @PrimaryGeneratedColumn('uuid')
    id_articulos_pedidos: string;

    @ManyToOne(() => Pedido, (pedido) => pedido.nro_pedido)
    nro_pedido: Pedido;

    @ManyToOne(() => Articulo, (articulo) => articulo.id_articulo)
    id_articulo: Articulo;

    @Column('integer')
    cantidad: number;

    @Column('money')
    subtotal_articulo: string;
}
