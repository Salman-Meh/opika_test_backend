import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BASE_ROUTE } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(BASE_ROUTE);
  await app.listen(3000);
}

bootstrap();
