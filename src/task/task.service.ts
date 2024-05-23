import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task) private TaskRepository: typeof Task) {}

  async createUser(dto: CreateTaskDto): Promise<Task> {
    return await this.TaskRepository.create(dto);
  }

  async getAllUsers() {
    return await this.TaskRepository.findAll();
  }
}
