import { Injectable } from '@nestjs/common';
import { Practice } from './practice.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePracticeDto } from './dto/create-practice.dto';
import { Company } from 'src/company/company.model';
import { Repository } from 'sequelize-typescript';
import { Role } from 'src/role/role.model';
import { Task } from 'src/task/task.model';

export interface GetPractice {
  id: number;
  role: string;
  company: string;
  title: string;
  description: string;
  employerHref: string | URL;
  testTask?: string | URL | undefined;
  isActive?: boolean;
  internshipEnding?: Date | string | undefined;
  internshipBeginning?: Date | string | undefined;
}

@Injectable()
export class PracticeService {
  constructor(
    @InjectModel(Practice) private practiceRepository: Repository<Practice>,
    @InjectModel(Company) private companyRepository: Repository<Company>,
    @InjectModel(Role) private roleRepository: Repository<Role>,
    @InjectModel(Task) private taskRepository: Repository<Task>,
  ) {}

  async createPractice(dto: CreatePracticeDto): Promise<Practice> {
    return await this.practiceRepository.create(dto);
  }

  async getAllPractice(): Promise<GetPractice[]> {
    const reviews = await this.practiceRepository.findAll();

    const getPracticePromises = reviews.map(async (practice) => {
      const company = await this.companyRepository.findByPk(practice.companyId);
      const role = await this.roleRepository.findByPk(practice.roleId);
      const task = await this.taskRepository.findByPk(role.id);

      return {
        id: practice.id,
        role: role.title,
        company: company.title,
        title: practice.role,
        description: practice.description,
        employerHref: company.companyHref,
        testTask: task.condition,
        isActive: practice.isActive,
        internshipEnding: practice.internshipEnding,
        internshipBeginning: practice.internshipBeginning,
      };
    });

    const result = await Promise.all(getPracticePromises);
    return result;
  }
}
