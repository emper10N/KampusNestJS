import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { PracticeModule } from './practice/practice.module';
import { ReviewModule } from './review/review.module';
import { Practice } from './Practice/practice.model';
import { Review } from './Review/review.model';

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
      models: [Review, Practice],
      autoLoadModels: true,
    }),
    PracticeModule,
    ReviewModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
