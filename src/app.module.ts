import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Banco } from './banco/entities/banco.entity';
import { BancoModule } from './banco/banco.module';
import { LayoutCheque } from './banco/entities/layout-cheque.entity';
import { Estado } from './estado/entities/estado.entity';
import { Localidade } from './localidade/entities/localidade.entity';

@Module({
  controllers: [AppController],
  imports: [
    BancoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'app2-database.w4y.com.br',
      port: 5432,
      username: 'postgres',
      password: 'Posapp2020',
      database: 'app2',
      autoLoadEntities: true,
      entities: [Banco, LayoutCheque, Estado, Localidade],
    }),
  ],
})
export class AppModule {}
