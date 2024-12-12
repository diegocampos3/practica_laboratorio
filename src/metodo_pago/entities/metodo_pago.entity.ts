import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('metodo_pago')
export class MetodoPago {

    @PrimaryGeneratedColumn('uuid')
    id_metodo_pago: string;

    @Column('varchar', { length: 20 })
    metodo_pago: string;
    pedidos: any;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.metodo_pago = this.metodo_pago.trim();
    }
}
