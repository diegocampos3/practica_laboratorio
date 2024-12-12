import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estado')
export class Estado {

    @PrimaryGeneratedColumn('uuid')
    id_estado: string;

    @Column('varchar', { length: 20 })
    estado: string;

    @Column('integer')
    codigo_postal: number;
    ciudades: any;
    ibos: any;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.estado = this.estado.trim();
    }
}
