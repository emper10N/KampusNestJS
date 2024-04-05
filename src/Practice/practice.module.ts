import { Module } from '@nestjs/common';
import { PracticeController } from './practice.controller';
import { PracticeService } from './practice.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Practice } from './practice.model';

@Module({
  controllers: [PracticeController],
  providers: [PracticeService],
  imports: [SequelizeModule.forFeature([Practice])],
})
export class PracticeModule {}
