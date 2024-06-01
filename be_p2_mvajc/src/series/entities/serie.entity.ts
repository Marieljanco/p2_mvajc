import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('series')
export class Serie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 250, nullable: false })
  titulo: string;

  @Column('varchar', { length: 5000, nullable: false })
  sinopsis: string;
  
  @Column('varchar', { length: 100, nullable: false })
  director: string;
  
  @Column('int', { nullable: false })
  temporadas: number;

  @CreateDateColumn({ name: 'fecha_estreno', nullable: false })
  fecha_estreno: Date;

}
