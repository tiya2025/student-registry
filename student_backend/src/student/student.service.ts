import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepo: Repository<Student>,
  ) {}

  // CREATE
  async createStudent(data: Partial<Student>): Promise<Student> {
    const student = this.studentRepo.create(data);
    return this.studentRepo.save(student);
  }

  // READ
  async getAllStudents(): Promise<Student[]> {
    return this.studentRepo.find();
  }

  // UPDATE
  async updateStudent(id: number, data: Partial<Student>): Promise<any> {
    return this.studentRepo.update(id, data);
  }

  // DELETE
  async deleteStudent(id: number): Promise<any> {
    return this.studentRepo.delete(id);
  }
}

