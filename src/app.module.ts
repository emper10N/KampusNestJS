import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { PracticeModule } from './practice/practice.module';
import { ReviewModule } from './review/review.module';
import { Practice } from './practice/practice.model';
import { Review } from './review/review.model';
import { User } from './uers/users.model';
import { UserModule } from './uers/users.module';
import { Company } from './company/company.model';
import { CompanyModule } from './company/company.module';
import { Role } from './role/role.model';
import { RoleModule } from './role/role.module';
import { Task } from './task/task.model';
import { TaskModule } from './task/task.module';
import { Salary } from './salary/salary.model';
import { SalaryModule } from './salary/salary.module';
import { Complexity } from './complexity/complexity.model';
import { ComplexityModule } from './complexity/complexity.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Review, Practice, User, Company, Role, Task, Salary, Complexity],
      autoLoadModels: true,
      synchronize: true,
    }),
    PracticeModule,
    ReviewModule,
    UserModule,
    CompanyModule,
    RoleModule,
    TaskModule,
    SalaryModule,
    ComplexityModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
