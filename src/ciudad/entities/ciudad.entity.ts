import { Estado } from "src/estado/entities/estado.entity";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('ciudad')
export class Ciudad {

    @PrimaryGeneratedColumn('uuid')
    id_ciudad: string;

    @Column('varchar', { length: 20 })
    ciudad: string;

    @ManyToOne(() => Estado, (estado) => estado.ciudades)
    id_estado: number;
    ibos: any;
    pedidos: any;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.ciudad = this.ciudad.trim();
    }
}
