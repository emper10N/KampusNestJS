import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './task.model';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@ApiTags('Задачи')
@Controller('tasks')
export class TaskController {
  constructor(public taskService: TaskService) {}

  @ApiOperation({ summary: 'Создание задачи' })
  @ApiResponse({ status: 200, type: Task })
  @Post()
  create(@Body() taskDto: CreateTaskDto) {
    return this.taskService.createUser(taskDto);
  }

  @ApiOperation({ summary: 'Получение всех задач' })
  @ApiResponse({ status: 200, type: [Task] })
  @Get()
  getAll() {
    return this.taskService.getAllUsers();
  }
}
