import { Pedido } from "src/pedido/entities/pedido.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('factura_pedido')
export class FacturaPedido {

    @PrimaryGeneratedColumn('uuid')
    nro_factura: string;

    @ManyToOne(() => Pedido, (pedido) => pedido.nro_pedido)
    nro_pedido: Pedido;

    @Column('money')
    subtotal_mercancia: string;

    @Column('money')
    cargo_entrega: string;

    @Column('money')
    impuesto_ventas: string;

    @Column('money')
    total: string;
}
