import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Ibo } from "src/ibos/entities/ibo.entity";
import { MetodoPago } from "src/metodo_pago/entities/metodo_pago.entity";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pedido')
export class Pedido {

    @PrimaryGeneratedColumn('uuid')
    nro_pedido: string;

    @ManyToOne(() => Ibo, (ibo) => ibo.pedidos)
    nro_ibo_emisor: string;

    @Column('uuid')
    nro_ibo_receptor: string;

    @Column('timestamp')
    fecha_pedido: Date;

    @Column('varchar', { length: 10 })
    id_domicilio_envio: string;

    @Column('varchar', { length: 20 })
    nombre: string;

    @Column('varchar', { length: 50 })
    direccion_fisica_envio: string;

    @ManyToOne(() => Ciudad, (ciudad) => ciudad.pedidos)
    id_ciudad: number;

    @Column('boolean', { default: false })
    actualizacion: boolean;

    @Column('varchar', { length: 20 })
    correo: string;

    @ManyToOne(() => MetodoPago, (metodoPago) => metodoPago.pedidos)
    id_metodo_pago: string;

    @Column('varchar', { length: 10 })
    nro_cheque: string;

    @Column('varchar', { length: 10 })
    nro_tarjeta: string;

    @Column('varchar', { length: 20 })
    nombre_tarjetahabiente: string;

    @Column('timestamp')
    fecha_vencimiento: Date;
}
