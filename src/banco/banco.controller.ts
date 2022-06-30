import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Banco } from './entities/banco.entity';
import { BancoService } from './banco.service';

export type FindAllQuery = {
  search?: string;
  offset?: number;
  limit?: number;
  order?: keyof Banco;
  filter?: string;
};

@Controller('bancos')
export class BancoController {
  constructor(private readonly bancoService: BancoService) {}

  @Get('/')
  async findAll(@Query() query: FindAllQuery): Promise<Banco[]> {
    return this.bancoService.findAll(query);
  }

  @Get('/:id')
  async find(@Param('id', ParseIntPipe) id: number): Promise<Banco> {
    return this.bancoService.find(id);
  }

  @Post('/')
  async create(@Body() banco: Banco): Promise<void> {
    this.bancoService.save(banco);
  }

  @Put('/')
  async update(@Body() banco: Banco): Promise<void> {
    this.bancoService.save(banco);
  }

  @Delete('/:id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.bancoService.remove(id);
  }
}
