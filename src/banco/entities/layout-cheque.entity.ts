import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Banco } from './banco.entity';

@Entity({ name: 'bancos_layoutCheques' })
export class LayoutCheque {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // idPai: number;

  @Column()
  idCampo: number;

  @Column()
  linha: number;

  @Column()
  coluna: number;

  @Column()
  tamanho: number;

  @OneToOne(() => Banco, (banco) => banco.layoutCheque)
  @JoinColumn({ name: 'idPai' })
  pai: Banco;
}
