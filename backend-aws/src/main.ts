import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // เปิดใช้งาน CORS
  app.enableCors({
    origin: 'http://localhost:5173', // เปลี่ยนเป็นที่อยู่ของ Vue.js
  });

  await app.listen(3000);
}
bootstrap();
