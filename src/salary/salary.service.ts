import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { Salary } from './salary.model';

@Injectable()
export class SalaryService {
  constructor(@InjectModel(Salary) private SalaryRepository: typeof Salary) {}

  async createUser(dto: CreateSalaryDto): Promise<Salary> {
    return await this.SalaryRepository.create(dto);
  }

  async getAllUsers() {
    return await this.SalaryRepository.findAll();
  }
}
