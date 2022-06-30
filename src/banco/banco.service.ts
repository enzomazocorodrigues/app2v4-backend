import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { FindAllQuery } from './banco.controller';
import { Banco } from './entities/banco.entity';

@Injectable()
export class BancoService {
  constructor(
    @InjectRepository(Banco)
    private bancosRepository: Repository<Banco>,
  ) {}

  async findAll(query: FindAllQuery): Promise<Banco[]> {
    const { search, limit, offset, filter } = query;
    const order = query.order
      ? Object.fromEntries([[query.order, 'ASC']])
      : { id: 'ASC' };

    const bancos = await this.bancosRepository.find({
      order,
      take: limit,
      skip: offset,
      where: {
        nome: ILike(`%${search || ''}%`),
        estado: {
          nomeAlt: filter,
        },
      },
    });

    return bancos;
  }

  async find(id: number): Promise<Banco> {
    const banco = await this.bancosRepository.findOneBy({ id });
    return banco;
  }

  async save(banco: Banco): Promise<void> {
    await this.bancosRepository.save(banco);
  }

  async remove(id: number): Promise<void> {
    await this.bancosRepository.delete(id);
  }
}
