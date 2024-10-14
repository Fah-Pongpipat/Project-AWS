import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { Student } from './students/entities/student.entity';
import { StudentsController } from './students/students.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // ใส่ endpoint ของ RDS
      port: 3306, // ใส่ port ที่ใช้ เช่น 3306
      username: 'root', // ชื่อผู้ใช้ของ RDS
      password: 'Fah#piigtryz12', // รหัสผ่านของ RDS
      database: 'student_registration', // ชื่อฐานข้อมูลใน RDS
      entities: [Student],
      synchronize: true, // ตั้งค่าเป็น true เพื่อตั้งค่าตารางอัตโนมัติ (ใน production ให้ใช้ false)
    }),
    StudentsModule,
  ],
  controllers: [AppController, StudentsController],
  providers: [AppService],
})
export class AppModule {}
