import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const doc = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, doc);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
