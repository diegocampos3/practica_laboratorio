import { Ciudad } from "src/ciudad/entities/ciudad.entity";
import { Estado } from "src/estado/entities/estado.entity";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('ibos')
export class Ibo {

    @PrimaryGeneratedColumn('uuid')
    nro_ibo: string;

    @Column('varchar', { length: 50 })
    nombre: string;

    @Column('varchar', { length: 15 })
    telefono: string;

    @Column('varchar', { length: 10 })
    id_domicilio_envio: string;

    @Column('varchar', { length: 50 })
    direccion_fisica: string;

    // Relación con la tabla ciudad
    @ManyToOne(() => Ciudad, (ciudad) => ciudad.ibos)
    id_ciudad: number;

    @ManyToOne(() => Estado, (estado) => estado.ibos)
    id_estado: number;

    @Column('varchar', { length: 20 })
    correo: string;
    pedidos: any;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.correo = this.correo.toLocaleLowerCase().trim();
    }
}
