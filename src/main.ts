// Dependencies
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppConfig } from './config/app.config';
import { AppModule } from './modules/app.module';

/**
 * Main file to starts the application.
 * 
 * @author Daniel Mejia
 * @file main.ts
 */
async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule)
  AppConfig.configure(app);
  await app.listen(3000);
}
bootstrap();