import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>, // ✅ Use Repository<Student>
  ) {}

  async createStudent(data: Partial<Student>) {
    const student = this.studentRepo.create(data);
    return this.studentRepo.save(student);
  }

  async getAllStudents() {
    return this.studentRepo.find();
  }

  async updateStudent(id: number, data: Partial<Student>) {
    return this.studentRepo.update(id, data);
  }

  async deleteStudent(id: number) {
    return this.studentRepo.delete(id);
  }
}
