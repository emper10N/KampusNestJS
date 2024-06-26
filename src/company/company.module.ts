import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanyService } from './company.service';
import { Company } from './company.model';
import { CompanyController } from './company.controller';
import { Practice } from 'src/practice/practice.model';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService],
  imports: [SequelizeModule.forFeature([Company, Practice])],
})
export class CompanyModule {}
