import { Controller, Get, Post, Body } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentService: StudentsService) {}

  @Post('register')
  async registerStudent(
    @Body() studentData: Partial<Student>,
  ): Promise<Student> {
    return this.studentService.create(studentData);
  }

  @Get()
  async getStudents(): Promise<Student[]> {
    return this.studentService.findAll();
  }
}
