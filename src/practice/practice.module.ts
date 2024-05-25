import { Module } from '@nestjs/common';
import { PracticeController } from './practice.controller';
import { PracticeService } from './practice.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Practice } from './practice.model';
import { Company } from 'src/company/company.model';
import { Role } from 'src/role/role.model';
import { Task } from 'src/task/task.model';

@Module({
  controllers: [PracticeController],
  providers: [PracticeService],
  imports: [SequelizeModule.forFeature([Practice, Company, Role, Task])],
})
export class PracticeModule {}
