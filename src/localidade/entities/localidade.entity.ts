import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'localidades' })
export class Localidade {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // idPai;

  @OneToOne(() => Localidade)
  @JoinColumn({ name: 'idPai' })
  pai: Localidade;

  // @Column()
  // idTipo;

  // @Column()
  // idEstado;

  // @Column()
  // isSuspenso;

  @Column()
  nome: string;

  @Column()
  nomeAlt: string;

  @Column()
  nomeAlt2: string;

  // @Column()
  // codigoLocalidade;

  // @Column()
  // capital;

  // @Column()
  // configuracaoRegional;

  // @Column()
  // enderecoNumeroPosicaoInicio;

  // // @Column()
  // // nomeDivisao;

  // // @Column()
  // // nomeSubdivisao;

  // // @Column()
  // // latitude;

  // // @Column()
  // // longitude;

  // // @Column()
  // // altitude;

  // // @Column()
  // // options;

  // // @Column()
  // // observacao;

  // // @Column()
  // // observacoes;

  // @Column()
  // dataEstado;

  // @Column()
  // dataAtualizacao;
}
