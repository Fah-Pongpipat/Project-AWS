import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  // ฟังก์ชันสำหรับการสุ่ม user_id 6 หลัก
  private generateUserId(): number {
    return Math.floor(10000000 + Math.random() * 900000);
  }

  async create(studentData: Partial<Student>): Promise<Student> {
    const student = this.studentRepository.create({
      ...studentData,
      user_id: this.generateUserId(),
    });
    return this.studentRepository.save(student); // ต้องมั่นใจว่าตัวนี้ส่งกลับ Student ที่มี user_id
  }

  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }
}
