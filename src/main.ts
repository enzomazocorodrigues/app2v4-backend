import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const HOST = process.env.HOST || '0.0.0.0';
  const PORT = parseInt(process.env.PORT) || 5000;

  await app.listen(PORT, HOST, () => {
    Logger.log('Server running...');
  });
}
bootstrap();
