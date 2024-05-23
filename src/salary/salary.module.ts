import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SalaryService } from './salary.service';
import { SalaryController } from './salary.controller';
import { Salary } from './salary.model';

@Module({
  controllers: [SalaryController],
  providers: [SalaryService],
  imports: [SequelizeModule.forFeature([Salary])],
})
export class SalaryModule {}
