import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './company.model';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company) private companyRepository: typeof Company,
  ) {}

  async createUser(dto: CreateCompanyDto): Promise<Company> {
    return await this.companyRepository.create(dto);
  }

  async getAllUsers() {
    return await this.companyRepository.findAll();
  }
}
