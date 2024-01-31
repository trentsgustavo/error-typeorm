import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
    {
      bodyParser: false,
      cors: {
        origin: ['*'],
        allowedHeaders: [
          'Access-Control-Allow-Origin',
          'Origin',
          'X-Requested-With',
          'Accept',
          'Content-Type',
          'Authorization',
        ],
        credentials: false,
        methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE'],
      },
    },
  );

  await app.init();

  const config = new DocumentBuilder()
    .setTitle('Solicitação de Acessos API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3001);
}
bootstrap();
