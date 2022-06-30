import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Estado } from 'src/estado/entities/estado.entity';
import { Localidade } from 'src/localidade/entities/localidade.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LayoutCheque } from './layout-cheque.entity';

@Entity({ name: 'bancos' })
export class Banco {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNumber()
  @Column()
  idTipo: number;

  // @IsNumber()
  // @Column()
  // idEstado: number;

  @ManyToOne(() => Estado, { eager: true })
  @JoinColumn({ name: 'idEstado' })
  estado: Estado;

  @IsBoolean()
  @Column()
  isSuspenso: boolean;

  @MaxLength(40)
  @IsNotEmpty()
  @IsString()
  @Column()
  nome: string;

  @MaxLength(25)
  @IsNotEmpty()
  @IsString()
  @Column()
  nomeAlt: string;

  @MaxLength(6)
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  @Column({ nullable: true })
  swiftPrefixo: string;

  @MaxLength(4)
  @IsNotEmpty()
  @IsString()
  @Column()
  codigo: string;

  // @IsNumber()
  // @Column()
  // idPais: number;

  @OneToOne(() => Localidade, { eager: true })
  @JoinColumn({ name: 'idPais' })
  pais: Localidade;

  @MaxLength(50)
  @IsString()
  @IsOptional()
  @Column({ nullable: true })
  observacao: string;

  @IsString()
  @IsOptional()
  @Column({ nullable: true })
  observacoes: string;

  @IsDateString()
  @IsOptional()
  @Column({ nullable: true })
  dataAtualizacao: Date;

  @OneToOne(() => LayoutCheque, (layoutCheque) => layoutCheque.pai, {
    eager: true,
  })
  layoutCheque: LayoutCheque;
}
