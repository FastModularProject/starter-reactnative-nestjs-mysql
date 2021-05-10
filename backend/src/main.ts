import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { TransformInterceptor } from './shared/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });
  app.enableCors({
    origin: true,
    credentials: true,
  });
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  Logger.log('Listened on PORT 3000');
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
