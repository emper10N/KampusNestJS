import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { Task } from './task.model';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [SequelizeModule.forFeature([Task])],
})
export class TaskModule {}
