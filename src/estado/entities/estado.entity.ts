import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'estados' })
export class Estado {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // idTipo: number;

  // @Column()
  // isSuspenso: boolean;

  @Column()
  nome: string;

  @Column()
  nomeAlt: string;

  // @Column()
  // ativo: boolean;

  // @Column()
  // pendente: boolean;

  // @Column()
  // suspender: boolean;

  // @Column()
  // deletar: boolean;

  // @Column()
  // observacao: string;

  // @Column()
  // observacoes: string;

  // @Column()
  // dataEstado: Date;

  // @Column()
  // dataAtualizacao: Date;
}
