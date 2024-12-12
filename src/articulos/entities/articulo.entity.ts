import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('articulos')
export class Articulo {

    @PrimaryGeneratedColumn('uuid')
    id_articulo: string;

    @Column('varchar', { length: 20 })
    color: string;

    @Column('char', { length: 1 })
    talla: string;

    @Column('varchar', { length: 50 })
    descripcion: string;

    @Column('money')
    precio: string;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.descripcion = this.descripcion.trim();
    }
}
