import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }

  @Get()
  async findAll() {
    return this.studentService.getAllStudents();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Student>) {
    return this.studentService.updateStudent(+id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.studentService.deleteStudent(+id);
  }
}
